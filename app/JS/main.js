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
let answers = [];
let pcAns = "";
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
  <button class="rock"> Hello </button>
  <button class="paper"> Hello </button>
  <button class="scissors"> Hello </button>
  `
  );

  chooseChoice();
}

function chooseChoice() {
  for (let i = 1; i <= number; i++) {
    pcAnswer();
  }
}

function pcAnswer() {
  let pc = Math.random();
  if (pc <= 0.3333) {
    pcAns = "rock";
  }
  if (pc <= 0.6666) {
    pcAns = "paper";
  } else {
    pcAns = "scissors";
  }
}

DOMSelectors.start.addEventListener("click", start);
