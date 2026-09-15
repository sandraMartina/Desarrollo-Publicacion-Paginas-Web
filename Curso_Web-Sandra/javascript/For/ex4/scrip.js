
//Pure brain worked

/*
let passWord = parseInt(prompt("Please write the correct number password: (You only have 3 attempts)"));
const DEF_PASSWORD = 1234;
let totalAttempts = 3

for(let counter=1; counter <= totalAttempts; counter++){
    if(passWord === DEF_PASSWORD){
        alert("Correct answer, welcome!")
        break

    }else{
        passWord = parseInt(prompt("Please write the correct number password: (You only have 2 attempts)"));
        counter++
        passWord = parseInt(prompt("Please write the correct number password: (You only have 1 attempt)"));
        passWord++
        alert(`Sorry you have exceeded the maximum number of attempts`)
    }
}   
   
*/
const DEF_PASSWORD = 1234;
let totalAttempts = 3

for(let counter=1; counter <= totalAttempts; counter++){
    let passWord = parseInt(prompt(`Please write your 4-digit password: (You only have ${totalAttempts - counter + 1} attempts)`));
    if(passWord === DEF_PASSWORD){
        alert("Correct answer, welcome!")
        break
    }else if(counter === totalAttempts){
        alert(`Sorry you have exceeded the maximum number of attempts`)
    }
}