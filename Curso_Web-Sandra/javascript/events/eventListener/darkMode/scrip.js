
let boton = document.getElementById("btnModo");
let titulo = document.querySelector("h1");
let listaParrafos = document.querySelectorAll("p");

let darkMode = false;

function changeMode(){
    if(darkMode === false){
        document.body.style.backgroundColor = "#222222";
        titulo.style.color = "white";
        for( let i = 0; i < listaParrafos.length; i++) {
            listaParrafos[i].style.color =  "white";
        }
        
        boton.textContent = "White Mode";
        darkMode = true;

    }else{
        document.body.style.backgroundColor = "white";
        titulo.style.color = "black";
        for( let i = 0; i < listaParrafos.length; i++) {
            listaParrafos[i].style.color = "black";
        }
        boton.textContent = "Dark Mode";
        darkMode = false;

    }
}

boton.addEventListener("click", changeMode)