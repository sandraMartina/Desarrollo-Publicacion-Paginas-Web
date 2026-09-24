
let alumnos = document.querySelectorAll(".alumno");

let notas = 0;
for(let i=0; i < alumnos.length; i++){
    let notaText = alumnos[i].textContent; 
    let notaGeneral = parseInt(notaText.split(":")[1]);
    notas += notaGeneral ;
    if(notaGeneral < 5 ){
        alumnos[i].style.backgroundColor = "red";
    }else if(notaGeneral === 5 || notaText === 6){
        alumnos[i].style.backgroundColor = "orange";
    }else{
        alumnos[i].style.backgroundColor = "green";
    }
} 
let media = notas / alumnos.length;
let result = document.querySelector("#media").textContent =`Media de la clase: ${media}`
 


















let producto = document.querySelectorAll(".producto");

for(let i=0; i < producto.length; i++){

    let textstock = producto[i].querySelector(".stock").textContent;
    let stock = parseInt(textstock.split(":")[1]);
    if(stock < 5){
        producto[i].style.backgroundColor = "mistyrose";
        producto[i].querySelector(".stock").textContent = `${textstock} ¡Ultimas unidades!`
    }else{
        producto[i].style.backgroundColor = "honeydew"
    }
}

