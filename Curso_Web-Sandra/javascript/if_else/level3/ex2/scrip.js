
let weight = parseFloat(prompt("Please write your suitcase Weight (kg)"));
let classUser = prompt("Please write if your traveling in: 'Economy' or 'Premium' class ").toLowerCase();

let additionalWeight = weight - 23
let additionalCharge = additionalWeight * 15

let additionalWeightPremium = weight - 32
let additionalChargePremium = additionalWeightPremium * 15


if(classUser === "economy"){
    if(additionalCharge <= 23 ){
        alert("You´re in the limit price for free luggage, so you don´t have to pay anything")
    }else{
        alert(`You have to pay  ${additionalCharge}€ extra charge because you pass the limit free access`)
    }
}else if(classUser === "premium"){
    if(additionalChargePremium <= 32){
        alert("You´re in the limit price for free luggage, so you don´t have to pay anything")
    }else{
        alert(`You have to pay a ${additionalChargePremium}€ extra charge because you pass the limit free access`)
    }
}