
let botones = document.querySelectorAll(".btnAdd");
let carrito = document.getElementById("carrito");

let totalProductos = 0;

function anadirAlCarrito(){
    totalProductos += 1;
    carrito.textContent = `Product in the basket: ${totalProductos}`;
}
 for(let i=0; i < botones.length; i++){
        botones[i].addEventListener("click", anadirAlCarrito);
    }

/*
let botones = document.querySelectorAll(".btnAdd");
let carrito = document.getElementById("carrito");
let product = document.getElementsByClassName("product");

let totalProductos = 0;

function anadirAlCarrito(){
    totalProductos += 1;
    carrito.textContent = `Product in the basket ${totalProductos}`;

    for(let i=0; i < botones.length; i++){
        botones[i].addEventListener("click", anadirAlCarrito);
    }
}
botones.addEventListener("click", anadirAlCarrito);

*/