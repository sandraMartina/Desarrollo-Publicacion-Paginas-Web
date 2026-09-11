//Exercise 3


let price = parseFloat(prompt("Introduce the price of the product: "))

let valorIva = parseFloat(prompt("Introduce the % in Iva : "))

let result = price + (price * valorIva / 100)

alert("The total price is: " + " " + result)