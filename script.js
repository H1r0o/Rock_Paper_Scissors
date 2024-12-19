function computerChoice() {
    let random = Math.floor(Math.random() * 3);

    if (random == 0) {
        console.log("Papier");
    } else if (random == 1) {
        console.log("Kamień");
    } else if (random == 2) {
        console.log("Nożyce");
    }
}

computerChoice();
