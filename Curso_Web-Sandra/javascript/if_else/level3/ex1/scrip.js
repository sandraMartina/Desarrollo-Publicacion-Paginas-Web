
// let player1 = prompt(` 'Player ONE' Choose: ROCK, PAPER, SCISSORS`).toLowerCase();
// let player2 = prompt(` 'Player TWO' Choose: ROCK, PAPER, SCISSORS`).toLowerCase();

// //if (player1 !== "rock", "paper", "scissors" || player2 !== "rock", "paper", "scissors" ) my code 
// if (player1 !== "rock" && player1 !== "paper" && player1 !== "scissors" || 
//     player2 !== "rock" && player2 !== "paper" && player2 !== "scissors" ){
//     alert('Sorry you have to write it well before play');
// }else if(player1 === player2 ){
//         alert("Its a draw");
// }else if(
//             (player1 === "rock" && player2 === "scissors") ||
//             (player1 === "scissors" && player2 === "paper") ||
//             (player1 === "paper" && player2 === "rock")
//         ){
//             alert(`The winner of this round is ${player1}`)
//         }else{
//              alert(`The winner of this round is ${player2}`)             
// }



//THIS IS THE ONE
// First have the option not to continue for the first player and then the second one, after that i want to show the name of the winner 
//thas why im asking their names first
let namePlayer1= prompt("Write your name 'Player ONE'")
let player1 = prompt(` 'Player ONE' Choose: ROCK, PAPER, SCISSORS`).toLowerCase();

 
if (player1 !== "rock" && player1 !== "paper" && player1 !== "scissors"){
    alert("Sorry 'Player 1' you have to write: Rock, Paper, Scissors correctly before play");
}else {

    let namePlayer2= prompt("Write your name 'Player TWO'")
    let player2 = prompt(` 'Player TWO' Choose: ROCK, PAPER, SCISSORS`).toLowerCase();
    

    if(player2 !== "rock" && player2 !== "paper" && player2 !== "scissors"){
        alert("'Player 2' please write correctly: Rock, Paper, Scissors before continue")
    }else{
        if(player1 === player2 ){
            alert("WOW! Its a draw");
    }else if(
            (player1 === "rock" && player2 === "scissors") ||
            (player1 === "scissors" && player2 === "paper") ||
            (player1 === "paper" && player2 === "rock")
        ){
            
            alert(`Congratulation ${namePlayer1}, you are the winner of this round`)
        }else{
             alert(`BRAVO ${namePlayer2}, your the winner of this round`)             
        }
    }
} 