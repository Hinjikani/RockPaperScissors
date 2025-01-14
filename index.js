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

let humanScore = 0
let computerScore = 0
let tie = 0
let image
let computerHeading
let yourScore
let opponentScore
let tieScore
let winPic
let winText
let losePic
let loseText
let tiePic
let tieText


function playround() {
    computerChoice = getComputerChoice()

    if (computer.contains(image)) {
        computer.removeChild(image);
        computer.removeChild(heading);
    }

    if(score.contains(yourScore)) {
        score.removeChild(yourScore);
        score.removeChild(opponentScore);
        score.removeChild(tieScore);
    }

    if(result.contains(winPic)) {
        result.removeChild(winPic);
        result.removeChild(winText);
    } else if (result.contains(losePic)) {
        result.removeChild(losePic);
        result.removeChild(loseText);
    } else if (result.contains(tiePic)) {
        result.removeChild(tiePic);
        result.removeChild(tieText);
    }


    if (computerChoice == "rock") {
        appendComputerHeading()
        appendRock()
    } else if (computerChoice == "paper") {
        appendComputerHeading()
        appendPaper()
    } else if (computerChoice == "scissors") {
        appendComputerHeading()
        appendScissors()
    }

    //=================TIE SCENARIO=================
    if (computerChoice === humanChoice) {
        tied();
        tie++;
    }
    
    //=================WIN SCENARIO=================
    else if (
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock"
    ) {
        win();
        humanScore++;
    }
    
    //=================LOSE SCENARIO=================
    else if (
        humanChoice === "scissors" && computerChoice === "rock" ||
        humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors"
    )
    {
        lose();
        computerScore++;
    }
    appendScore()
        }

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

rock.addEventListener("click", () => {
    humanChoice = "rock";
    playround();
})

paper.addEventListener("click", () => {
    humanChoice = "paper";
    playround();
})

scissors.addEventListener("click", () => {
    humanChoice = "scissors";
    playround();
})

const computer = document.querySelector(".stance")
const score = document.querySelector(".score")
const result = document.querySelector(".result")

function appendRock() {
    image = document.createElement("img")
    image.setAttribute("src", "./images/rock.png")
    image.setAttribute("id", "rock")
    computer.appendChild(image)
}

function appendPaper() {
    image = document.createElement("img")
    image.setAttribute("src", "./images/paper.png")
    image.setAttribute("id", "paper")
    computer.appendChild(image)
}

function appendScissors() {
    image = document.createElement("img")
    image.setAttribute("src", "./images/scissors.png")
    image.setAttribute("id", "scissors")
    computer.appendChild(image)
}

function appendComputerHeading() {
    heading = document.createElement("h1")
    heading.textContent = "Computer stance:"
    computer.appendChild(heading)
}

function appendScore() {
    yourScore = document.createElement("p")
    yourScore.textContent =`Your score: ${humanScore}`
    opponentScore = document.createElement("p")
    opponentScore.textContent = `Opponent Score: ${computerScore}`
    tieScore = document.createElement("p")
    tieScore.textContent = `Tie: ${tie}`
    score.appendChild(yourScore)
    score.appendChild(opponentScore)
    score.appendChild(tieScore)
}

function win() {
    winPic = document.createElement("img")
    winPic.setAttribute("src", "./images/win.png")
    winText = document.createElement("p")
    winText.textContent = "YOU WIN!!!!"
    result.appendChild(winPic)
    result.appendChild(winText)
}

function lose() {
    losePic = document.createElement("img")
    losePic.setAttribute("src", "./images/lose.png")
    loseText = document.createElement("p")
    loseText.textContent = "YOU LOSE :(((("
    result.appendChild(losePic)
    result.appendChild(loseText)
}

function tied() {
    tiePic = document.createElement("img")
    tiePic.setAttribute("src", "./images/tie.png")
    tieText = document.createElement("p")
    tieText.textContent = "TIE!!!"
    result.appendChild(tiePic)
    result.appendChild(tieText)
}