
let productoCarrito = 0;
function añadirProducto(){
    let html = "<p>Producto Añadido</p>";
    productoCarrito++
    document.body.innerHTML += html
    document.body.innerHTML += `Productos añadidos al carrito ${productoCarrito}`;
}
