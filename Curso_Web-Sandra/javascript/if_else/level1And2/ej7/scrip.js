

// i change some things like asking first if the employee is a partner
let partner = prompt("Are you a Partner?(Yes/No)").toLowerCase();


if(partner === "no" ){
    alert("Sorry, This is a confidential information");
}else if (partner === "yes"){

        //THe order of the variable change, because the first question it has to be different from what the 
        //user answer
        let selImport = parseFloat(prompt("Write the sale Value(€)"));
        let byFive = selImport * 5 / 100;  
        let byEight = selImport * 8 / 100;
        let byTwelve = selImport * 12 / 100;

        
        if(selImport < 1000){
            alert(`Hey, your commission is ${byFive + 50}€`);
        }else if(selImport >= 1000 && selImport <=5000){
            alert(`Hey great, youre commission is about ${byEight + 50}`)
        }else if( selImport > 5000){
            alert(`Great your commission is ${byTwelve + 50}`);
        }else{
        alert("The Value is incorrect");
        }
}else{
    alert("Please answer with Yes/No");
}
     



