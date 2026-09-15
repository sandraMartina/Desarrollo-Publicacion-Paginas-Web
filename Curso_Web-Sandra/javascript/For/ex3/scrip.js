
let amount1 = parseFloat(prompt("Please write your monthly suscription amount: "));
let amount2 = parseInt(prompt("Please write for how long you have been paying it:"));
// this was undefined, but we have to inialize 
let total = 0;

                        //the counter was >=amount2
for(let counter = 1;    counter <= amount2;  counter++ ){

    //In the total i was writed: total = amount2 + counter
    total += amount1 
    console.log(`Month ${counter}: Cumulative spending ${total}€ `)

}
    alert(`In total you have been paying ${total}€ in ${amount2} months`)