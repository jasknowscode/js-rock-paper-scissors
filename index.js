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

        // console.log(getComputerChoice()); //
        // Prompt user to enter three choices making the answer case sensitive//
        function getHumanChoice() {
            const answer = (prompt("Please enter your choice of Rock, Paper, or Scissors"));
                return answer.toUpperCase();
        };

        // console.log(getHumanChoice()); //
        
        // Take human and computer choices and compare. Winning combinations return "winner" and increment score by one. //
        function playGame(playRound) {

            humanScore = 0;
            computerScore = 0;

            function playRound(humanChoice, computerChoice) {

                const humanChoice = getHumanChoice();
                const computerChoice = getComputerChoice();

                if  (humanChoice === computerChoice) { 
                    return "It's a tie";
                }
                else if      ((humanChoice === "Rock" && computerChoice === "Scissors") ||
                         (humanChoice === "Paper" && computerChoice === "Rock") || 
                         (humanChoice === "Scissors" && computerChoice === "Paper")) {
                    return "You won!";
                }
                else {
                    return "You lost!";
                }

            };

            console.log(playRound(humanScore++))
            console.log(playRound(computerScore++))
        }

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(playGame(humanSelection || computerSelection));
        
