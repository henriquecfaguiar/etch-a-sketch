const root = document.documentElement;

const grid = document.querySelector('.grid');
const buttons = document.querySelectorAll('.btn');
const newGridBtn = document.querySelector('.new-grid-btn');
const clearBtn = document.querySelector('.clear-btn');
const rgbBtn = document.querySelector('.rgb-btn');
const eraserBtn = document.querySelector('.eraser-btn');
const blackClrBtn = document.querySelector('.black-color-btn');

let gridSize = 16;

newGridBtn.addEventListener('click', getNewGridSize);
blackClrBtn.addEventListener('click', activateBlackColor);
rgbBtn.addEventListener('click', activateRgb);
clearBtn.addEventListener('click', clearGrid);
eraserBtn.addEventListener('click', activateEraser);

function createGrid(gridSize) {
  root.style.setProperty('--grid-size', gridSize);
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const gridElement = document.createElement('div');
      gridElement.classList.add('grid-element');
      grid.appendChild(gridElement);
    }
  }
  activateBlackColor();
}

function getNewGridSize() {
  let gridSize = Number(prompt('Choose a new grid size (max: 100)'));
  if (gridSize === 0) {
    gridSize = 16;
  } else if (gridSize > 100) {
    gridSize = 100;
  }
  clearGrid();
  createGrid(gridSize);
}

function activateBlackColor() {
  rgbBtn.classList.remove('active');
  eraserBtn.classList.remove('active');
  blackClrBtn.classList.add('active');
  changeColor();
}

function activateRgb() {
  blackClrBtn.classList.remove('active');
  eraserBtn.classList.remove('active');
  rgbBtn.classList.add('active');
  changeColor();
}

function activateEraser() {
  blackClrBtn.classList.remove('active');
  rgbBtn.classList.remove('active');
  eraserBtn.classList.add('active');
  let grid = document.querySelectorAll('.grid-element');
  grid.forEach((element) =>
    element.addEventListener('mouseover', () => {
      element.style.backgroundColor = '#f8fafc';
    })
  );
}

function changeColor() {
  // const activeBtn = document.querySelector('.active');
  let grid = document.querySelectorAll('.grid-element');
  if (rgbBtn.classList.contains('active')) {
    grid.forEach((element) =>
      element.addEventListener('mouseover', () => {
        element.style.backgroundColor = `rgb(${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )} )`;
      })
    );
  } else {
    grid.forEach((element) =>
      element.addEventListener('mouseover', () => {
        element.style.backgroundColor = 'black';
      })
    );
  }
}

function clearGrid() {
  let grid = document.querySelectorAll('.grid-element');
  grid.forEach((element) => (element.style.backgroundColor = '#f8fafc'));
}

createGrid(gridSize);
activateBlackColor();
