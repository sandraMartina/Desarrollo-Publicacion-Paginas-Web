let aviso = document.getElementById("avisoCookies");
let boton = document.getElementById("btnAceptar");

function aceptarCookies(){
    aviso.style.display = "none";
}

boton.addEventListener("click", aceptarCookies)