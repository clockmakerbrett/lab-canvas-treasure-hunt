// main.js

class Character {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  moveUp() {
    this.col -= 1;
  }
  moveRight() {
    this.row += 1;
  }
  moveDown() {
    this.col += 1;
  }
  moveLeft() {
    this.row -= 1;
  }
}

class Treasure {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
  setRandomPosition() {
    const randomRow = Math.floor(Math.random() * 11);
    const randomCol = Math.floor(Math.random() * 11);
    this.row = randomRow;
    this.col = randomCol;
  }
}

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const player = new Character(5, 3);

const treasure = new Treasure();
treasure.setRandomPosition();

const width = canvas.width;
const height = canvas.height;

context.strokeStyle = "gray";

// Iteration 1
function drawGrid() {
  for (let i = 1; i < 10; i++) {
    context.beginPath();
    context.moveTo(50 * i, 0);
    context.lineTo(50 * i, height);
    context.stroke();
    context.closePath();
  }
  for (let i = 1; i < 10; i++) {
    context.beginPath();
    context.moveTo(0, 50 * i);
    context.lineTo(width, 50 * i);
    context.stroke();
    context.closePath();
  }
}

function drawPlayer() {
  const playerImage = new Image();
  playerImage.src = "/images/character-down.png";
  playerImage.addEventListener("load", () => {
    context.drawImage(playerImage, player.row * 50 - 50, player.col * 50 - 50);
  });
}

function drawTreasure() {
  const treasureImage = new Image();
  treasureImage.src = "/images/treasure.png";
  treasureImage.addEventListener("load", () => {
    context.drawImage(
      treasureImage,
      treasure.row * 50 - 50,
      treasure.col * 50 - 50,
      50,
      50
    );
  });
}

function drawEverything() {
  drawGrid();
  drawPlayer();
  drawTreasure();
}

window.addEventListener("keydown", (event) => {
  console.log(player.row, player.col);
  console.dir(event);
  switch (event.keyCode) {
    case 40:
      console.log(player.row, player.col);
      player.moveDown();
      context.clearRect(0, 0, width, height);
      drawEverything();
    case 38:
      player.moveUp();
      context.clearRect(0, 0, width, height);
      drawEverything();
    case 39:
      player.moveRight();
      context.clearRect(0, 0, width, height);
      drawEverything();
    case 40:
      player.moveLeft();
      context.clearRect(0, 0, width, height);
      drawEverything();
  }
});

drawEverything();
