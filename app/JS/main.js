import "../css/style.css";

const DOMSelectors = {
  body: document.querySelector(".body"),
  container: document.querySelector(".container"),
  textContainer: document.querySelector(".textContainer"),
  start: document.querySelector(".start"),
  rock: document.querySelector(".rock"),
  paper: document.querySelector(".paper"),
  scissors: document.querySelector(".scissors"),
  next: document.querySelector(".next"),
  finalPc: document.querySelector(".finalPc"),
};

let options = ["rock", "paper", "scissors"];
let removedOptions = [];
let chosenOption = [];
let choice = "";
let result = "";
let answers = [];
let pcChoice = "";
let randomNum = "";
let inputChoice = "";
let win = 0;
let lose = 0;
let tie = 0;

startGame();

function startGame() {
  DOMSelectors.body.innerHTML = "";

  options.forEach((option) => {
    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `
  <button class="${option}"> 
  <img class="${option}img" src="${option}.png" alt="${option}"> </button>
  `
    );
  });
  document.querySelector(".rock").classList.toggle("reappear");
  document.querySelector(".paper").classList.toggle("reappear");
  document.querySelector(".scissors").classList.toggle("reappear");
  document.querySelector(".rock").addEventListener("click", rock);
  document.querySelector(".paper").addEventListener("click", paper);
  document.querySelector(".scissors").addEventListener("click", scissors);
}

function pcAnswer() {
  randomNum = Math.floor(Math.random() * 3);
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

  DOMSelectors.textContainer.insertAdjacentHTML(
    "beforeend",
    `
    <h3 class="finalInput"> You chose ${inputChoice}</h3>
    <h3 class="finalPc"> The bot chose ${pcChoice}</h3>
    <button class="next"> Next Round </button>
    `
  );
  document.querySelector(".finalInput").classList.toggle("visible");
  document.querySelector(".finalPc").classList.toggle("visible");
  document.querySelector(".next").addEventListener("click", nextGame);
  document.querySelector(".next").classList.toggle("appear");
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
    document.querySelector(`.${removedOption}`).classList.toggle("reappear");
    document.querySelector(`.${removedOption}`).classList.toggle("explode");
  });
}

function nextGame() {
  document.querySelector(".next").classList.toggle("appear");
  document.querySelector(".next").innerHTML = "";
  document.querySelector(".finalInput").classList.toggle("visible");
  document.querySelector(".finalPc").classList.toggle("visible");
  document.querySelector(".textContainer").innerHTML = "";
  document.querySelector(".container").innerHTML = "";
  console.log("I removed it");
  removedOptions = [];
  console.log("The removed options array", removedOptions);
  startGame();
}

function end() {
  console.log(answers);
  DOMSelectors.body.innerHTML = "";
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
}

function countScore() {
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === "winner") {
      win++;
      console.log("once");
    } else if (answers[i] === "loser") {
      lose++;
      console.log("twice");
    } else if (answers[i] === "tie") {
      tie++;
      console.log("three");
    }
  }
}

document.querySelector(".end").addEventListener("click", end);
