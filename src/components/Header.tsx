 
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'preact/hooks'; 
import Zip from 'jszip/dist/jszip';
import { saveAs } from 'file-saver';
import Text from "./Texts";

import 'css.gg/icons/css/image.css';
import 'css.gg/icons/css/software-upload.css';
import 'css.gg/icons/css/software-download.css';
import 'css.gg/icons/css/camera.css';
import 'css.gg/icons/css/play-stop-o.css';
import 'css.gg/icons/css/close.css';

interface PageSource { 
    url:string; 
    blob:Blob;
}   

class LocalFile implements PageSource {

    readonly url:string;   

    constructor(public readonly blob:Blob) {
        this.url = URL.createObjectURL(blob);    
    } 
}

const webmToMp4Links = `
<br/><br/><b><u>WEBM --&gt; MP4</u></b><br/>
${ ["https://cloudconvert.com/webm-to-mp4", 
    "https://www.freeconvert.com/webm-to-mp4",
    "https://convertio.co/es/webm-mp4/"]
    .map(url=>`<a href="${url}" target="_blank">${url}</a>`) 
    .join("<br/>")
}
`;
 

export function Header() { 
    const [pages, setPages] = useState<PageSource[]>([]);
    const [pagesAtStart, setPagesAtStart] = useState<PageSource[]>([]); //used to detect changes

    const [selectedIndex, setSelectedIndex] = useState<number>(-1);
    const [isDragging, setIsDragging] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const myDiv = useRef<HTMLElement>(null);
    const timeDisplay = useRef<HTMLElement>(null);
    const recordButtonRef = useRef<HTMLAnchorElement>(null);
    const emptyWorkspace = selectedIndex==-1;
    const somethingChanged =pagesAtStart.some( (url,i)=>pages[i]!=url );

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

        const _pages = pages.map(p=>p.url);

        if( _pages.length%2 !=0 )
        {
            _pages.push("");
        } 

        const event = new CustomEvent("on:pages", { detail: _pages });
        document.body.dispatchEvent(event);

    }, [ pages ]);   


    const selectPageFile =()=>{  

        const fileInput = document.createElement("input");
            fileInput.type = "file";
            fileInput.multiple = true;
            fileInput.accept = ".png, .jpg, .jpeg";
            fileInput.style.display = "none";
            document.body.appendChild(fileInput);
            

        fileInput.addEventListener("change", (event) => {
            const files = fileInput.files!; 

            for( const file of files )
            {
                pages.push(new LocalFile(file));
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
            alert("Nothing to save... try adding some pages!");
            return;
        }

        // poner todo en un zip
        const z = new Zip();
        
        for (let i = 0; i < pages.length; i++) 
        {   
            z.file(`${i+1}.png`, pages[i].blob, { comment:"Un comentario loco"});
        }

        const blob = await z.generateAsync({type:"blob"});

        saveAs(blob, "example.zip");
    }
 
    const close = () => {

        console.log("CLOSE ", pages)
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

            //
            // for each image in the zip file...
            //
            await new Promise( (allDone, oops)=>
            {
                let ops = Promise.resolve(0);

                z.forEach( (path, file)=>{

                    console.log("OPEN ", file)

                    if( file.name.endsWith(".png") )
                    {
                        ops = ops.then( ()=>file.async("blob").then( blob=>sources.push( new LocalFile(blob) ) ) );
                    } 
 
                });

                ops.then( allDone ); 
            });

            console.log("OPENED ZIP", sources);

            if(!sources.length)
            {
                alert( Text.emptyZipError );
            }
            else 
            {
                //
                // done, set data.
                //
                setPagesAtStart([...sources]);
                setPages(sources); 
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
        if( confirm("Delete currently selected page?") )
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
 
	return (
		<header ref={myDiv}>
            <div class={"leyenda"} dangerouslySetInnerHTML={{__html:Text.controls+webmToMp4Links}}>
                
            </div>
			    <div class="numbered-children thumbnails">
				{
                    pages.map( (source,i) => {
                        return <div key={i} ><img onMouseOver={onMouseOverThumbnail.bind(null, i)} onMouseDown={onMouseDownThumbnail.bind(null,i)} src={source.url} height={100} width={100} style={{ touchAction:'pan-x', borderColor:i==selectedIndex?"red":"transparent", animation:i==selectedIndex?"pulseSelection 0.5s ease-in-out infinite":"none"}}/></div>
                    })
                }
                </div>
                <div class="menu"> 


                    { !emptyWorkspace && <>
                    <a href="#" onClick={()=>selectPageFile()} class={"add"}>
                        <i class="gg-image"></i> {Text.btnAddPage}
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
                        !!pages[selectedIndex] && <div class={"context"} >
                            <a href="#" class="delete" onClick={onClickDeleteSelection}>[x] {Text.btnDeletePageLabel}</a>
                        </div>
                    } 
                    
                </div>
		</header>
	);
}  