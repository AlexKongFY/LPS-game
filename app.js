let userScore = 0;
let computerScore = 0;

//cache the DOM from HTML
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
// const scoreBoardDiv = document.getElementsByClassName("score-board");
const resultDiv = document.querySelector(".result > p");
const lapisDiv = document.getElementById("lapis");
const papyrusDiv = document.getElementById("papyrus");
const scalpellusDiv = document.getElementById("scalpellus");
const resetButton = document.getElementById("reset-button");

// Get computer choice randomly
const generateComputerChoice = () => {
  const choices = ["lapis", "papyrus", "scalpellus"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
};

// Uppercase the first letter of the word
uppercaseFirstLetter = (word) => {
  if (word === "lapis") {
    return "Lapis";
  } else if (word === "papyrus") {
    return "Papyrus";
  } else {
    return "Scalpellus";
  }
};

// redefine the results of wins, loses, ties and scoreboard
const win = (userChoice, computerChoice) => {
  userScore += 1;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultDiv.innerHTML = `${uppercaseFirstLetter(
    userChoice
  )}  beats ${uppercaseFirstLetter(computerChoice)}. You win!`;
};

const lose = (userChoice, computerChoice) => {
  computerScore += 1;
  computerScoreSpan.innerHTML = computerScore;
  userScoreSpan.innerHTML = userScore;
  resultDiv.innerHTML = `${uppercaseFirstLetter(
    userChoice
  )} is unable to break ${uppercaseFirstLetter(computerChoice)}. You lose!`;
};

const draw = (userChoice, computerChoice) => {
  resultDiv.innerHTML = `${uppercaseFirstLetter(
    userChoice
  )} equals to ${uppercaseFirstLetter(computerChoice)}. It's a tie!`;
};

// Get user choice against computer choice
const game = (userChoice) => {
  const computerChoice = generateComputerChoice();
  switch (userChoice + computerChoice) {
    case "papyruslapis":
    case "lapisscalpellus":
    case "scalpelluspapyrus":
      win(userChoice, computerChoice);
      break;
    case "lapispapyrus":
    case "scalpelluslapis":
    case "papyrusscalpellus":
      lose(userChoice, computerChoice);
      break;
    case "lapislapis":
    case "papyruspapyrus":
    case "scalpellusscalpellus":
      draw(userChoice, computerChoice);
      break;
  }
};

// a function to reset the scoreboard to zero
const reset = () => {
  resetComputerScore = 0;
  computerScoreSpan.innerHTML = resetComputerScore;
  resetUserScore = 0;
  userScoreSpan.innerHTML = resetUserScore;
};

const main = () => {
  lapisDiv.addEventListener("click", () => game("lapis"));

  papyrusDiv.addEventListener("click", () => game("papyrus"));

  scalpellusDiv.addEventListener("click", () => game("scalpellus"));

  resetButton.addEventListener("click", () => reset());
};

main();
