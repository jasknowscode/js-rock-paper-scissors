        // Generate three random computer choices "Rock, Paper, Scissors" //

        function getComputerChoice() {
            const x =  (Math.random() * 3);

            if (x < 1) {
                return ("ROCK");
            }
            else if (x >= 2) {
                return ("PAPER");
            }
            else {
                return ("SCISSORS");
            }
        }; 

        // Prompt user to enter three choices making the answer case sensitive //

        function getHumanChoice() {

            let answer = prompt("Please enter your choice of Rock, Paper, or Scissors")
                return answer.toUpperCase();
        };

        // console.log(getComputerChoice());
        // console.log(getHumanChoice());

        // Starting score for human and computer //
        // Take human and computer choices and compare. Winning combinations return "winner" and increment score by one. //
        // Log the round winner //
        // Play five rounds calling choice function result for each round //

        function playGame(playRound) {

            const humanChoice = getHumanChoice();
            const computerChoice = getComputerChoice();

            let humanScore = 0;
            let computerScore = 0;

            function playRound(humanChoice, computerChoice) {

                const h = humanChoice;
                const c = computerChoice;

                if  (h === c) {
                    console.log("It's a tie");
                } else if ((h === "ROCK" && c === "SCISSORS") ||
                           (h === "PAPER" && c === "ROCK") || 
                           (h === "SCISSORS" && c === "PAPER")) {
                    console.log("You're the winner of this round, " + h  + " beats " + c)
                    humanScore++;
                } else {
                    console.log("The computer wins this round!");
                    computerScore++;
                }
            };


            for (i = 0; i < 0; i++) {
                playRound();
            }

            if (humanScore > computerScore) {
                console.log('Congratulations you won the game ' + humanScore);
            }
            else if (computerScore > humanScore) {
                console.log('You lost the game! Computer wins ' + computerScore);
            }
            else {
                console.log('The game is a tie!')
            }
                    
            console.log(playRound());

        // Recall human and computer choices for five rounds, choosing a winner each round and increasing point. //
        // Announce winner of game at the end of five rounds // 
        };

        console.log(playGame());   