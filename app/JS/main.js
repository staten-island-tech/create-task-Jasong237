import "../css/style.css";

const DOMSelectors = {
  rock: document.querySelector(".rock"),
  container: document.querySelector(".container"),
  start: document.querySelector(".start"),
  number: document.querySelector(".number"),
};

let number = 0;

function start(event) {
  event.preventDefault();
  console.log("hello");
  number = DOMSelectors.number.value;

  startGame();
  /*  if (number <= 0) {
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
  } */
}

function startGame() {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `
  <button class="rock"> Hello </button>
  <button class="paper"> Hello </button>
  <button class="scissors"> Hello </button>
  `
  );
}

DOMSelectors.start.addEventListener("click", start);
