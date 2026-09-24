
let boton = document.getElementById("btnLike")
let contador = document.getElementById("contador");

let likes = 0;

function sumarLike(){
    likes += 1;
    contador.textContent = likes;
    if(likes >= 10){
        contador.style.color = "red";
    }else{
        contador.style.color = "green";
    }
}
boton.addEventListener("click", sumarLike)