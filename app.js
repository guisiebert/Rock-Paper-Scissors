const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(op => op.addEventListener('click', (e) => {
    //As ações a serem feitas quando um dos botões é apertado
    userChoice = e.target.id // dá a id do botão para a variável
    userChoiceDisplay.innerHTML = userChoice // imprime a variável no html
    console.log("You have choosen: " + userChoice)
    generateComputerChoice();
    getResult();
}))


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    if (randomNumber == 1) {computerChoice = "Rock"};
    if (randomNumber == 2) {computerChoice = "Paper"};
    if (randomNumber == 3) {computerChoice = "Scissors"};

    computerChoiceDisplay.innerHTML = computerChoice;
    console.log("Computer chooses: " + computerChoice)
}

function getResult() {
    if (computerChoice === userChoice) {result = "Draw"}
    if (computerChoice === "Rock" && userChoice === "Paper") {result = "User wins!"}
    if (computerChoice === "Rock" && userChoice === "Scissors") {result = "Computer wins!"}
    if (computerChoice === "Paper" && userChoice === "Rock") {result = "Computer wins!"}
    if (computerChoice === "Paper" && userChoice === "Scissors") {result = "User wins!"}
    if (computerChoice === "Scissors" && userChoice === "Paper") {result = "Computer wins!"}
    if (computerChoice === "Scissors" && userChoice === "Rock") {result = "User wins!"}
    resultDisplay.innerHTML = result
}


//TESTERS

const oioo = document.getElementById('testing');
oioo.innerHTML = ""

