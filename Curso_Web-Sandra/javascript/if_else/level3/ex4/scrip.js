let minuteDelay = parseInt(prompt("Please write your flight delay (minutes)"));

if (minuteDelay < 0){
    alert(`Your flight with ${minuteDelay}m, has departed ahead of time`)
}else if (minuteDelay === 0){
    alert(`Your flight with ${minuteDelay}m, has departed on time`)
}else if (minuteDelay > 1 && minuteDelay <= 30){
    alert(`Your flight with ${minuteDelay}m, has a level delay`)
}else if (minuteDelay >= 31 && minuteDelay <= 120){
    alert(`Your flight with ${minuteDelay}m, has a severe delay `)
}else{
    alert(`Your flight with ${minuteDelay}m, has been cancelled`)
}