

let firstNumber = parseFloat(prompt("Please write a number"));
let operator = (prompt("Please write the operator that you want(+, -, *, /)"));
let secNumber = parseFloat(prompt("Please write your second number"));

let resultSuma = firstNumber + secNumber
let resultResta = firstNumber - secNumber
let resultMulti = firstNumber * secNumber
let resultDivi = firstNumber / secNumber

//firstNumber && secNumber === resultSuma
if(operator === "+"){
    alert(`The result is ${resultSuma}`)
}else if(operator === "-"){
    alert(`The result is ${resultResta}`)
}else if(operator === "*"){
    alert(`The result is ${resultMulti}`)
}else if(operator === "/"){
    if(firstNumber === 0 || secNumber === 0){
        alert("Sorry we can't divide with Ceros")
    }else{                   //i was having the rsult withaout else, which given me the infinity
        alert(`The result is ${resultDivi}`)
    }
}else{
    alert("Invalid Operation")
}