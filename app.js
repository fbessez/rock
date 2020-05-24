let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['r', 'p', 's']
  return choices[0]
}

function convertToWord(letter) {
  if (letter == "r") return "ROCK";
  if (letter == "s") return "PAPER";
  return "SCISSORS";
}

function applyGlow(userChoice, glowClass) {
  document.getElementById(userChoice).classList.add(glowClass)
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove(glowClass)
  }, 700)
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore
  result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
  applyGlow(userChoice, 'green-glow')
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore
  result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lose!`;
  applyGlow(userChoice, 'red-glow')
}

function tie(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore
  result_p.innerHTML = `${convertToWord(userChoice)} ties with ${convertToWord(computerChoice)}. You suck...`;
  applyGlow(userChoice, 'gray-glow')
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      console.log("You win!");
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice)
      console.log("You lost. SMH.");
      break;
    case "rr":
    case "ss":
    case "pp":
      tie(userChoice, computerChoice)
      console.log("You tied");
      break;
  }
}

function main() {
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scissors_div.addEventListener('click', () => game("s"));
}

main();