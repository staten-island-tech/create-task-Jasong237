import "../css/style.css";

const DOMSelectors = {
  container: document.querySelector(".container"),
  textContainer: document.querySelector(".textContainer"),
  endContainer: document.querySelector(".endContainer"),
  start: document.querySelector(".start"),
  rock: document.querySelector(".rock"),
  paper: document.querySelector(".paper"),
  scissors: document.querySelector(".scissors"),
  finalPc: document.querySelector(".finalPc"),
  result: document.querySelector(".result"),
};

let options = ["rock", "paper", "scissors"];
let removedOptions = [];
let chosenOption = [];
let choice = "";
let result = "";
let answers = [];
let pcChoice = "";
let inputChoice = "";
let win = 0;
let lose = 0;
let tie = 0;

startGame();

function startGame() {
  options.forEach((option) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `
  <button class="${option}"> 
  <img class="${option}img" src="${option}.png" alt="${option}"> </button>
  `
    );
  });
  document.querySelector(".rock").classList.toggle("resetButtons");
  document.querySelector(".paper").classList.toggle("resetButtons");
  document.querySelector(".scissors").classList.toggle("resetButtons");
  document.querySelector(".rock").addEventListener("click", rock);
  document.querySelector(".paper").addEventListener("click", paper);
  document.querySelector(".scissors").addEventListener("click", scissors);
}

function pcAnswer() {
  let randomNum = Math.floor(Math.random() * 3);
  console.log(randomNum);

  if (randomNum === 0) {
    pcChoice = "rock";
  } else if (randomNum === 1) {
    pcChoice = "paper";
  } else if (randomNum === 2) {
    pcChoice = "scissors";
  }
  console.log("the bot chooses", pcChoice);
  console.log("You chose", inputChoice, "the bot chose", pcChoice);
}

function round(choice) {
  inputChoice = choice;
  removeOthers();
  console.log(`${inputChoice}`, "was chosen");
  pcAnswer();
  if (inputChoice === pcChoice) {
    console.log("tie!");
    result = "tie";
  } else if (
    (choice === "rock" && pcChoice === "scissors") ||
    (choice === "paper" && pcChoice === "rock") ||
    (choice === "scissors" && pcChoice === "paper")
  ) {
    console.log("Winner!");
    result = "winner";
  } else {
    console.log("Loser!");
    result = "loser";
  }

  answers.push(result);

  DOMSelectors.textContainer.insertAdjacentHTML(
    "beforeend",
    `
    <h3 class="finalInput"> You chose ${inputChoice}</h3>
    <h3 class="finalPc"> The bot chose ${pcChoice}</h3>
    <h1 class="result"> ${result}! </h1>
    <button class="nextButton"> Next Round </button>
    `
  );
  document.querySelector(".finalInput").classList.toggle("showChoices");
  document.querySelector(".finalPc").classList.toggle("showChoices");
  document.querySelector(".result").classList.toggle("revealResult");
  document.querySelector(".nextButton").addEventListener("click", nextGame);
  document.querySelector(".nextButton").classList.toggle("nextRound");
}

function removeEventListeners() {
  document.querySelector(".rock").removeEventListener("click", rock);
  document.querySelector(".paper").removeEventListener("click", paper);
  document.querySelector(".scissors").removeEventListener("click", scissors);
}
function rock() {
  choice = "rock";
  removeEventListeners();
  round(choice);
}

function paper() {
  choice = "paper";
  removeEventListeners();
  round(choice);
}

function scissors() {
  choice = "scissors";
  removeEventListeners();
  round(choice);
}

function removeOthers() {
  removedOptions = [];
  console.log(removedOptions);
  options.forEach((option) => {
    if (option != inputChoice) {
      removedOptions.push(option);
    } else {
      chosenOption.push(option);
    }
  });
  console.log("the released options are:", removedOptions);
  removedOptions.forEach((removedOption) => {
    document
      .querySelector(`.${removedOption}`)
      .classList.toggle("resetButtons");
    document.querySelector(`.${removedOption}`).classList.toggle("explode");
  });
}

function nextGame() {
  document.querySelector(".nextButton").classList.toggle("nextRound");
  document.querySelector(".nextButton").innerHTML = "";
  document.querySelector(".finalInput").classList.toggle("showChoices");
  document.querySelector(".finalPc").classList.toggle("showChoices");
  document.querySelector(".result").classList.toggle("result");
  document.querySelector(".textContainer").innerHTML = "";
  document.querySelector(".container").innerHTML = "";
  console.log("I removed it");
  removedOptions = [];
  console.log("The removed options array", removedOptions);
  startGame();
}

function end() {
  console.log(answers);

  countScore();
  console.log(
    "You won",
    `${win}`,
    "times and lost",
    `${lose}`,
    "times (also",
    `${tie}`,
    "ties)"
  );
  DOMSelectors.endContainer.insertAdjacentHTML(
    "beforeend",
    `
    <h1> You won ${win} time(s) </h1>
    <h1> You lost ${lose} time(s) </h1>
    <h1> You tied ${tie} time(s) </h1>
    `
  );
  document.querySelector(".endButton").removeEventListener("click", end);
  DOMSelectors.container.innerHTML = "";
  DOMSelectors.textContainer.innerHTML = "";
  document.querySelector(".endContainer").classList.toggle("revealFinal");
}

function countScore() {
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === "winner") {
      win++;
    } else if (answers[i] === "loser") {
      lose++;
    } else if (answers[i] === "tie") {
      tie++;
    }
  }
}

document.querySelector(".endButton").addEventListener("click", end);

// on the task, dont put your entire code (put less to make it easier)
