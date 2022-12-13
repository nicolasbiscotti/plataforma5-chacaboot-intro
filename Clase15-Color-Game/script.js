let bodyColor = "rgb(0, 100, 0)";

let title = selectElement("h1");
let squares = selectAllElements(".square");
let colorDisplay = selectElement("#colorDisplay");
let message = selectElement("#message");
let playAgain = selectElement("#reset");

let clickedColor = null;

let colors;
let pickedColor;

reset();
playAgain.addEventListener("click", reset);

function reset(event) {
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  console.log(pickedColor);
  setColor(title, bodyColor);
  drawSquares();
}

function drawSquares() {
  console.log(squares);
  for (let index = 0; index < squares.length; index++) {
    setColor(squares[index], colors[index]);
    squares[index].addEventListener("click", checkColor);
  }
}

function checkColor(event) {
  let selectedSquare = event.target;
  clickedColor = selectedSquare.style.backgroundColor;
  console.log(clickedColor, pickedColor);
  if (clickedColor.split(" ").join("") !== pickedColor.split(" ").join("")) {
    message.textContent = "Intentalo Nuevamente";
    setColor(selectedSquare, bodyColor);
  } else {
    message.textContent = "¡Correcto!";
    setColor(title, pickedColor);
    changeColors(pickedColor);
  }
}

function generateRandomColors(size) {
  let colors = [];
  for (let i = 0; i < size; i++) {
    colors[i] = randomColor();
  }
  return colors;
}

function randomColor() {
  let r = randomNumber(255);
  let g = randomNumber(255);
  let b = randomNumber(255);
  return `rgb(${r},${g},${b})`;
}

function pickColor() {
  let index = randomNumber(5);
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
  for (let index = 0; index < squares.length; index++) {
    squares[index].style.backgroundColor = color;
  }
}

function setColor(element, color) {
  element.style.backgroundColor = color;
}

function selectElement(selector) {
  return document.querySelector(selector);
}
function selectAllElements(selector) {
  return document.querySelectorAll(selector);
}

// console.log(bodyColor);
