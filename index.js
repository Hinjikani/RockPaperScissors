function getComputerChoice() {
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

function getHumanChoice() {
    let humanChoice = prompt("what is your move?")
    return humanChoice.toLowerCase()
}

let humanScore = 0
let computerScore = 0
let tie = 0

function playround() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    //=================TIE SCENARIO=================
    if (computerChoice === humanChoice) {
        tie++;
        alert(`It's a tie, both of you choose ${humanChoice}\n\n<--- Current Score --->\nYour score: ${humanScore}\nOpponent score: ${computerScore}\nTie: ${tie}`);
    }
    
    //=================WIN SCENARIO=================
    else if (
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock"
    ) {
        humanScore++;
        alert(`You win!!!\nYou choose ${humanChoice} and your opponent choose ${computerChoice}\n\n<--- Current Score --->\nYour score: ${humanScore}\nOpponent score: ${computerScore}\nTie: ${tie}`)
    }
    
    //=================LOSE SCENARIO=================
    else if (
        humanChoice === "scissors" && computerChoice === "rock" ||
        humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors"
    )
    {
        computerScore++;
        alert(`You lose!!!\nYou choose ${humanChoice} and your opponent choose ${computerChoice}\n\n<--- Current Score --->\nYour Score: ${humanScore}\nOpponent Score: ${computerScore}\nTie: ${tie}`)
    }
        }
    
playround()
playround()
playround()
playround()
playround()

alert(`Final Score\nYour score: ${humanScore}\nOpponent score: ${computerScore}\nTie: ${tie}`)