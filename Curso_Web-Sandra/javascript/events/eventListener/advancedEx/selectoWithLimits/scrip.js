
let botonMenos = document.getElementById("btnMenos");
let cantidad = document.getElementById("cantidad");
let botonMas = document.getElementById("btnMas");
let precio = document.getElementById ("precio");
let aviso = document.getElementById ("aviso");
let vaciar = document.getElementById ("btnVaciar");

cantidad = 0;
precio = 12;
const MAX_CANT = 8;


function actualizarPantalla(){
    for(let i=0; i<cantidad; i++){
        cantidad++;
        let total = cantidad * precio;
    }
    
}
cantidad.addEventListener("click", actualizarPantalla);
