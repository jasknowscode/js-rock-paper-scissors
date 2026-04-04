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

        // Prompt user to enter three choices making the answer case sensitive //

        function getHumanChoice() {

            let answer = prompt("Please enter your choice of Rock, Paper, or Scissors")
                return answer.toUpperCase();
        };

        console.log(getComputerChoice());
        console.log(getHumanChoice());

        // Starting score for human and computer //
        // Take human and computer choices and compare. Winning combinations return "winner" and increment score by one. //
        // Log the round winner //
        // Play five rounds calling choice function result for each round //

        function playGame(playRound) {

            

            humanChoice = getHumanChoice();
            computerChoice = getComputerChoice();

            let humanScore = 0;
            let computerScore = 0;

            function playRound(humanChoice, computerChoice) {

                const h = humanChoice;
                const c = computerChoice;

                if  (h === c) {
                    console.log("It's a tie");
                } else if ((h === "Rock" && c === "Scissors") ||
                           (h === "Paper" && c === "Rock") || 
                           (h === "Scissors" && c === "Paper")) {
                    console.log("You're the winner of this round, " + h  + " beats " + c)
                    humanScore++;
                } else {
                    console.log("The computer wins this round!");
                    computerScore++;
                }
            };
            
            console.log(playRound(humanChoice, computerChoice));

        }

        console.log(playGame());

         

       
        
