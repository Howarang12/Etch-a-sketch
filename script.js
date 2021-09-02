
let pixel = 16;
const container = document.querySelector("#container");
const body =  document.querySelector ("body");

//set new grid rows and columns
function getGrid(newPix){
   pixel = prompt("How many squares per side: \nNote: must be under 100 ", newPix)
    
}


// create div for button bar
const menu = document.createElement ("div");
menu.classList.add("menu");
body.insertBefore(menu,container);

// button to draw black
const blackBtn = document.createElement ("button");
menu.appendChild(blackBtn);
blackBtn.innerHTML = "Black";
blackBtn.addEventListener("click",()=>{draw()});

//button to draw RGB
const rgbBtn = document.createElement ("button");
menu.appendChild(rgbBtn);
rgbBtn.innerHTML = "Rainbow";
rgbBtn.addEventListener("click",()=>{drawRainbow()});

// button to erase
const eraseBtn = document.createElement ("button");
menu.appendChild(eraseBtn);
eraseBtn.innerHTML = "Eraser";
eraseBtn.addEventListener("click",()=>{erase()});

// button to reset
const resetBtn = document.createElement ("button");
menu.appendChild(resetBtn);
resetBtn.innerHTML = "Reset";
resetBtn.addEventListener("click",()=>{reset()});

//append divs for the amount of squares, creating the grid
function makeGrid(pixel){
    for (i =0; i < (pixel**2); i++){
        let cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
    }
    container.style.gridTemplateColumns = `repeat(${pixel},1fr)`;
    container.style.gridTemplateRows = `repeat(${pixel},1fr)`;
}

//draw black
function draw(){
    var cells = document.querySelectorAll(".cell");
    cells.forEach(cells =>
        cells.addEventListener('mouseover',() => {
            cells.style.backgroundColor = "black";
        }
        )
        )
}

//draw RGB
function drawRainbow(){
    var cells = document.querySelectorAll(".cell");
    cells.forEach(cells =>
        cells.addEventListener('mouseover',() => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        cells.style.backgroundColor = `rgb(${r},${g},${b})`;
        }
        )
        )
}

//eraser
function erase(){
    var cells = document.querySelectorAll(".cell");
    cells.forEach(cells =>
        cells.addEventListener('mouseover',() => {
            cells.style.backgroundColor = "white";
        }
        )
        )
}

//reset screen
function reset(){
    var cells = document.querySelectorAll(".cell");
    cells.forEach(cells => cells.style.backgroundColor = "white");
    getGrid();
    while (pixel >100){
        getGrid();
    }
    makeGrid(pixel)
    draw();
}

makeGrid(pixel);