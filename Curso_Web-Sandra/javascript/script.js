

// this include all page
// alert("Hello World")


//Comment several lines of code

/*
console.log("Hello World hope you miss me")
console.log("Hello World hope you miss me")
*/


// let hello = document.getElementById("hello");
// console.log(hello.textContent);

console.log("JavaScrip is connected");
let hi = document.getElementById("hi");

console.log(hi);
console.log(hi.textContent);


//creating an alert
alert("Welcome to class people")

//on the console we're creatinga message on the console
console.log("Sandra");


//creating a variable
let today = new Date();

//on the console we're putting today's date
console.log(today);


//Small text
console.log("Hello world hope you miss.");


//CONSOLE.LOG


//CONSOLE.INFO("CONSOLE.INFO")      INFORMATIVE MESSAGES
//CONSOLE.WARN                      Warning  
//CONSOLE.ERROR                     ERROR




//MESSAGES GROUP
console.group("Mensajes for you");
console.log("Mensaje 1")
console.log("Mensaje 2")
console.groupEnd();


//if i want this group not to be opend 
//the user has to opend it
//MESSAGES GROUP
console.groupCollapsed("Mensajes for you");
console.log("Mensaje 1")
console.log("Mensaje 2")
console.groupEnd();




//Constantes TODOMAYUSCULA Y _GUIONBAJO
const BIRTHDAY_DAY = 2000;
const BIRTHDAY = 2000;

console.log(BIRTHDAY);


//VARIABLE we have to use the camelCase

let nombre = "Sandra";
nombre = "Sandra Tele"
let edad = 29;
let mayorEdad = true;


console.log(nombre);


let contador = 0;
console.log(contador);



contador = contador + 1;
console.log(contador);



contador = contador + 1;
console.log(contador);


// Mathematic operations

let number1 = 20;
let number2 = 30;


// suma
let resultado = number1 + number2;
console.log(resultado);

// resta
resultado = number1 - number2;
console.log("El resultado de la resta es " + resultado);

// multiplicacion
 resultado = number1 * number2;
console.log("El resultado de la multiplicacion es " + resultado);

// division
 resultado = number1 / number2;
console.log("El resultado de la division es " + resultado);


//directamente desde el el console.log
console.log(number1 * number2);



let puntos = 5;

puntos = puntos + 5;  // puntos += 5;
puntos = puntos - 5;  // puntos -= 5;
puntos = puntos * 5;  // puntos *= 2;
puntos = puntos / 10; // puntos /= 2;

//2. Functions
//Functions are reusable blocks of code that perform a task.


// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Maria")); // "Hello, Maria!"

// Arrow function (modern, shorter syntax)
const add = (a, b) => {
  return a + b;
};

console.log(add(2, 3)); // 5

// Arrow function shorthand (one-line return)
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // 20


//Conditionals
//Conditionals let your code make decisions.
const temperature = 15;

if (temperature > 30) {
  console.log("It's hot!");
} else if (temperature > 15) {
  console.log("It's mild.");
} else {
  console.log("It's cold.");
}

// Ternary operator — shorthand for simple if/else
const status = temperature > 20 ? "Warm" : "Cool";
console.log(status); // "Cool"

//Arrays
//Arrays store ordered lists of values.
const fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]);      // "apple" (arrays start at index 0)
console.log(fruits.length);  // 3

fruits.push("orange");       // adds to the end → ["apple","banana","cherry","orange"]
fruits.pop();                 // removes the last item

// Looping through an array
fruits.forEach((fruit) => {
  console.log(fruit);
});

// Transforming an array
const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperFruits); // ["APPLE", "BANANA", "CHERRY"]

// Filtering an array
const longNames = fruits.filter((fruit) => fruit.length > 5);
console.log(longNames); // ["banana", "cherry"]

//Objects
//Objects store data as key-value pairs — great for representing a "thing" with multiple properties.

const person = {
  name: "Carlos",
  age: 30,
  city: "Oviedo",
  isStudent: false,
};

console.log(person.name);       // "Carlos"
console.log(person["age"]);     // 30 (alternative syntax)

person.age = 31;                // update a property
person.job = "Developer";       // add a new property

// Objects can contain functions (called "methods")
const car = {
  brand: "Toyota",
  honk: function () {
    console.log("Beep beep!");
  },
};

car.honk(); // "Beep beep!"

// Objects and arrays combine constantly
const students = [
  { name: "Ana", grade: 90 },
  { name: "Luis", grade: 85 },
];

console.log(students[0].name); // "Ana"





// == (igualdad "suelta"): compara VALORES, convierte tipos automáticamente
console.log(5 == "5");     // true  ⚠️ compara valor, ignora el tipo
console.log(0 == false);   // true  ⚠️ 
console.log(null == undefined); // true ⚠️

// === (igualdad "estricta"): compara VALOR y TIPO, sin conversión
console.log(5 === "5");    // false ✅ número vs texto, tipos distintos
console.log(0 === false);  // false ✅
console.log(5 === 5);      // true  ✅


//Regla de oro: usa siempre === y !==, nunca == ni !=.