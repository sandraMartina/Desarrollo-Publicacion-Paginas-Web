
let laps = parseInt(prompt("How many laps on the fields are you going to do?"));
let counter = 1;
let distance = 400;
let total;

while (laps >= counter){
    total = counter * distance
    console.log(`Lap ${counter} completed!  This is the distance that you have been doing so far: ${total} m`)
    counter++
}
    alert(`You have covered a total distance of ${total}m  in ${laps} laps, CONGRATULATIONS`)