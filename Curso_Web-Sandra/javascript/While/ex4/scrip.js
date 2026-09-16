/*
let laps = parseInt(prompt("How many laps on the fields are you going to do?"));
let counter = 1;
const DISTANCE = 400;
let total;

while (laps >= counter){
    total = counter * DISTANCE
    console.log(`Lap ${counter} completed!  This is the distance that you have been doing so far: ${total} m`)
    counter++
}
    alert(`You have covered a total distance of ${total}m  in ${laps} laps, CONGRATULATIONS`)
*/

// WITH FUNCTIONS
let laps = parseInt(prompt("How many laps on the fields are you going to do?"));
const DISTANCE = 400;

function calcDistance(laps, DISTANCE){
    let totalDistance = laps * DISTANCE;
    return totalDistance;
}

