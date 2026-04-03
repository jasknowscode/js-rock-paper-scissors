    // Generate three random computer choices "Rock, Paper, Scissors" //
        function getComputerChoice() {
            const x =  Math.random() * 3;

            if (x < 1) {
                return ("Rock")
            }
            else if (x >= 2) {
                return ("Paper")
            }
            else {
                return ("Scissors")
            }
        }; 

            console.log(getComputerChoice()); 
        // Prompt user to enter three choices making the answer case sensitive//
        function getHumanChoice() {
            const answer = (prompt("Please enter your choice of Rock, Paper, or Scissors"));
                return answer.toLowerCase();
        };

        // console.log(getHumanChoice()); //
        
        // Take human and computer choices and compare. Winning combinations return "winner" and increment score by one. //
        function playGame(playRound) {

            humanScore = 0;
            computerScore = 0;

            function playRound(humanChoice, computerChoice) {

                if  (humanChoice === computerChoice) { 
                    return "It's a tie";
                }
                else if ((humanChoice === "rock" && computerChoice === "scissors") ||
                         (humanChoice === "paper" && computerChoice === "rock") || 
                         (humanChoice === "scissors" && computerChoice === "paper")) {
                    humanScore++;
                    console.log("You win!");
                }
                else {
                    computerScore++;
                    console.log("Computer wins!");
                }
            };

            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();

            console.log(playRound(humanSelection, computerSelection));

            // Play five rounds calling choice function result for each round //
        }

        console.log(playGame());
        
