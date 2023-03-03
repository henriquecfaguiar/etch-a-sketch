const root = document.documentElement;

const grid = document.querySelector('.grid');
const buttons = document.querySelectorAll('.btn');
const clearBtn = document.querySelector('.clear-btn');
const rgbBtn = document.querySelector('.rgb-btn');
const eraserBtn = document.querySelector('.eraser-btn');
const blackClrBtn = document.querySelector('.black-color-btn');
const rangeSlider = document.getElementById('grid-size');

let isMouseDown = false;
document.body.onmousedown = () => (isMouseDown = true);
document.body.onmouseup = () => (isMouseDown = false);

blackClrBtn.addEventListener('click', activateBlackColor);
rgbBtn.addEventListener('click', activateRgb);
clearBtn.addEventListener('click', clearGrid);
eraserBtn.addEventListener('click', activateEraser);
rangeSlider.addEventListener('change', createGrid);

function createGrid() {
  removeGrid();
  let gridSize = rangeSlider.value;
  root.style.setProperty('--grid-size', gridSize);
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid-element');
    gridElement.addEventListener('mouseover', changeColor);
    gridElement.addEventListener('mousedown', changeColor);
    grid.appendChild(gridElement);
  }
  activateBlackColor();
}

function activateBlackColor() {
  rgbBtn.classList.remove('active');
  eraserBtn.classList.remove('active');
  blackClrBtn.classList.add('active');
}

function activateRgb() {
  blackClrBtn.classList.remove('active');
  eraserBtn.classList.remove('active');
  rgbBtn.classList.add('active');
}

function activateEraser() {
  blackClrBtn.classList.remove('active');
  rgbBtn.classList.remove('active');
  eraserBtn.classList.add('active');
}

function changeColor(event) {
  if (event.type === 'mouseover' && !isMouseDown) return;
  if (rgbBtn.classList.contains('active')) {
    event.target.style.backgroundColor = `rgb(${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )} )`;
  } else if (blackClrBtn.classList.contains('active')) {
    event.target.style.backgroundColor = 'black';
  } else {
    event.target.style.backgroundColor = '#f8fafc';
  }
}

function clearGrid() {
  let gridElems = document.querySelectorAll('.grid-element');
  gridElems.forEach((elem) => (elem.style.backgroundColor = '#f8fafc'));
}

function removeGrid() {
  let gridElems = document.querySelectorAll('.grid-element');
  gridElems.forEach((elem) => elem.remove());
}

createGrid();
