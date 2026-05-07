        // Create a function that takes a number between 0 and 3 (1, 2, 3)
        // And rounds to the nearest whole number to return a string
        // Return a string of 3 outcomes "Rock, Paper, Scissors"

let humanScore = 0;
let computerScore = 0;

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');


const results = document.createElement('div');
results.textContent = "SCORE";
results.style.backgroundColor = "pink";
const scoreDisplay = document.createElement('div');
scoreDisplay.textContent = `You: ${humanScore} | Computer: ${computerScore}`;



function updateScore() {
    scoreDisplay.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5) {
        scoreDisplay.textContent = "That's game, you win!";
    } else if (computerScore === 5) {
        scoreDisplay.textContent = "That's game, computer wins!";
    } 
};

document.body.appendChild(results);
document.body.appendChild(scoreDisplay);

function getComputerChoice() {
    let computerChoice =  Math.floor(Math.random() * 3);

    if (computerChoice === 1) {
        return ("ROCK");
    } if (computerChoice === 2) {
        return ("PAPER");
    } else {
        return ("SCISSORS");
    }
};

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if  (humanChoice === computerChoice) {
        results.textContent = "It's a tie";
    } else if (
        (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (humanChoice === "PAPER" && computerChoice === "ROCK") || 
        (humanChoice === "SCISSORS" && computerChoice === "PAPER")) {
        results.textContent = ("You're the winner of this round, ") + humanChoice  + (" beats ") + computerChoice;
        humanScore++;
        updateScore();
    } else {
        results.textContent = ("The computer wins this round!");
        computerScore++;
        updateScore();
    }
};


rockBtn.addEventListener('click', () => playRound("ROCK"));
paperBtn.addEventListener('click', () => playRound("PAPER"));
scissorsBtn.addEventListener('click', () => playRound("SCISSORS"));

        // Prompt user to enter three choices making the answer case sensitive
        // Return value to of human choice
        // Create a function where the human and computer choices are compared
        // Put human and computer score in a variable
        // After each cycle through comparison - console.log or alert winner
        // Increment score after each round and announce round winner
        // After five rounds, log game winner and loop ends (return to document object)
        // To play the game you need to run a function and call human
        // And computer choice functions; announce a winner
        // Increment after announcement 
        // Commence next round

        




