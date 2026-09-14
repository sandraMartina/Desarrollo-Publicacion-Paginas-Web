
let askNumber = parseInt(prompt("Please write a number for their multiplication table"));
let multiplier = 1

while (multiplier <= 10){
    let result = askNumber * multiplier
    console.log(` The result is ${askNumber} * ${multiplier} = ${result}`)
    multiplier++
}