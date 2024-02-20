 

type Diccionario = {
    btnOpenLabel:string
    btnSaveLabel:string
    btnAddPage:string
    btnStartRecordingLabel:string
    btnStopRecordingLabel:string
    btnDeletePageLabel:string
    btnNewLabel:string
    btnCloseLabel:string
    controls:string
    emptyZipError:string
    setToBlank:string
    nothingToSave:string
    deletePrompt:string
    setBlankPrompt:string
    invalidZipFile:string
    missingPageError:string
    setImageIntoBlank:string
    btnAddPageBEFORE:string 
    btnAddPageAFTER:string
    btnSeeInstructions:string
}

const dicc:{[key:string]:Diccionario} = {
    "es": {
        btnOpenLabel:"Abrir",
        btnSaveLabel:"Guardar",
        btnAddPage:"Nueva página",
        btnStartRecordingLabel:"Grabar",
        btnDeletePageLabel:"Quitar página",
        btnStopRecordingLabel:"Finalizar grabación",
        btnNewLabel:"Nuevo libro",
        btnCloseLabel:"Salir",
        controls:`
        <b><u>Controles</u></b><br/>
        Utiliza el <b>botón de scroll del ratón</b> para hacer zoom.<br/>
        Presiona <b>Barra Espaciadora</b> para reestablecer el zoom.<br/>
        Presiona la tecla <b>ENTER</b> para Iniciar y/o Detener la grabación.
        `,
        emptyZipError:"El zip no contiene ninguna imagen .png",
        setToBlank:"Poner en blanco",
        nothingToSave:"No hay nada que guardar. Agregá algunas páginas!",
        deletePrompt:"¿Quitar la página seleccionada?",
        setBlankPrompt:"Poner página en blanco? (Se quitará la textura de la página)",
        invalidZipFile:"El archivo zip que cargaste no es válido (no contiene un flipbook)",
        missingPageError:"PÁGINA ROTA: \n\nUna página hace referencia a una imagen que no está en el zip: Página [$pag] Imagen [$img]\n\nSe utilizará una imagen en blanco.",
        setImageIntoBlank:"Cargar imagen a esta página",
        btnAddPageAFTER:"Agregar página nueva luego de la página actual",
        btnAddPageBEFORE:"Agregar página nueva adelante de la página actual",
        btnSeeInstructions:"Ver instrucciones"
    },
    "en":{
        btnOpenLabel:"Open",
        btnSaveLabel:"Save",
        btnAddPage:"New page",
        btnStartRecordingLabel:"Start Recording",
        btnDeletePageLabel:"Remove page",
        btnStopRecordingLabel:"End Recording",
        btnNewLabel:"New Book",
        btnCloseLabel:"Exit",
        controls:`
        <b><u>Controls</u></b><br/>
        Use the <b>mouse's wheel</b> to zoom.<br/>
        Press <b>Space bar</b> to restore zoom.<br/>
        Press <b>ENTER</b> to start or stop the recording.
        `,
        emptyZipError:"The zip has no .png image file",
        setToBlank:"Set to blank page",
        nothingToSave:"Nothing to save... try adding some pages!",
        deletePrompt:"Delete currently selected page?",
        setBlankPrompt:"Turn into a blank page (texture will be removed)",
        invalidZipFile:"The zip you selected doesn't contain a flipbook in it.",
        missingPageError:"MISSING PAGE!\n\nA page is referencing an image that is not in the zip: Page [$pag] Image [$img]\n\nA blank page will be used.",
        setImageIntoBlank:"Set image for this blank page",
        btnAddPageAFTER:"Add a new page AFTER the current page",
        btnAddPageBEFORE:"Add a new page BEFORE the current page",
        btnSeeInstructions:"See instructions"
    }
}

export default dicc[ navigator.language.toLowerCase().includes('es')?"es":"en" ];
 

