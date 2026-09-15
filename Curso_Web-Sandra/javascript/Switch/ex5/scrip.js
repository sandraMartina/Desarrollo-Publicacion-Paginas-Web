let cineDay = (prompt("Please introduce which day you usually go to cinema:  ( Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday)" )).toLowerCase();
let age = parseInt(prompt("Please write your age"))
let total;

switch (cineDay){
    case "wednesday":
        if(age < 12){
            total = 4.50 - 2
            alert(`The price of your entry is ${total}`)
        }else{
            alert("The price of the entry is: 4.50€ :) ");
        }  
    break;
        //i had: sabado domingo
    case "saturday":
    case "sunday":
        if(age < 12){
            total = 7.50 - 2
            alert(`The price of your entry is ${total}`)
        }else{
            alert("The entry price is: 7.50€ :)")
        }
    break;

    default:
        if(age < 12){
            total = 6 - 2
            alert(`The price of your entry is ${total}`)
        }else{
            alert("The price for the entry is: 6€ :) ")
        }    
        
         break;
}
