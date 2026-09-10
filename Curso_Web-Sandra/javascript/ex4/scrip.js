
let fName = prompt("Please Write your name")
let yearBirth = parseInt(prompt("Please Write the year of your Birthday"))

const ANIO_ACTUAL = new Date().getFullYear();

let yearOld = ANIO_ACTUAL - yearBirth

alert("Hi " + fName + " " + "You are " + " " + yearOld + " " +"Years old")