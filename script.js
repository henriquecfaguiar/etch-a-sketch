const root = document.documentElement;

const grid = document.querySelector(".grid");
const buttons = document.querySelectorAll(".btn");
const newGridBtn = document.querySelector(".new-grid");
const clearBtn = document.querySelector(".clear");
const rgbBtn = document.querySelector(".rgb");
const singleClrBtn = document.querySelector(".single-color")


let gridSize = 16;

newGridBtn.addEventListener("click", getNewGridSize);
singleClrBtn.addEventListener("click", activateSingleColor);
rgbBtn.addEventListener("click", activateRgb);
clearBtn.addEventListener("click", clearGrid);

function createGrid(gridSize) {
  root.style.setProperty("--grid-size", gridSize);
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const gridElement = document.createElement("div");
      gridElement.classList.add("grid-element");
      grid.appendChild(gridElement);
    };
  };
  addHover();
};

function addHover() {
  let grid = document.querySelectorAll(".grid-element");
  grid.forEach(element => {
    element.addEventListener("mouseover", (element) => { element.target.classList.add("hover") });
  });
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
  singleClrBtn.classList.add("active");
  changeColor();
};

function activateRgb() {
  singleClrBtn.classList.remove("active");
  rgbBtn.classList.add("active");
  changeColor();
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
  grid.forEach((element) => element.style.backgroundColor = "white");
};

createGrid(gridSize);
activateSingleColor();