const containerGrid = document.getElementById("grid-container");
// const makeGrid = function () {
let gridCount = 256;
for (let i = 0; i < gridCount; i++) {
  const createDiv = document.createElement("div");
  containerGrid.appendChild(createDiv).className = "inner-box";
}

const innerDivs = document.querySelectorAll("div");
innerDivs.forEach((innerDivs) =>
  innerDivs.addEventListener("mouseover", color)
);

function color() {
  this.style.backgroundColor = "black";
}

// function colorBlack() {
//   const grid = document.getElementsByClassName("inner-box");

//   const len = grid.length;

//   for (i = 0; i < len; i++) {
//     grid[i].addEventListener("mouseover", function () {
//       grid[i].style.backgroundColor = "#0000";
//     });
//   }
// }

// makeGrid();

// colorBlack();

//const blackColor = document.querySelectorAll("inner-box");
