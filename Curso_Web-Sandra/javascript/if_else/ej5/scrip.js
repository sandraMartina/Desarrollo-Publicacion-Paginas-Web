
let side1 = parseFloat(prompt("Please write a number for the first length (cm) "));
let side2 = parseFloat(prompt("Write a second number for the length of the triangle (cm) "));
let side3 = parseFloat(prompt("Write a number for the last length of the triangle (cm) "));


//if(side1 && side2 === side3) 
    if(side1 === side2 && side2 === side3){
    alert("This triangle is EQUILATERO")
}
    else if (side1 === side2 || side1 === side3 || side2 === side3){
    alert('The triangle is ISOSCELES')
}   else{
    alert("This triangle is ESCALENO")
}