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
                gridRow.style.background = "black";
            });
            gridCol.appendChild(gridRow);
        }
        gridContainer.appendChild(gridCol);
    }
}
