

let selImport = parseFloat(prompt("Write the Value of the Sale"));
let partner = prompt("Are you a Partner?");

let byFive = selImport * 5 / 100;  
let byEight = selImport * 8 / 100;
let byTwelve = selImport * 12 / 100;

if(selImport <= 1000){
    alert(`Hey, your commission is ${byFive}€`)
}else if(selImport >= 1000 && selImport <=5000){
    alert(`Hey great, youre commission is about ${byEight}`)
}else if( selImport >= 5000){
    alert(`Great your commission is ${byTwelve}`)
}else{
    alert("Are you sure about that")
}