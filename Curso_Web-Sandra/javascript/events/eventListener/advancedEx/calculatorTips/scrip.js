//before i was using textContent, but instead of that we use the value, 

let importe = document.getElementById("importe");
let propinaText = document.getElementById("propina");
let personasText = document.getElementById("personas");
let boton = document.getElementById("btnCalcular");
let resultado = document.getElementById("resultado");
//let importeNumber = parseFloat(importe);

function cal(){
   
    if(importe.value === ""){
        resultado.textContent = "Introduce the amount of the bill";
        resultado.style.color = "red";
    }else{
        let importeNumber = parseFloat(importe.value);
        let propinaNumber = parseInt(propinaText.value);
        let peronasNumber = parseInt(personasText.value);
        if(importeNumber <= 0){
            resultado.textContent = "The import has to be more than 0";
            resultado.style.color = "red";
        }else if(peronasNumber < 1){
            resultado.textContent = "At least 1 people";
            resultado.style.color = "red";
        }else{
            let totalTip = importeNumber * propinaNumber / 100;
            let totalR = importeNumber  + totalTip 
            let eachPeople = totalR / peronasNumber
            resultado.textContent =  `The total ${totalR.toFixed(2)} -- Each persons pay: ${eachPeople.toFixed(2)} `;
            resultado.style.color = "black";
        }
    }

}
boton.addEventListener("click", cal);

/*
if(importe === null || importe === undefined){
    //document.textContent = "Introduce the amount of the bill"
    importe.textContent = "Introduce the amount of the bill";
    importe.style.color = "red";

}else{


    let propinaNumber = parseInt(propinaText);
    for(let i=0; i < propinaText.length; i++){
        propinaText[i].style.color = "red";
    }

    
    let personasNumber = parseInt(personasText);
    
    if(importeNumber <= 0){
        importe.textContent =  "The import has to be more than 0";
        importe.style.color = "red";
    
    }else if(personasNumber < 1){
        personasNumber.textContent = "At least 1 person";
        personasNumber.style.color = "red";
    }else{
        // = importeNumber * propinaNumber / 100;
        result.style.color = "black"
    }
}

*/