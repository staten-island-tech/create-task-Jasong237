import "../css/style.css";

const DOMSelectors = {
  buttonContainer: document.querySelector(".buttonContainer"),
  container: document.querySelector(".container"),
  textContainer: document.querySelector(".textContainer"),
  textContainerTwo: document.querySelector(".textContainerTwo"),
  endContainer: document.querySelector(".endContainer"),
};

let options = ["rock", "paper", "scissors"];
let removedOptions = [];
let chosenOption = [];
let answers = [];
let pcChoice = "";
let inputChoice = "";
let result = "";
let win = 0;
let lose = 0;
let tie = 0;

console.log("Hello we are at the game");
DOMSelectors.buttonContainer.insertAdjacentHTML(
  "afterbegin",
  `
    <button type="submit" class="endButton"> End Game </button>
    `
);

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
  document.querySelector(".endButton").addEventListener("click", end);
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

function round(inputChoice) {
  removeOthers();
  console.log(`${inputChoice}`, "was chosen");
  pcAnswer();
  if (inputChoice === pcChoice) {
    console.log("tie!");
    result = "tie";
  } else if (
    (inputChoice === "rock" && pcChoice === "scissors") ||
    (inputChoice === "paper" && pcChoice === "rock") ||
    (inputChoice === "scissors" && pcChoice === "paper")
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
      <h3 class="finalInput"> You chose ${inputChoice}...</h3>
      <h3 class="finalPc"> and the bot chose ${pcChoice}</h3>`
  );
  DOMSelectors.textContainerTwo.insertAdjacentHTML(
    "beforeend",
    `
      <button class="pcChoice"> 
      <img class="pcImg" src="${pcChoice}.png" alt="${pcChoice}"> </button>
      <h1 class="result"> ${result}! </h1>
      <button class="nextButton"> Next Round </button>
      `
  );

  document.querySelector(".finalInput").classList.toggle("fourSeconds");
  document.querySelector(".finalPc").classList.toggle("fiveSeconds");
  document.querySelector(".pcImg").classList.toggle("fiveSeconds");
  document.querySelector(".pcChoice").classList.toggle("fiveSeconds");
  document.querySelector(".result").classList.toggle("sixSeconds");
  document.querySelector(".nextButton").addEventListener("click", nextGame);
  document.querySelector(".nextButton").classList.toggle("sevenSeconds");
}

function removeEventListeners() {
  document.querySelector(".rock").removeEventListener("click", rock);
  document.querySelector(".paper").removeEventListener("click", paper);
  document.querySelector(".scissors").removeEventListener("click", scissors);
}
function rock() {
  inputChoice = "rock";
  removeEventListeners();
  round(inputChoice);
}

function paper() {
  inputChoice = "paper";
  removeEventListeners();
  round(inputChoice);
}

function scissors() {
  inputChoice = "scissors";
  removeEventListeners();
  round(inputChoice);
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
  document.querySelector(".nextButton").classList.toggle("sevenSeconds");
  document.querySelector(".nextButton").innerHTML = "";
  document.querySelector(".finalInput").classList.toggle("fiveSeconds");
  document.querySelector(".finalPc").classList.toggle("fiveSeconds");
  document.querySelector(".result").classList.toggle("sixSeconds");
  document.querySelector(".textContainer").innerHTML = "";
  document.querySelector(".textContainerTwo").innerHTML = "";
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
      <h1 class="win"> You won ${win} time(s) </h1>
      <h1 class="lose"> You lost ${lose} time(s) </h1>
      <h1 class="tie"> You tied ${tie} time(s) </h1>
      <button class="replayButton"> Play Again? </button>
      `
  );
  document.querySelector(".endButton").removeEventListener("click", end);
  DOMSelectors.buttonContainer.innerHTML = "";
  DOMSelectors.container.innerHTML = "";
  DOMSelectors.textContainer.innerHTML = "";
  DOMSelectors.textContainerTwo.innerHTML = "";
  document.querySelector(".endContainer").classList.toggle("twoSeconds");
  document.querySelector(".replayButton").classList.toggle("threeSeconds");
  document
    .querySelector(".replayButton")
    .addEventListener("click", restartGame);
}

function restartGame() {
  document.querySelector(".endContainer").classList.toggle("twoSeconds");
  document.querySelector(".replayButton").classList.toggle("threeSeconds");
  answers = [];
  win = 0;
  lose = 0;
  tie = 0;
  document.querySelector(".endContainer").innerHTML = "";
  DOMSelectors.buttonContainer.insertAdjacentHTML(
    "afterbegin",
    `
      <button type="submit" class="endButton"> End Game </button>
      `
  );
  console.log("A new game begins...");
  startGame();
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
