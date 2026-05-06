        
        // Create a function that takes a number between 0 and 3 (1, 2, 3)
        // And rounds to the nearest whole number to return a string
        // Return a string of 3 outcomes "Rock, Paper, Scissors"

        let computerChoice =  Math.floor().Math.random(1, 2, 3) * 3;
        let humanChoice = prompt("Please enter your choice of Rock, Paper, or Scissors")
            answer.toUpperCase();

        let humanScore = 0;
        let computerScore = 0;

        function getComputerChoice() {

            if (computerChoice <= 1) {
                return ("ROCK");
            }
            if (computerChoice >= 2) {
                return ("PAPER");
            }
            else {
                return ("SCISSORS");
            }

        };
        
        function playGame(playRound) {

            for (let playRound = 0; ; playRound++) {

                if (humanScore > computerScore) {
                playRound = humanScore++;
                }
                if (computerScore > humanScore) {
                playRound = computerScore++;
                }
            };

            function playRound(humanChoice, computerChoice) {


                if  (humanChoice === computerChoice) {
                    playRound.textContent = "It's a tie";
                } else if ((humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
                           (humanChoice === "PAPER" && computerChoice === "ROCK") || 
                           (humanChoice === "SCISSORS" && computerChoice === "PAPER")) {
                    playRound.textContent = ("You're the winner of this round, ") + humanChoice  + (" beats ") + computerChoice;
                    humanScore++;
                } else {
                    playRound.textContent = "The computer wins this round!";
                    computerScore++;
                }
            };
        }
        
        const rockBtn = document.getElementById('#rock');
        const paperBtn = document.getElementById('#paper');
        const scissorsBtn = document.getElementById('#scissors');

        rockBtn.addEventListener('click', () => playRound('ROCK'));
        paperBtn.addEventListener('click', () => playRound('PAPER'));
        scissorsBtn.addEventListener('click', () => playRound('SCISSORS'));

        const results = document.getElementById('#results');

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

        




