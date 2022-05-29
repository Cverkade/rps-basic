const options = ["rock", "paper", "scissors"]
const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const resultText = document.getElementById("resultText")
const playGameContainer = document.getElementById("playGameContainer")
const playerScoreText = document.getElementById("playerScore")
const computerScoreText = document.getElementById("compScore")
const scoreContainer = document.getElementById("scoreContainer")
const buttons = document.getElementById("buttons")
const afterGame = document.getElementById("afterGame")

let playerScore = 0;
let computerScore = 0;
afterGame.style.display = 'none'

function playRound(playerSelection) {
    computerSelection = computerPlay(options);

    if (playerSelection == computerSelection) {
        console.log("draw")
        resultText.innerHTML = "Draw! You chose " + playerSelection + " and so did computer";
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        console.log("win")
        resultText.innerHTML = "You win! You chose " + playerSelection + ", computer chose " + computerSelection;
        playerScore++;
    } else {
        console.log("lose")
        resultText.innerHTML = "You lose! You chose " + playerSelection + ", computer chose " + computerSelection;
        computerScore++;
    }
    displayScore(playerScore, computerScore);
}

function displayScore(player, computer) {

    if (computer == 5 || player == 5) {
        playGameContainer.style.display = 'none'
        if (computer > player) {
            resultText.innerHTML = "You lose! Computer won the last round and wins with a score of " + computer + " to " + player + "!"
        } else {
            resultText.innerHTML = "You won the last round and win with a score of " + player + " to " + computer + "!"
        }
        afterGame.style.display = 'block'
    }
    computerScoreText.innerHTML = computer;
    playerScoreText.innerHTML = player;


}


rock.addEventListener("click", function () {
    playRound("rock");
});
paper.addEventListener("click", function () {
    playRound("paper");
});
scissors.addEventListener("click", function () {
    playRound("scissors");
});
afterGame.addEventListener("click", function () {
    location.reload();
});

function computerPlay(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
