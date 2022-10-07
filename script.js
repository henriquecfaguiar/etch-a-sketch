const root = document.documentElement;

const grid = document.querySelector(".grid");
const buttons = document.querySelectorAll(".btn");
const newGridBtn = document.querySelector(".new-grid");
const clearBtn = document.querySelector(".clear");
const rgbBtn = document.querySelector(".rgb");
const eraserBtn = document.querySelector(".eraser");
const singleClrBtn = document.querySelector(".single-color")


let gridSize = 16;

newGridBtn.addEventListener("click", getNewGridSize);
singleClrBtn.addEventListener("click", activateSingleColor);
rgbBtn.addEventListener("click", activateRgb);
clearBtn.addEventListener("click", clearGrid);
eraserBtn.addEventListener("click", activateEraser);

function createGrid(gridSize) {
  root.style.setProperty("--grid-size", gridSize);
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const gridElement = document.createElement("div");
      gridElement.classList.add("grid-element");
      grid.appendChild(gridElement);
    };
  };
  activateSingleColor();
};

function getNewGridSize() {
  let gridSize = Number(prompt("Choose a new grid size (max: 100)"));
  if (gridSize === 0) {
    gridSize = 16;
  } else if (gridSize > 100) {
    gridSize = 100;
  };
  clearGrid();
  createGrid(gridSize);
};

function activateSingleColor() {
  rgbBtn.classList.remove("active");
  eraserBtn.classList.remove("active");
  singleClrBtn.classList.add("active");
  changeColor();
};

function activateRgb() {
  singleClrBtn.classList.remove("active");
  eraserBtn.classList.remove("active");
  rgbBtn.classList.add("active");
  changeColor();
};

function activateEraser() {
  singleClrBtn.classList.remove("active");
  rgbBtn.classList.remove("active");
  eraserBtn.classList.add("active");
  let grid = document.querySelectorAll(".grid-element");
  grid.forEach((element) => element.addEventListener("mouseover", () => { element.style.backgroundColor = "#F9FAF8" }));
};

function changeColor() {
  const activeBtn = document.querySelector(".active");
  let grid = document.querySelectorAll(".grid-element");
  if (activeBtn.classList[0] === "rgb") {
    grid.forEach((element) => element.addEventListener("mouseover", () => { element.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)} )` }));
  } else {
    grid.forEach((element) => element.addEventListener("mouseover", () => { element.style.backgroundColor = "black" }));
  }
};

function clearGrid() {
  let grid = document.querySelectorAll(".grid-element");
  grid.forEach((element) => element.style.backgroundColor = "#F9FAF8");
};

createGrid(gridSize);
activateSingleColor();