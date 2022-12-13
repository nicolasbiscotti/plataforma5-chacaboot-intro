let bodyColor = "rgb(0, 100, 0)";

let title = selectElement("h1");
let squares = selectAllElements(".square");
let squaresContainer = selectElement("#squares-container");
let colorDisplay = selectElement("#colorDisplay");
let message = selectElement("#message");
let playAgainButton = selectElement("#reset");
let easyButton = selectElement("#easyButton");
let hardButton = selectElement("#hardButton");

let clickedColor = null;
let colors;
let pickedColor;
let gameMode = 6;

playAgainButton.addEventListener("click", reset);
easyButton.addEventListener("click", selectMode);
hardButton.addEventListener("click", selectMode);

reset();

function reset(event) {
  removeChildren(squaresContainer);

  colors = generateRandomColors(gameMode);
  pickedColor = pickColor();
  setText(colorDisplay, pickedColor);

  setText(message, "");
  setText(playAgainButton, "New Colors");
  setColor(title, bodyColor);

  drawSquares();
  console.log(pickedColor);
}

function selectMode(event) {
  let mode = event.target.textContent;
  if (mode.toLowerCase() === "easy") {
    easyButton.setAttribute("class", "selected");
    hardButton.setAttribute("class", "");
    gameMode = 3;
  } else {
    easyButton.setAttribute("class", "");
    hardButton.setAttribute("class", "selected");
    gameMode = 6;
  }
  reset();
}

// function paintSquares() {
//   console.log(squares);
//   for (let index = 0; index < squares.length; index++) {
//     setColor(squares[index], colors[index]);
//     squares[index].addEventListener("click", checkColor);
//   }
// }

function drawSquares() {
  for (let index = 0; index < gameMode; index++) {
    let square = document.createElement("div");
    square.className = "square";
    setColor(square, colors[index]);
    square.addEventListener("click", checkColor);
    squaresContainer.appendChild(square);
  }
  console.log(squaresContainer);
}

function removeChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
}

function checkColor(event) {
  let selectedSquare = event.target;
  clickedColor = selectedSquare.style.backgroundColor;
  console.log(clickedColor, pickedColor);
  if (clickedColor.split(" ").join("") !== pickedColor.split(" ").join("")) {
    setText(message, "Intentalo Nuevamente");
    setColor(selectedSquare, bodyColor);
  } else {
    setText(message, "¡Correcto!");
    setText(playAgainButton, "Play Again");
    setColor(title, pickedColor);
    changeColors(pickedColor);
  }
}

function generateRandomColors(size) {
  let colors = [];
  for (let i = 0; i < size; i++) {
    colors[i] = randomColor();
  }
  console.log(colors);
  return colors;
}

function randomColor() {
  return `rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`;
}

function pickColor() {
  let index = randomNumber(gameMode - 1);
  console.log(index);
  return colors[index];
}

function randomNumber(until) {
  until = until + 1;
  let zeros = until.toString().length;
  let multiply = "1";
  for (let i = 0; i < zeros; i++) {
    multiply = multiply + "0";
  }
  multiply = Number(multiply);
  return Math.round(Math.random() * multiply) % until;
}

function changeColors(color) {
  for (let index = 0; index < gameMode; index++) {
    setColor(squaresContainer.childNodes[index], color);
  }
}

function setColor(element, color) {
  element.style.backgroundColor = color;
}

function setText(element, text) {
  element.textContent = text;
}

function selectElement(selector) {
  return document.querySelector(selector);
}
function selectAllElements(selector) {
  return document.querySelectorAll(selector);
}

// console.log(bodyColor);
