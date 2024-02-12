 

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
}

const dicc:{[key:string]:Diccionario} = {
    "es": {
        btnOpenLabel:"Abrir",
        btnSaveLabel:"Guardar",
        btnAddPage:"Agregar nueva página",
        btnStartRecordingLabel:"Iniciar grabación",
        btnDeletePageLabel:"Borrar esta página",
        btnStopRecordingLabel:"Finalizar grabación",
        btnNewLabel:"Nuevo libro",
        btnCloseLabel:"Salir",
        controls:`
        <b><u>Controles</u></b><br/>
        Utiliza el <b>botón de scroll del ratón</b> para hacer zoom.<br/>
        Presiona <b>Barra Espaciadora</b> para reestablecer el zoom.<br/>
        Presiona la tecla <b>ENTER</b> para Iniciar y/o Detener la grabación.
        `,
        emptyZipError:"El zip no contiene ninguna imagen .png"
    },
    "en":{
        btnOpenLabel:"Open",
        btnSaveLabel:"Save",
        btnAddPage:"Add new page",
        btnStartRecordingLabel:"Start Recording",
        btnDeletePageLabel:"Delete this page",
        btnStopRecordingLabel:"End Recording",
        btnNewLabel:"New Book",
        btnCloseLabel:"Exit",
        controls:`
        <b><u>Controls</u></b><br/>
        Use the <b>mouse's wheel</b> to zoom.<br/>
        Press <b>Space bar</b> to restore zoom.<br/>
        Press <b>ENTER</b> to start or stop the recording.
        `,
        emptyZipError:"The zip has no .png image file"
    }
}

export default dicc[ navigator.language.toLowerCase().includes('es')?"es":"en" ];
 

