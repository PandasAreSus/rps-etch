const container = document.querySelector("#container");

let numRowsCols;

const chooseButton = document.createElement("button");
chooseButton.classList.add("choose-button");
chooseButton.textContent = "Press to select number of rows and columns (n by n)"
chooseButton.addEventListener("click", () => {
    numRowsCols = prompt("Enter a number: (2 - 128)");
    gridContainer.innerHTML = '';
    createGrid(numRowsCols);
});
container.appendChild(chooseButton);

const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
container.appendChild(gridContainer);

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const gridCol = document.createElement("div");
        gridCol.classList.add("grid-col");
        for (let j = 0; j < gridSize; j++) {
            const gridRow = document.createElement("div");
            gridRow.classList.add("grid-row");
            gridRow.style.width = (960 / gridSize) + "px";
            gridRow.style.height = (960 / gridSize) + "px";
            gridRow.addEventListener("mouseover", () => {
                gridRow.style.background = getRandomRGB();
            });
            gridCol.appendChild(gridRow);
        }
        gridContainer.appendChild(gridCol);
    }
}

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function getRandomHSL() {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 40) + 10; // Saturation between 30-70
    const l = Math.floor(Math.random() * 20) + 40; // Lightness between 70-90
    return `hsl(${h}, ${s}%, ${l}%)`;
}