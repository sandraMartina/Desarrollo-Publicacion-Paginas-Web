//MY CODE

let orderAmount = parseFloat(prompt("Please write you're order Amount"));
let deliveryType = prompt("Tell us your delivery Type: ('Collecting' or 'Shipping') ").toLowerCase();

if (deliveryType === "collecting"){
        alert(`Great! your total is ${orderAmount}€ so you dont have to pay anything`)
}else{
    const LOWER_VALUE = 29
    const TOTAL_PRICE = orderAmount + 4.99
    if(deliveryType === "shipping"){
        if(orderAmount === LOWER_VALUE){
            alert(`Your total of your order is about: ${TOTAL_PRICE}€`)
        }else{
            alert(" The shipping is for free ")
        }
    }
}


//AFTER A QUICK REVIEW WITH CLAUDE

/*
let orderAmount = parseFloat(prompt("Please write you're order Amount"));
let deliveryType = prompt("Tell us your delivery Type: ('Collecting' or 'Shipping') ").toLowerCase();

if (deliveryType === "collecting") {
    alert(`Your total is ${orderAmount}€. No shipping fee since you're collecting in store.`);
} else if (deliveryType === "shipping") {
    const LOWER_VALUE = 30;
    const TOTAL_PRICE = orderAmount + 4.99;

    if (orderAmount < LOWER_VALUE) {
        alert(`Your total order cost is: ${TOTAL_PRICE}€`);
    } else {
        alert("The shipping is free!");
    }
} else {
    alert("Incorrect delivery type, please specify 'Collecting' or 'Shipping'.");
}

*/