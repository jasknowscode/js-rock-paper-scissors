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

        //   console.log(getComputerChoice()); //
        // Prompt user to enter three choices making the answer case sensitive //

        function getHumanChoice() {

            const answer = (prompt("Please enter your choice of Rock, Paper, or Scissors"));
                console.log(answer);
        };

        // console.log(getHumanChoice()); //

        function playGame(playRound) {

        // Starting score for human and computer //

        let humanScore = 0;
        let computerScore = 0;

        // Take human and computer choices and compare. Winning combinations return "winner" and increment score by one. //
        // Log the round winner //

            function playRound(humanChoice, computerChoice) {

                if  (humanChoice === computerChoice) { 
                    console.log("It's a tie");
                }
                else if ((humanChoice === "rock" && computerChoice === "scissors") ||
                         (humanChoice === "paper" && computerChoice === "rock") || 
                         (humanChoice === "scissors" && computerChoice === "paper")) {
                    console.log("You're the winner of this round," + " " + humanChoice + " " + "beats" + " " + computerChoice)
                    humanScore++;
                }
                else {
                    console.log("The computer wins this round!");
                    computerScore++;
                }
            };
            console.log(playRound())

            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();  

        // Play five rounds calling choice function result for each round //
        }

         console.log(playGame());

       
        
