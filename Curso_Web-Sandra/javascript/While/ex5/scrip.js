//MY PURE CODE
/*
let limit = parseInt(prompt("Please write a limit "));
let integer = 1;
let square;

while( integer > limit ){
    integer = integer ** integer
    console.log(`Testing ${integer} -> ${limit} = ${square}`)
    integer++
}
    alert(`The first number whose square exceeds the limit ${limit} is ${integer}`)
*/

//WITH AI HELP
let limit = parseInt(prompt("Please write a limit "));
let integer = 1;
let square = integer ** 2;

//The while is like: keep searching while, in this case: 
// "Is the square less than or equal to the limit?"
while( square <= limit ){ 
    console.log(`Testing ${integer} -> ${integer}² = ${square}`)
    integer++
    square = integer ** 2;
}
    alert(`The first number whose square exceeds the limit ${limit} is ${integer} (${integer}² = ${square} )`)