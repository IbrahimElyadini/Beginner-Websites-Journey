
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;


function playGame(choice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if(choice === computerChoice){
        result = "It's a tie!";
    }
    else{
        switch(choice){
            case "rock":
                result = (computerChoice === "scissors" ? "You win!" : "You lost!");
                break;
            case "paper":
                result = (computerChoice === "rock" ? "You win!" : "You lost!");
                break;
            case "scissors":
                result = (computerChoice === "paper" ? "You win!" : "You lost!");
                break;
        }
    }
    playerDisplay.textContent = `Player: ${choice}`;
    computerDisplay.textContent = `Player: ${computerChoice}`;
    resultDisplay.textContent = `Result: ${result}`;
    switch (result){
        case "You win!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You lost!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        case "It's a tie!":
            resultDisplay.classList.remove("greenText","redText");
            break;
    }
}