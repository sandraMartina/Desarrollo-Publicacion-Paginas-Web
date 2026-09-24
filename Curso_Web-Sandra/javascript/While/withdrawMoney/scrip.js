
let actualBalance = parseFloat(prompt("Please write the balance that you have in your account (€)"));
//let balance = 0;

while(actualBalance > 0){
    let withdrawMoney = parseFloat(prompt(`Please write the amount of money that you want to withdraw (your actual balance: ${actualBalance}€)`));
    if(withdrawMoney > actualBalance){
        alert(`You can´t withdraw more than the balance that you have in your account`);
    }else{
        actualBalance = actualBalance - withdrawMoney;
        console.log(`Your actual balance is ${actualBalance}`);
        withdrawMoney = parseFloat(prompt(`Please write the amount of money that you want to withdraw (your actual balance: ${actualBalance}€)`));
        if(withdrawMoney > actualBalance){
            alert(`You can´t withdraw more than the balance that you have in your account`)
        }else{
            alert(`Your balance in your account ${actualBalance}`)
        }
    }

}
