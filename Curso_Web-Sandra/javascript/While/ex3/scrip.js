let askNumber = parseInt(prompt("Introduce a number for a sum"));
let sum = 0
    // my code sum = askNumber + sum
    sum += askNumber 

let addNumber = prompt("Would you like to add another number? (Yes/No)").toLowerCase();
while (addNumber === "yes" ){
    
    askNumber = parseInt(prompt("Introduce another number for the sum"));
    sum += askNumber
    console.log(`Accumulated sum ${sum}`)
    addNumber = prompt("Would you like to add another number? (yes/no)").toLowerCase();
}
    console.log(`The total of the sum is ${sum}`)


//teacher solution
/*
    let askNumber = parseInt(prompt("Introduce a number for a sum"));
    let total = 0;
    total = total + askNumber
    console.log(total)

    let addNumber = prompt("Would you like to add another number? (Yes/No)").toLowerCase();
    while (addNumber === "yes" ){
        let number2 = parseInt(prompt("Introduce another number for the sum"));
        total = total + number2
        console.log(total)
        addNumber = prompt("Would you like to add another number? (Yes/No)").toLowerCase();
}
    console.log(`The total of the sum is ${total}`)

    */