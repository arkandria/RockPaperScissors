let array = ["ROCK","PAPER","SCISSORS"];
let playerScore= 0;
let computerScore=0;


const computerPlay = () => {
    let choice = Math.floor(Math.random()*3);
    //console.log (choice);
    return array[choice]
}
//console.log(computerPlay());
const results = document.querySelector('.results');
const content = document.createElement('div');
content.classList.add('results');
const you = document.querySelector('#you');    
const comp = document.querySelector('#comp');



const playRound = (playerSelection) => {
    
    computerSelection = computerPlay();
    playerSelection = playerSelection.toUpperCase();
    //console.log(playerSelection);
    //console.log(computerSelection);
    if (playerSelection === computerSelection) {
        return results.textContent = `You: ${playerSelection} Computer: ${computerSelection}
        It's a tie!`;
    } else if ( (playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        playerScore += 1;
        return results.textContent = `You: ${playerSelection} Computer: ${computerSelection}`;
    } else {
        computerScore += 1;
        return results.textContent =`You: ${playerSelection} Computer: ${computerSelection}`;
    }
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playRound("rock");
    results.style.color = 'white';
    results.style.fontSize= "25px";
    showResults();
    if (playerScore===5) {
        results.textContent = "You won the match!";
        results.style.color = 'lightskyblue';
        results.style.fontSize = "40px";
        playerScore= 0;
        computerScore=0;
    } else if (computerScore===5) {
        results.textContent = "You lost the match!";
        results.style.color = 'lightskyblue';
        results.style.fontSize = "40px";
        playerScore= 0;
        computerScore=0;
    }
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playRound("paper");
    results.style.color = 'white';
    results.style.fontSize = "25px";
    showResults();
    if (playerScore===5) {
        results.textContent = "You won the match!";
        results.style.color = 'lightskyblue';
        results.style.fontSize = "40px";
        playerScore= 0;
        computerScore=0;
    } else if (computerScore===5) {
        results.textContent = "You lost the match!";
        results.style.color = 'lightskyblue';
        results.style.fontSize = "40px";
        playerScore= 0;
        computerScore=0;
    }
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playRound("scissors");
    results.style.color = 'white';
    results.style.fontSize = "25px";
    showResults();
    if (playerScore===5) {
        results.textContent = "You won the match!";
        results.style.color = 'lightskyblue';
        results.style.fontSize = "40px";
        playerScore= 0;
        computerScore=0;
    } else if (computerScore===5) {
        results.textContent = "You lost the match!";
        results.style.color = 'lightskyblue';
        results.style.fontSize = "40px";
        playerScore= 0;
        computerScore=0;
    }
});



let showResults = () => { 
    you.textContent = playerScore;
    comp.textContent = computerScore;

};



