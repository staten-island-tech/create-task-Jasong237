import "../css/style.css";

const DOMSelectors = {
  body: document.querySelector(".body"),
  container: document.querySelector(".container"),
  start: document.querySelector(".start"),
  number: document.querySelector(".number"),
  rock: document.querySelector(".rock"),
  paper: document.querySelector(".paper"),
  scissors: document.querySelector(".scissors"),
};

let number = 5;
let round = 0;
let result = "";
let answers = [];
let pcAns = "";
let pc = "";
let ans = "";
function start(event) {
  event.preventDefault();
  console.log("hello");
  number = DOMSelectors.number.value;

  startGame(); /* 
  if (number <= 0) {
    alert("Please enter a number above 0");
    return;
  }
  if (number >= 100) {
    alert("Why would one play RPS over a hundred times");
    return;
  }
  if (number % 1 === 0) {
    startGame();
  } else {
    alert("Whole numbers only!");
    return;
  }*/
}

function startGame() {
  /*   DOMSelectors.body.innerHTML = ""; */
  DOMSelectors.container.insertAdjacentHTML(
    "afterbegin",
    `
  <button class="rock"> Rock </button>
  <button class="paper"> Paper </button>
  <button class="scissors"> Scissors </button>
  `
  );
  DOMSelectors.body.insertAdjacentHTML(
    "afterbegin",
    `
    <button class="end"> End Game </button>
    `
  );
  chooseChoice();
}

function chooseChoice() {
  for (let i = 0; i < number; i++) {
    round++;
    document.querySelector(".rock").addEventListener("click", rock);
    document.querySelector(".paper").addEventListener("click", paper);
    document.querySelector(".scissors").addEventListener("click", scissors);
  }
}

function pcAnswer() {
  pc = Math.random();
  console.log(pc);

  if (pc < 0.3333) {
    pcAns = "rock";
  }
  if (pc > 0.6666) {
    pcAns = "paper";
  } else {
    pcAns = "scissors";
  }
  console.log("the bot chooses", pcAns);
  console.log("You chose", ans, "the bot chose", pcAns);
  answers.push(`Round ${round}:`, result);
}

function rock() {
  ans = "rock";
  console.log("rock was chosen");
  pcAnswer();
  if (pc <= 0.3333) {
    console.log("Tie!");
    result = "tie";
    return;
  }
  if (pc >= 0.6666) {
    console.log("Loser!");
    result = "loser";
    return;
  } else {
    console.log("Winner!");
    result = "winner";
    return;
  }
}

function paper() {
  ans = "paper";
  console.log("paper was chosen");
  pcAnswer();
  if (pc <= 0.3333) {
    console.log("Winner!");
    return;
  }
  if (pc >= 0.6666) {
    console.log("Tie!");
    return;
  } else {
    console.log("Loser!");
    return;
  }
}

function scissors() {
  ans = "scissors";
  console.log("scissors was chosen");
  pcAnswer();
  if (pc <= 0.3333) {
    console.log("Loser!");
    return;
  }
  if (pc >= 0.6666) {
    console.log("Winner!");
    return;
  } else {
    console.log("Tie!");
    return;
  }
}

function end() {
  DOMSelectors.body.innerHTML = "";
  alert("Done!");
  countScore();
}

function countScore() {}

DOMSelectors.start.addEventListener("click", start);
DOMSelectors.end.addEventListener("click", end);
