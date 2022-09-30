const container = document.querySelector(".container");

function createGrid() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const grid = document.createElement("div");
      grid.classList.add("grid");
      container.appendChild(grid);
    };
  };
};

function addHover() {
  const grid = document.querySelectorAll(".grid");
  grid.forEach(element => {
    element.addEventListener("mouseover", (element) => { console.log(element) });
  });
};

createGrid();