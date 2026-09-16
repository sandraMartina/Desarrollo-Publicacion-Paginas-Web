// Get first number
let firstNumber = parseFloat(prompt("Please write the first number for the operation"));
while (isNaN(firstNumber)) {
    alert("Sorry, you have to write a number");
    firstNumber = parseFloat(prompt("Please write the first number for the operation"));
}

// Get operation
let operation = prompt("Please write the operation: (+, -, *, /)");
while (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/') {
    alert("Sorry, you have to write a valid operator: + - * /");
    operation = prompt("Please write the operation: (+, -, *, /)");
}

// Get second number
let secondNumber = parseFloat(prompt("Please write the second number for the operation"));
while (isNaN(secondNumber)) {
    alert("Sorry, you have to write a number");
    secondNumber = parseFloat(prompt("Please write the second number for the operation"));
}

// Handle division by zero separately, asking again for a new second number
while (operation === '/' && secondNumber === 0) {
    alert("You can't divide by 0, try again");
    secondNumber = parseFloat(prompt("Please write the second number for the operation"));
}

// Calculate result
let result;
if (operation === '+') {
    result = firstNumber + secondNumber;
} else if (operation === '-') {
    result = firstNumber - secondNumber;
} else if (operation === '*') {
    result = firstNumber * secondNumber;
} else if (operation === '/') {
    result = firstNumber / secondNumber;
}

console.log(`The result is ${result}`);


/*
let firstNumber = parseFloat(prompt("Please write the first number for a operation"));

while(isNaN(firstNumber)){
    alert(`Sorry you have to write a number`);
    firstNumber = parseFloat(prompt("Please write the first number for a operation"));
}
let operation = prompt("Please write the correct operation: (+, -, *, /)");
    if(operation !== '+' && operation !== '-' && operation !== '*' && operation !=='/' ){
        alert("Sorry you have to write the correct operator: ");
    }else{
        let secondNumber = parseFloat(prompt("Please write the second number for the operation"));
        if(isNaN(secondNumber)){
            alert(`Sorry you have to write a number`);
        }else if(operation === "/" && secondNumber === 0){
            alert(`Sorry your number i can´t be divided by ${secondNumber}`)
        }else{
            let result;
            if(operation === "+"){
                result = firstNumber + secondNumber
            }else if(operation === "-"){
                result = firstNumber - secondNumber
            }else if(operation === "*"){
                result = firstNumber * secondNumber
            }else if(operation === "/"){
                result = firstNumber / secondNumber
            }
                alert(`The resultis ${result}`)
            }
        }

*/
