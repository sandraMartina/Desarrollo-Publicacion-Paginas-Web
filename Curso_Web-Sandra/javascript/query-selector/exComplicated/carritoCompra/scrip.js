
let items = document.querySelectorAll(".item");
let total = 0;

for(let i=0; i < items.length; i++){
    //before i had the document.querySelector(".precio") but the correct answer is 
    // items[i].querySelector(".precio").textcontent
    let priceText = items[i].querySelector(".precio").textContent;
    let price = parseFloat(priceText.split(":")[1]);
    let amountText = items[i].querySelector(".cantidad").textContent;
    let amount = parseInt(amountText.split(":")[1]);

    let subTotal = price * amount
    items[i].querySelector(".subTotal").textContent =`El Subtotal es: ${subTotal}`;
    total = total + subTotal;
     
}
 document.querySelector("#totalCarrito").textContent = `Total: ${total}`;


















