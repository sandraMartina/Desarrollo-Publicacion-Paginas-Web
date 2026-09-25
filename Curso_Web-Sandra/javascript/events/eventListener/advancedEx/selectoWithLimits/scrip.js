
let botonMenos = document.getElementById("btnMenos");
let cantidadE = document.getElementById("cantidad"); //Creamos el elemento que contenga el id de cantidad
let botonMas = document.getElementById("btnMas");
let precioE = document.getElementById ("precio");//Creamos el elemento que contenga el id de precio
let aviso = document.getElementById ("aviso");
let vaciar = document.getElementById ("btnVaciar");

let cantidad = 0; // Creamos una variable que cuente los numeros del span
let precio = 12;
const MAX_CANTIDAD = 8;


function actualizarPantalla(){
    // for(let i=0; i < cantidad; i++){
    //     cantidad++;
    //     let total = cantidad * precio;
    //     aviso.textContent =  `Has comprado ${cantidad} a un precio total de: ${total}`;
    // }
    cantidadE.textContent = cantidad;
    let total = cantidad * precio;
    precioE.textContent = `Has comprado ${cantidad} a un precio total de: ${total}`;

}

function sumar(){
    if(cantidad < MAX_CANTIDAD){
        cantidad++;
        aviso.style.display = "none";
        actualizarPantalla();

    }else{
        aviso.textContent = `Tienes un max de: ${MAX_CANTIDAD} por compra, no puedes superar este número`;
        aviso.style.display = "block"; // i add this line, every comment is a solution of my code 
    }
}

function restar(){
    if(cantidad > 0){
        cantidad--;
        aviso.style.display = "none";
        actualizarPantalla();
    }else{
        aviso.textContent =  `No puedes tener menos de 0 entradas`;
        aviso.style.display = "block";
    }
}

function vaciado(){
    cantidad = 0;
    aviso.style.display = "none";
    actualizarPantalla();
}

botonMas.addEventListener("click", sumar);
botonMenos.addEventListener("click", restar);
vaciar.addEventListener("click", vaciado);
//cantidad.addEventListener("click", actualizarPantalla);
