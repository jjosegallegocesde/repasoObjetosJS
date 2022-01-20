
//rutina para detectar el clic sobre un boton
let botonCambio=document.getElementById("boton")
botonCambio.addEventListener("click",cambiarArtista)

function cambiarArtista(){

    //se crea referencia a la foto
let etiquetaImagen=document.getElementById("imagen1")
etiquetaImagen.src="img/foto2.jpg"

//se crea referencia al video
let etiquetaVideo=document.getElementById("video1")
etiquetaVideo.src="video/video2.mp4"

//se crea referencia a la fecha del concierto
let etiquetaFechaConcierto=document.getElementById("fechaConcierto")
etiquetaFechaConcierto.textContent="Se presentan en semana santa"
    
}
