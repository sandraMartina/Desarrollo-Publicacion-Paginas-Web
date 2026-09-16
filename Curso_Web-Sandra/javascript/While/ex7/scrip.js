let initialCapital = parseFloat(prompt("Please write your initial capital: "));
let amountTime = parseInt(prompt("Please write for how long you want to simulate your savings:"));
// this was undefined, but we have to inialize 
let total = initialCapital;
let year = 1;

while(year <= amountTime){
    total = total * 1.05
    console.log(`Year ${year}: ${total.toFixed(2)}€`);
    year++;
}
    alert(`Your final capital over ${amountTime} years have been: ${total.toFixed(2)}€`)