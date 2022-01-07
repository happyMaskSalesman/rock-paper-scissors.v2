

function computerPlay() {
    let computerChoices = ["Rock", "Paper", "Scissors"];
    return(computerChoices[Math.floor(Math.random()*computerChoices.length)]);
};

function capitalize(playerSelection) {
    return playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();
};

function playRound(playerSelection, computerSelection) {

    playerSelection = capitalize(playerSelection);

    if (playerSelection === "Rock" && computerSelection === "Rock") {
        return("Tie Game!");
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return("You win! Rock beats Paper");
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return("You lose! Paper beats Rock");
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        return("Tie Game!");
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return("You win! Paper beats Rock");
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return("You lose! Scissors beats Paper");
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return("You win! Scissors beats Paper");
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return("You lose! Rock beats Scissors");
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        return("Tie Game!");
    } else {
        alert("Please choose valid choice");

    };
};

function game() {
    let rounds = 0;
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) { 
        let playerSelection = prompt("Rock, Paper, or Scissors?", "");
        let roundResult = playRound(playerSelection, computerPlay()); 
        
        if (roundResult === undefined) {
            i -= 1;
        } else if (roundResult === "Tie Game!") {
            console.log("Round: " + (rounds += 1));
            console.log(roundResult);
            console.log("Player Score: " + playerScore);
            console.log("Computer Score: " + computerScore);
        } else if (roundResult.slice(0, 7) === "You win") {
            console.log("Round: " + (rounds += 1));
            console.log(roundResult);
            console.log("Player Score: " + (playerScore += 1));
            console.log("Computer Score: " + computerScore);
        } else if (roundResult.slice(0, 8) === "You lose") {
            console.log("Round: " + (rounds += 1));
            console.log(roundResult);
            console.log("Player Score: " + playerScore);
            console.log("Computer Score: " + (computerScore += 1));
        };
    };
    if (playerScore > computerScore) {
        alert("Congratulations! You have beaten the computer!");
    } else if (playerScore < computerScore) {
        alert("Sorry, you lose :(");
    } else {
        alert("Tie Game!")
    };
};

game();


