

let currectHour = parseInt(prompt("Please introduce the current time in (0-23)"))

if (currectHour >= 0 && currectHour <=11 ){
    alert("Hey, Good morning")
} else if(currectHour >=12 && currectHour <=20 ){
    alert("Hey! Good Afternoon")
}else{
    alert("Good night")
}