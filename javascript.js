let array = ["ROCK","PAPER","SCISSORS"];
let playerScore= 0;
let computerScore=0;


const computerPlay = () => {
    let choice = Math.floor(Math.random()*3);
    //console.log (choice);
    return array[choice]
}
//console.log(computerPlay());

const playRound = ( playerSelection, computerSelection) => {
    playerSelection = prompt("Type your selection (Paper, Rock or scissors)");
    computerSelection = computerPlay();
    playerSelection = playerSelection.toUpperCase();
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === computerSelection) {
        return alert(`You: ${playerSelection} Computer: ${computerSelection}
        It's a tie!`);
    } else if ( (playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        playerScore++;
        return alert(`You: ${playerSelection} Computer: ${computerSelection}
         You win!`);
    } else {
        computerScore++;
        return alert(`You: ${playerSelection} Computer: ${computerSelection}
        You lose!`);
    }
}

//console.log (playRound());
//console.log(playerScore);
//console.log(computerScore);

const game = () => {
    for (let i = 0; i < 5; i++) {
        playRound();
     }
    if ( playerScore > computerScore) {
        return `Your score is ${playerScore} - ${computerScore}. You won!`
    } else if ( playerScore === computerScore) {
        return `Your score is ${playerScore} - ${computerScore}. It's a tie!`
    } else {
        return `Your score is ${playerScore} - ${computerScore}. You lost!`
    }
}

console.log (game());