
let productoCarrito = 0;
function saludar(){
   let elementSaludo = document.getElementById("saludo");
   //Tengo que elegir el objetivo del eveneto su value 
   elementSaludo.textContent = "Has seleecionado " + event.target.value
}
    
    let seleccion = getElementById("pais");
    seleccion.addEventListener("select", saludar)