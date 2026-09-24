

let boton = document.getElementById("btnSaludar");

function saludar(){
    let mensaje = document.getElementById("mensaje")
    mensaje.innerHTML = "¡Hi, Welcomet to the web page!";  
}
boton.addEventListener("click", saludar);