 
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'preact/hooks'; 
import {THREE_GetGifTexture} from "threejs-gif-texture"; 
import Zip from 'jszip/dist/jszip';
import { saveAs } from 'file-saver';
import Text from "./Texts";

import 'css.gg/icons/css/image.css';
import 'css.gg/icons/css/software-upload.css';
import 'css.gg/icons/css/software-download.css';
import 'css.gg/icons/css/camera.css';
import 'css.gg/icons/css/play-stop-o.css';
import 'css.gg/icons/css/close.css';
import 'css.gg/icons/css/math-plus.css'; 

const VERSION = "1.0.0";

interface PageSource { 
    url:string; 
    blob:Blob;
    fileName:string
}   

class LocalFile implements PageSource {

    readonly url:string;   

    constructor(public readonly blob:Blob, public readonly fileName:string ) {
        this.url = URL.createObjectURL(blob);    
    } 
}

 
const $gifFileName2Loader : { [fileName:string]:Promise<THREE.Texture> } = {};
const $gifFileName2Texture : { [fileName:string]:THREE.Texture } = {};


const webmToMp4Links = `
<br/><br/><b><u>WEBM --&gt; MP4</u></b><br/>
${ ["https://cloudconvert.com/webm-to-mp4", 
    "https://www.freeconvert.com/webm-to-mp4",
    "https://convertio.co/es/webm-mp4/"]
    .map(url=>`<a href="${url}" target="_blank">${url}</a>`) 
    .join("<br/>")
}
`;
 
const FLIPBOOKCONFIG = `flipbook-config.json`;
const VALID_IMAGE_EXTENSIONS = ".png, .jpg, .jpeg, .gif";

export function Header() { 
    const [pages, setPages] = useState<(PageSource|null)[]>([]);
    const [pagesAtStart, setPagesAtStart] = useState<(PageSource|null)[]>([]); //used to detect changes

    const [selectedIndex, setSelectedIndex] = useState<number>(-1);
    const [isDragging, setIsDragging] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const myDiv = useRef<HTMLElement>(null);
    const timeDisplay = useRef<HTMLElement>(null);
    const recordButtonRef = useRef<HTMLAnchorElement>(null);
    const emptyWorkspace = selectedIndex==-1;
    const somethingChanged = pagesAtStart.length!=pages.length || pagesAtStart.some( (url,i)=>pages[i]!=url );

    useEffect(()=>{

        //@ts-ignore
        window.ccaptureDisplayListener = time=>{
            if(timeDisplay.current) 
                timeDisplay.current.innerHTML=time;
        }  

        return ()=>{
            //@ts-ignore
            window.ccaptureDisplayListener = null;
        }

    }, []);

    useEffect(()=>{

        const handler = (event)=> {

            if ( event.code === 'Enter' ) {

                recordButtonRef.current?.click();
            }
            
        };

        window.addEventListener('keydown', handler);

        return ()=>window.removeEventListener('keydown', handler);

    } )

    //
    // handle mouseup when the drag mode is on
    //
    useLayoutEffect(()=>{

        if( !isDragging ) return;

        const cancelDrag = ()=>setIsDragging(false);

        window.addEventListener("mouseup", cancelDrag);
        return ()=>window.removeEventListener("mouseup", cancelDrag); 

    },[isDragging]);

    //
    // when the pages change... added, removed, sort...
    // 
    useLayoutEffect(()=>{ 

        emitPages(); 

        //
        // check if we need to load some gifs...
        //
        const gifs = pages.filter( f=>f?.fileName.endsWith(".gif") );

        if( gifs.length )
        { 
            Promise.allSettled(
                gifs.map( f=>loadGifTexture(f!) )
            )
            .then( results => emitPages())
        }

    }, [ pages ]);  
    
    const emitPages = () => {

        const _pages = pages.map(p=>{

            // check if this fileName has Gif data...
            const possiblyGifTexture = $gifFileName2Texture[ p!.fileName ];

            if( possiblyGifTexture )
            {
                return possiblyGifTexture;
            }
            else 
            {
                return p?.url || "";
            }

        });

        if( _pages.length%2 !=0 )
        {
            _pages.push("");
        } 

        const event = new CustomEvent("on:pages", { detail: _pages });
        document.body.dispatchEvent(event);
    }

    /**
     * Loads the gif as a Texture and creates the dictionary entry to locate the Texture vía fileName
     */
    const loadGifTexture = (f:PageSource) => {

        $gifFileName2Loader[ f.fileName ] ??= THREE_GetGifTexture( f.url ); // tal vez falle porque la lib le va a intentar hacer un fetch... 
        
        return $gifFileName2Loader[ f.fileName ].then( texture => {

            $gifFileName2Texture[f.fileName ] = texture;

        });
    }


    /** 
     * @param forCurrentIndex if true the image will be loaded into the current index
     */
    const selectPageFile =( forCurrentIndex:boolean=false )=>{  

        const fileInput = document.createElement("input");
            fileInput.type = "file";
            fileInput.multiple = forCurrentIndex? false : true;
            fileInput.accept = VALID_IMAGE_EXTENSIONS;
            fileInput.style.display = "none";
            document.body.appendChild(fileInput);
            

        fileInput.addEventListener("change", (event) => {
            const files = fileInput.files!; 

            if( forCurrentIndex )
            {
                const file = files[0];
                pages[ selectedIndex ] = new LocalFile(file, file.name);
            }
            else 
            {
                for( const file of files )
                {
                    pages.push(new LocalFile(file, file.name));
                }
            }

            setPages([ ...pages ]);
            fileInput.remove();
        }); 

        fileInput.addEventListener("cancel", (event) => fileInput.remove() ); 

        fileInput.click(); 

    };

    const newBook = ()=>{
        setSelectedIndex(0);
        setPages([]);
        setPagesAtStart([]);
    }
 

    const save = async ()=>{

        if( !pages.length )
        {
            alert( Text.nothingToSave );
            return;
        }

        // poner todo en un zip
        const z = new Zip();
        const index:string[]=[];
        
        for (let i = 0; i < pages.length; i++) 
        {   
            if( !pages[i] || pages[i]?.url=="" )
            {
                index.push("");
            }
            else 
            {
                let name = `${i+1}.${pages[i]!.fileName}`;

                z.file(name, pages[i]!.blob );
                index.push(name);
            } 
        }

        //
        z.file(FLIPBOOKCONFIG, JSON.stringify({ 
            flipbookPages: index,
            version:VERSION 
        }));

        const blob = await z.generateAsync({type:"blob"});

        saveAs(blob, "my-flipbook.zip");
    }
 
    const close = () => {
 
        setSelectedIndex(-1);
        setPages([]);
        setPagesAtStart([]); 
    }

    const open = () => {

        //
        // triger file selection
        //
        const   fileInput = document.createElement("input");
                fileInput.type = "file";
                fileInput.multiple = false;
                fileInput.accept = ".zip";
                fileInput.style.display = "none";

        document.body.appendChild(fileInput); 
 
        //
        // on file select
        //
        fileInput.addEventListener("change", async (event) => {

            fileInput.remove();

            const file      = fileInput.files![0];  
            const z         = new Zip();

            //
            // load zip
            // 
            await z.loadAsync(file);
 
            let sources:PageSource[] = [];
            let config:{[key:string]:any}; 

            //
            // for each image in the zip file...
            //
            try {
            await new Promise( (allDone, oops)=>
            {
                let ops = Promise.resolve(0);

                z.forEach( (path, file)=>{ 
 
                    if( VALID_IMAGE_EXTENSIONS.indexOf( file.name.split(".").pop() )>-1 )
                    {
                        ops = ops.then( ()=>file.async("blob").then( blob=>sources.push( new LocalFile(blob, file.name) ) ) );
                    } 
                    else if(file.name.endsWith(".json"))
                    {
                        ops = ops.then( ()=>file.async("text").then( json=>{
                            config = JSON.parse(json);
                        } ) );
                    }
 
                });

                ops.then( ()=>{

                    if(!config || !Array.isArray(config.flipbookPages) || config.version != VERSION )
                    {
                        oops( Text.invalidZipFile );
                        return;
                    }

                    allDone(true);
                } ); 
            });

            //
            // error during zip reading
            //
            }catch(e){
                alert(e.message??e);
                return;
            }
 
            let _pages:(PageSource|null)[] = [];

            for (let i = 0; i < config!.flipbookPages.length; i++) 
            {
                const pageName = config!.flipbookPages[i];

                if( pageName=="" )
                {
                    _pages.push(null);
                }
                else 
                {
                    let source = sources.find(s=>s.fileName==pageName)  ;

                    if(!source)
                    {
                        alert(Text.missingPageError.replace("$pag",(i+1).toString()).replace("$img",pageName) );
                        _pages.push(null);
                    }
                    else 
                    {
                        _pages.push(source);
                    }  
                } 
            }

            if(!_pages.length)
            {
                alert( Text.emptyZipError );
            }
            else 
            {
                //
                // done, set data.
                //
                setPagesAtStart([..._pages]);
                setPages(_pages); 
                setSelectedIndex(0); 
            }

            
            
        }); 

        //
        // on fancel...
        //
        fileInput.addEventListener("cancel", ()=>fileInput.remove());

        //
        // trigger file selection
        //
        fileInput.click(); 

    };

    const onMouseDownThumbnail = (i,ev) => {
        ev.preventDefault();
        setSelectedIndex(i);  
        setIsDragging(true);
        
        const gotoEvent = new CustomEvent("book:goto", { detail:i });
        document.body.dispatchEvent(gotoEvent);
    }

    const onMouseOverThumbnail = (i,ev) => 
    { 
        if( i==selectedIndex || !isDragging) return;
        let old = pages[i];
        pages[i] = pages[selectedIndex];
        pages[selectedIndex] = old;
        setPages([ ...pages ]); 
        setSelectedIndex(i);  
    } 

    const recordAction = () => { 
  

        if( isRecording ) 
        {
            setIsRecording(false);
            document.body.dispatchEvent(new Event("record:stop" ));
        }
        else  
        {
            setIsRecording(true);
            document.body.dispatchEvent(new Event("record:start" ));
        } 
    }

    const onClickDeleteSelection = ev => {
        ev.preventDefault();
        if( confirm(Text.deletePrompt) )
        {
            if( selectedIndex==pages.length-1 )
            {
                setSelectedIndex(pages.length-2);
            }

            setPages(
                pages.filter((p,i)=>i!=selectedIndex)
            ); 
            
        }
    }

    const onClickBlankSelection = ev => {
        if( confirm(Text.setBlankPrompt) )
        {
            let p = pages.slice(0);
            p[selectedIndex]=null;
            setPages(p);
        }
    }
 
	return (
		<header ref={myDiv}>
            <Leyenda/>
                 
			    <div class="numbered-children thumbnails">
				{
                    pages.map( (source,i) => {
                        return <div key={i} >
                            <img onMouseOver={onMouseOverThumbnail.bind(null, i)} onMouseDown={onMouseDownThumbnail.bind(null,i)} src={ source?.url || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAFUlEQVR42mP4DwABDQEB/xlG6wAAAABJRU5ErkJggg==" } height={100} width={100} style={{ touchAction:'pan-x', borderColor:i==selectedIndex?"red":"transparent", animation:i==selectedIndex?"pulseSelection 0.5s ease-in-out infinite":"none"}}/></div>
                    })
                }
                </div>
                <div class="menu"> 


                    { !emptyWorkspace && <>
                    <a href="#" onClick={()=>selectPageFile()} class={"add"}>
                        <i class="gg-math-plus"></i> {Text.btnAddPage}
                    </a> 
                    <a href="#" onClick={()=>close()} class={"open"}>
                        <i class="gg-close"></i> {Text.btnCloseLabel}
                    </a> 
                    { somethingChanged && <a href="#" onClick={()=>save()} class={"save"}>
                        <i class="gg-software-download"></i> {Text.btnSaveLabel}
                    </a>}
                    
                    </>
                    } 

                    { emptyWorkspace && <>
                    <a href="#" onClick={()=>newBook()} class={"save"}>
                        <i class="gg-software-download"></i> {Text.btnNewLabel}
                    </a> 
                    <a href="#" onClick={()=>open()} class={"open"}>
                        <i class="gg-software-upload"></i>  {Text.btnOpenLabel}
                    </a>
                    </>
                    }
 
                      

                    { pages.length>0 && <>
                        <a href="#" class={"record-button"} onClick={recordAction} ref={recordButtonRef}> 
                        { !isRecording && <><i class="gg-camera"></i> &nbsp;{Text.btnStartRecordingLabel}</>}
                        { isRecording && <><i class="gg-play-stop-o"></i> &nbsp;{Text.btnStopRecordingLabel} [<span ref={timeDisplay}></span>]</>}
                 
                        </a>
                    </>}

                    {
                        pages.length>0 && selectedIndex>-1 && <div class={"context"} >
                            <a href="#" class="delete" onClick={onClickDeleteSelection}>[x] {Text.btnDeletePageLabel}</a>
                            {pages[selectedIndex] && <a href="#" class="setblank" onClick={onClickBlankSelection}>[ ] {Text.setToBlank}</a>}
                            {!pages[selectedIndex] && <a href="#" class="setImg" onClick={()=>selectPageFile(true)}>{Text.setImageIntoBlank}</a>}
                        </div>
                    } 
                    
                </div>
		</header>
	);
}  


const Leyenda = ()=>{

    const [open, setOpen]=useState(false);

    if(!open )
    {
        return <div class={"leyenda"}>
            <a href="#" onClick={()=>setOpen(true)}>Ver Instrucciones</a>
        </div>
    }
    return <div class={"leyenda"} >
        <a href="#" onClick={()=>setOpen(false)}>[x] Cerrar</a><hr/>
        <div dangerouslySetInnerHTML={{__html:Text.controls+webmToMp4Links}}></div>
    </div>
}