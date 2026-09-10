


// edad >= 18 && dni
// edad >= 18 || dni

//Invetir el booleano !

// ways of adding the variable withaout using the space
// alert(`Hola tienes ${edad} años de edad`)


let age = 16;

let dni = true;

// if ( age >= 18) {
//     alert("Youre already an adult")
// } else if( age >= 16){
//     alert("You can work")
// } else {
//     alert("Well you have to leave")
// }


//Notes

 let average = parseFloat(prompt("Introduce the note"))
 if (average >= 90){
     alert("Congratulation you have excellent grades 'A' ")
 }else if (average >= 75){
     alert("Congratulation you have notables grades 'B' ")
 } else if (average >= 60){
     alert("Watch out you have this grades 'C' ")
 } else {
     alert("You have to improve 'D' ")
 }


let students = [
  { name: "Ana", grade: 90 },
  { name: "Luis", grade: 55 },
  { name: "Marta", grade: 72 },
];

for (let i = 0; i < students.length; i++) {
  let student = students[i];

  if (student.grade >= 60) {
    console.log(student.name + " passed!");
  } else {
    console.log(student.name + " needs to retake.");
  }
}