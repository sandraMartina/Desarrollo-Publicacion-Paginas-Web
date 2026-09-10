

let note = parseFloat(prompt("Please introduce your average note"));

if (note >= 9){
    alert("You´re doing a EXCELLENT job")
}else if(note >=7 && note <=9 ) {
    alert("Hey, you´re doing a GREAT job")
}else if(note >=5 && note <=7){
    alert("Hey, you´re doing a Normal Job")
}else{
    alert("Ohh, you need to do better")
}