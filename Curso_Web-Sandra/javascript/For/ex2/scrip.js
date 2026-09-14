
let N = parseInt(prompt("Please write a number to calculates the natural numbers"));
let sum = 0;

for (counter=1; counter <= N; counter++){
    
    sum += counter
    console.log(`The parcial sum after sum ${N}: ${sum}`);
}
    console.log(`The sum of the first ${N} number is ${sum}`)