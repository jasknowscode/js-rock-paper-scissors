        // Create a function that takes a number between 0 and 3 (1, 2, 3)
        // And rounds to the nearest whole number to return a string
        // Return a string of 3 outcomes "Rock, Paper, Scissors"

        function getComputerChoice() {
            let computerChoice =  Math.floor().Math.random(1, 2, 3) * 3;

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
            console.log(getComputerChoice);

        // Prompt user to enter three choices making the answer case sensitive
        // Return value to of human choice
        // Create a function where the human and computer choices are compared
        // Put human and computer score in a variable
        // After each cycle through comparison - console.log or alert winner
        // Increment score after each round and announce round winner
        // After five rounds, log game winner and loop ends (return to document object)

        function getHumanChoice() {

            let answer = prompt("Please enter your choice of Rock, Paper, or Scissors")
                answer.toUpperCase();
        };
        return getHumanChoice();

        // To play the game you need to run a function and call human
        // And computer choice functions; announce a winner
        // Increment after announcement 
        // Commence next round

        function playGame(playRound) {

            let humanScore = 0;
            let computerScore = 0;

            for (let playRound = 0; playRound < 5; playRound++) {

                if (humanScore > computerScore) {
                console.log(playRound = humanScore++);
                }
                else if (computerScore > humanScore) {
                console.log(playRound = computerScore++);
                }
                else {
                console.log();
                }
            };

            return playRound;

            function playRound(humanChoice, computerChoice) {

                const humanChoice = getHumanChoice();
                const computerChoice = getComputerChoice();

                if  (humanChoice === computerChoice) {
                    console.log("It's a tie");
                } else if ((humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
                           (humanChoice === "PAPER" && computerChoice === "ROCK") || 
                           (humanChoice === "SCISSORS" && computerChoice === "PAPER")) {
                    console.log("You're the winner of this round, " + h  + " beats " + c)
                    humanScore++;
                } else {
                    console.log("The computer wins this round!");
                    computerScore++;
                }
            };
        }


