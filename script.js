// let computerChoiceResault = "";
// let playerChoiceResault = "";

let playerScore = 0;
let computerScore = 0;

function computerChoice() {
    let random = Math.floor(Math.random() * 3);
    let computerChoiceResault;
    if (random == 0) {
        computerChoiceResault = "papier";
    } else if (random == 1) {
        computerChoiceResault = "kamień";
    } else if (random == 2) {
        computerChoiceResault = "nożyce";
    }
    return computerChoiceResault;
}

function playerChoice() {
    let playerChoiceResault = prompt("Co wybierasz?");
    playerChoiceResault = playerChoiceResault.toLocaleLowerCase();
    return playerChoiceResault;
}

function playRound(player, computer) {
    console.log(`Gracz wybrał ${player} Komputer wybrał ${computer}`)
    if (player === computer) {
        console.log("remis");
    } else if (player === "papier" && computer === "kamień" || player === "kamień" && computer === "nożyce" || player === "nożyce" && computer === "papier") {
        console.log("Wygrywa gracz");
        playerScore++;
    } else if (player === "kamień" && computer === "papier" || player === "nożyce" && computer === "kamień" || player === "papier" && computer === "nożyce") {
        console.log("Wygrywa komputer");
        computerScore++;
    }
}

playRound(playerChoice(), computerChoice());