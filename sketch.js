/*
Create a webpage with a 16x16 grid of square divs.
Create the divs using JavaScript. Don’t try to create them by hand by copying and 
pasting them in your HTML file!
It’s best to put your grid squares inside a “container” div. This div can be written in 
your HTML file.
Use Flexbox to make the divs appear as a grid (versus just one on each line). 
Despite the name, do not be tempted to research or use CSS Grid, as it will be taught in 
a later lesson after the foundations path. This project is an opportunity specifically 
to practice Flexbox!
*/

const GRID_SIZE = 16;
function makeGrid(size) {
    for (let i=0;i<size*size;i++){
        const container = document.querySelector(".container");
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.style.width = `calc(100%/${size})`;
        container.appendChild(tile);
    }
}

function deleteGrid() {
    const tile = document.querySelectorAll(".tile");
    tile.forEach(div => div.remove());

}

makeGrid(GRID_SIZE);

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let newGridSize = prompt("How big do you want the grid?");
    if (newGridSize > 100) {
        alert("Entry must be less than or equal to 100.");
    }
    else {
    deleteGrid();
    makeGrid(newGridSize);
    }
})
