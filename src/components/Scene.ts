import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { BokehPass } from 'three/addons/postprocessing/BokehPass.js';
import { FlipBook } from 'quick_flipbook';  

import "../capture/download.js";
import "../capture/webm-writer-0.2.0.js";
import "../capture/CCapture.js";

var recordON = false;

// @ts-ignore
var capturer ;

export function setupScene( dom:HTMLElement )
{
    const width     = window.innerWidth;
    const height    = window.innerHeight;
    const clock     = new THREE.Clock();

    // we use this to do a smooth tween when the camera moves...
    let cameraPosition:THREE.Vector3;

    // store the app's zoom
    let zoom = 0;

    const scene = new THREE.Scene();
          scene.background = new THREE.Color(0x999999); 

//#region setup Light
          const light = new THREE.DirectionalLight( 0xffffff, 4 );
 
            light.position.set( .2, 1, 0 );
            light.castShadow = true;
            //Set up shadow properties for the light
            light.shadow.mapSize.width = 512*4; // default
            light.shadow.mapSize.height = 512*4; // default
            light.shadow.camera.near = 0.5; // default
            light.shadow.camera.far = 3; // default
            light.shadow.bias = -0.02;

            scene.add( light );
            scene.add( new THREE.AmbientLight( 0xffffff, 2));
//#endregion

//#region setup camera
    const MAXFOV = 40;
    const camera = new THREE.PerspectiveCamera( 0, width / height, 0.1, 1000 ); 
          camera.setFocalLength(MAXFOV);  
          camera.position.set(0,3,1);
          camera.lookAt(0,0,0);
          cameraPosition = camera.position.clone();
//#endregion
        
//#region setup renderer
    const renderer = new THREE.WebGLRenderer();
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.setSize( width, height );
        renderer.toneMapping = THREE.NoToneMapping;
        dom.appendChild( renderer.domElement );

    const renderPass = new RenderPass( scene, camera );

    const composer = new EffectComposer( renderer );  

    const bokehPass = new BokehPass( scene, camera, {
            focus: 10,
            aperture: 10* 0.00001, 
            maxblur: .008
        });

    const outputPass = new OutputPass();
        

          composer.addPass( renderPass );
          composer.addPass( bokehPass );
          composer.addPass( outputPass );

//#endregion

//#region flipbook setup
    const book = new FlipBook({
        flipDuration: .5, // in seconds. Time it takes to flip ONE PAGE.
        yBetweenPages:.001, // y space between stacked pages
        pageSubdivisions: 20 //page's plane subdivisions
    }); 

    book.scale.x = 0.8; // A4 size
    scene.add(book);
    
    // book.setPages([
    //     "https://placehold.co/600x400?text=Cover+page", 
    //     "https://placehold.co/600x400?text=Backside+of+cover",  
    //     null, //blank page
    //     null, //blank page
    //     "https://placehold.co/600x400?text=last+page",    
    //     "https://placehold.co/600x400?text=Back+side", 
    // ]);  
//#endregion

//#region render loop
    
    let t = 0;
    function animate() 
    {
        requestAnimationFrame( animate );
    
        let delta = clock.getDelta();
        book.animate(delta); 
     
        camera.position.add( cameraPosition.clone().sub(camera.position).multiplyScalar(delta*2) );
        composer.render(); 

        if( recordON )
            capturer.capture( renderer.domElement );
    }
    
    animate();
//#endregion
   
//#region event handlers
function onWindowResize() {

    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize( width, height );  
    composer.setSize( width, height );

}

function onMouseClick(event) {
    // Calculate mouse coordinates in normalized device space (-1 to 1)
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
     
    
    if( mouse.x<0 && book.currentPage>0  || book.currentPage==book.totalPages ) book.previousPage();
    else book.nextPage();

    console.log(book.currentPage, book.totalPages)
  }

function onMouseWheel(ev)
{
//@ts-ignore
    zoom += ev.deltaY<0? 1 : -1;  

    if( zoom <=0 )
    { 
        cameraPosition.x = 0;
        cameraPosition.z = 1; 
    }
    camera.setFocalLength(MAXFOV+zoom);
}; 

function onMouseMove(event)
{
    const mouse = new THREE.Vector2();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1; 

    if( zoom>0 )
    { 
        cameraPosition.x = mouse.x/3;
        cameraPosition.z = 1 + -mouse.y/3; 
    } 
    
}
//#endregion

    window.addEventListener( 'resize', onWindowResize );
    renderer.domElement.addEventListener('click', onMouseClick);
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('mousewheel',onMouseWheel);

    //
    // UI updating pages, could be addition, deletion, sorting, etc...
    //
    document.body.addEventListener("on:pages", ev=>{
        console.log( "PAGES EVENT:", (ev as CustomEvent).detail ); 
        book.setPages((ev as CustomEvent).detail);
    });

    document.body.addEventListener("book:goto", ev=>{
        book.currentPage = (ev as CustomEvent).detail;
    });

    document.body.addEventListener("record:start", ev=>{
        recordON = true; 

        document.body.classList.add("recording");

        //@ts-ignore
        capturer = new CCapture( {
            framerate: 24, 
            format: 'webm',
            motionBlurFrames:1,
            quality:100 
        } );
        
        capturer.start();
    });


    document.body.addEventListener("record:stop", ev=>{
        recordON = false;
        capturer.stop();
        capturer.save();
        document.body.classList.remove("recording");
    });

    window.addEventListener('keydown', (event)=>{

        if ( event.code === 'Space' ) {
            camera.setFocalLength(MAXFOV );
            cameraPosition.x = 0;
            cameraPosition.z = 1; 
            zoom=0;
        }
        
    });
}