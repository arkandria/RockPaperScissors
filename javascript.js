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
        return "It's a tie!"
    } else if ( (playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        playerScore++;
        return "You win!";
    } else {
        computerScore++;
        return "You lose!";
    }
}

console.log (playRound());
