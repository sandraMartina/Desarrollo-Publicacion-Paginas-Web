let nuevoProductoElemento = document.getElementById("nuevoProducto"); //i shouldnt put the value: ("nuevoProducto.value")
let botonadd = document.getElementById("btnAñadir");
let aviso = document.getElementById("aviso");
let lista = document.getElementById("lista");
let contadorElemento = document.getElementById("contador");
let botonBorrar = document.getElementById("btnBorrar");


let contador = 0;

function añadirProducto(){
    // in here we put the value
    if(nuevoProductoElemento.value === ""){
        aviso.textContent = "Escribe un producto";
        aviso.style.color = "green";
        aviso.style.display = "block"
        //AQUI REVISAMOS EL CONTADOR CUANDO LLEGUE A SU LIMITE
    }else if(contador >= 10){
        aviso.textContent = "Lista Completa";
        aviso.style.color = "red";
        aviso.style.display = "block"
    }else{
        //falta el agregado += 
        //lista.innerHTML += `${lista} <li> </li> `
        lista.innerHTML += ` <li> ${nuevoProductoElemento.value}</li> `
        contador += 1;
        aviso.style.display = "none";
        // this line is not correct: nuevoProductoElemento.style.display = "none";
        nuevoProductoElemento.value =  "";

        if(contador === 1){
            contadorElemento.textContent =  `${contador} Producto `;
        }else{
            contadorElemento.textContent =  `${contador} Productos `;
        }
    
    }
}

function borrarLista(){
    //esta linea estaba incorrecta
    //lista.style.display = "none";
    lista.innerHTML = "";
    contador = 0;
    contadorElemento.textContent = "0 Productos";
    aviso.style.display = "none"
}

botonBorrar.addEventListener("click", borrarLista);
botonadd.addEventListener("click", añadirProducto);