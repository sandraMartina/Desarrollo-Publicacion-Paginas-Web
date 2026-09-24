//Document Write if we put it inside a function a call it several time
// shows the result but close to each other

/*
function showResult() {
	let result = 2 + 3
	let html="";
	html += "<h2> Hi Class</h2>"
	html += "<p>Im a content test created by javascrip </p>"
	html += `<p>The result is ${result} </p>`
	document.writeln(html);
}

showResult();
*/

/*
let plato;
let precio;
let disponoble;

let html ="";
html += "<h3>Datos del plato</h3>";
html += "<p>Nombre Plato: </p>";
html += "<p>Precioa:</p>";
html += "<p>Disponibilidad: </p>"
document.writeln(html)
*/

let title = document.getElementById("title");
title.textContent = "Hey People";
title.style.color = "darkred"

title.innerHTML = "<u>This is the new title but underline</u>"

let box = document.getElementsByClassName("emptyBox");
emptyBox.innerHTML = "<h1>This is the  TITLE </h1>"

