

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
 }else{
     alert("Incorrect Class, specify the correct one")
 }




//help with the ai

// let weight = parseFloat(prompt("Please write your suitcase Weight (kg)"));
// let classUser = prompt("Please write if your traveling in: 'Economy' or 'Premium' class").toLowerCase();

// const ECONOMY_FREE_LIMIT = 23;
// const ECONOMY_MAX_ALLOWED = 32;   // above this, economy doesn't qualify at all
// const PREMIUM_FREE_LIMIT = 32;

// if (classUser === "economy") {

//   if (weight > ECONOMY_MAX_ALLOWED) {
//     alert(`Sorry, ${weight}kg exceeds what Economy class allows (max ${ECONOMY_MAX_ALLOWED}kg). Please select Premium class instead.`);

//   } else if (weight <= ECONOMY_FREE_LIMIT) {
//     alert("You're within the limit for free luggage, so you don't have to pay anything.");

//   } else {
//     let additionalCharge = (weight - ECONOMY_FREE_LIMIT) * 15;
//     alert(`You have to pay ${additionalCharge}€ extra charge because you passed the free limit.`);
//   }

// } else if (classUser === "premium") {

//   if (weight <= PREMIUM_FREE_LIMIT) {
//     alert("You're within the limit for free luggage, so you don't have to pay anything.");
//   } else {
//     let additionalChargePremium = (weight - PREMIUM_FREE_LIMIT) * 15;
//     alert(`You have to pay a ${additionalChargePremium}€ extra charge because you passed the free limit.`);
//   }

// } else {
//   alert("Incorrect Class, specify the correct one");
// }