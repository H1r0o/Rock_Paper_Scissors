let computerChoiceResault = "";
let playerChoiceResault = "";

let playerScore = 0;
let computerScore = 0;

function computerChoice() {
    let random = Math.floor(Math.random() * 3);

    if (random == 0) {
        computerChoiceResault = "papier";
    } else if (random == 1) {
        computerChoiceResault = "kamień";
    } else if (random == 2) {
        computerChoiceResault = "nożyce";
    }
    console.log(computerChoiceResault);
}

function playerChoice() {
    playerChoiceResault = prompt("Co wybierasz?");
    playerChoiceResault = playerChoiceResault.toLocaleLowerCase();
    console.log(playerChoiceResault);
}
