
let boton = document.getElementById("btnColor");
let caja = document.getElementById("caja");

function cambiarColor(){
    //caja.backgrounColor = lighblue; first i wasnt using the style, and i was wrong about the color
    caja.style.backgroundColor = "lightblue";
    caja.style.fontWeight ="bolder";
}
boton.addEventListener("click", cambiarColor);