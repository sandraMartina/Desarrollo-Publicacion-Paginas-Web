
//In here i was wondering why my code dindt work show me that i was using other variable
let age = parseInt(prompt("Please Write your AGE"));

if(age < 18){
    alert("Sorry this calculator is for adult people")
}else if( age >=18){
        let weightPeople = parseFloat(prompt("Please write your Weight(Peso in 'kg' )"));
        let heightP = parseFloat(prompt("Please write your Height(Altura in 'meters')"));
        let total = weightPeople / (heightP * heightP)

        //In here i was using the weightPeople total mistake, it was the total and i dind realize about that one
        if(total < 18.5){
            alert(`You´re IMC ${total.toFixed(2)} 'Low Weight'`) //added a .toFixed()
        }else if (total >= 18.5 && total < 25){
            alert(`You´re IMC ${total.toFixed(2)} 'Normal Weight'`)
        }else if(total >= 25 && total < 30){
            alert(`You´re IMC ${total.toFixed(2)} 'Kinda Overweight'`)
        }else{
            alert(`You´re IMC ${total.toFixed(2)} 'Obesity'`)
        }
}
