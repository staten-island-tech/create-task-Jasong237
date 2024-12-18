import "../css/style.css";

const DOMSelectors = {
  body: document.querySelector(".body"),
  container: document.querySelector(".container"),
  start: document.querySelector(".start"),
  end: document.querySelector(".end"),
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
let win = 0;
let lose = 0;
let tie = 0;

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
  pc = Math.floor(Math.random() * 3);
  console.log(pc);

  if (pc === 0) {
    pcAns = "rock";
  }
  if (pc === 1) {
    pcAns = "paper";
  }
  if (pc === 2) {
    pcAns = "scissors";
  }
  console.log("the bot chooses", pcAns);
  console.log("You chose", ans, "the bot chose", pcAns);
  answers.push(result);
}

function rock() {
  ans = "rock";
  console.log("rock was chosen");
  pcAnswer();
  if (pc === 0) {
    console.log("Tie!");
    result = "tie";
    return;
  }
  if (pc === 1) {
    console.log("Loser!");
    result = "loser";
    return;
  }
  if (pc === 2) {
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
  for (let i = 1; i < answers.length; i++) {
    if ((answer[i] = "win")) {
      win++;
      console.log("once");
      return;
    }
    if ((answer[i] = "lose")) {
      lose++;
      console.log("twice");
      return;
    } else {
      tie++;
      console.log("three");
      return;
    }
  }
}

DOMSelectors.start.addEventListener("click", start);
DOMSelectors.end.addEventListener("click", end);
