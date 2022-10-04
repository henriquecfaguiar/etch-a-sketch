const root = document.documentElement;

const grid = document.querySelector(".grid");
const newGridBtn = document.querySelector(".new-grid-btn");
const clearBtn = document.querySelector(".clear-btn");

let gridSize = 16;

newGridBtn.addEventListener("click", getNewGridSize)
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

function getNewGridSize() {
  let gridSize = Number(prompt("Choose a new grid size (max: 100)"));
  console.log(gridSize);
  if (gridSize === 0) {
    gridSize = 16;
  };
  clearGrid();
  createGrid(gridSize);
};

function addHover() {
  let grid = document.querySelectorAll(".grid-element");
  grid.forEach(element => {
    element.addEventListener("mouseover", (element) => { element.target.classList.add("hover") });
  });
};

function clearGrid() {
  let grid = document.querySelectorAll(".grid-element");
  grid.forEach((element) => element.classList.remove("hover"));
};

createGrid(gridSize);
addHover();