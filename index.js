function computerChoice() {
    let randomNumber = Math.floor(Math.random()*100) + 1;
    if (randomNumber % 2 == 0) {
        let randomNumber = Math.floor(Math.random()*100) + 1;
        if (randomNumber % 2 == 0) {
            return "scissors"
        } else {
            return "rock"
        }
    }   else{
        return "paper"
    }
}

console.log(computerChoice())