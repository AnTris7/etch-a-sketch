const containerGrid = document.getElementById("grid-container");

window.addEventListener("load", defaultGrid);

function defaultGrid() {
  buildGrid(16);
}

// creates grid

function buildGrid(size) {
  let gridCount = size * size;
  for (let i = 0; i < gridCount; i++) {
    const createDiv = document.createElement("div");
    containerGrid.style.gridTemplateColumns = `repeat(${size},1fr)`;
    containerGrid.style.gridTemplateRow = `repeat(${size},1fr)`;
    containerGrid.appendChild(createDiv).className = "inner-box";
  }
  // Coloring in grids

  let innerDivs = document.querySelectorAll(".inner-box"); //"div"

  innerDivs.forEach((innerDivs) =>
    innerDivs.addEventListener("mouseover", function () {
      this.style.backgroundColor = "black";
    })
  );

  const colorGridBlack = function () {
    innerDivs.forEach((innerDivs) =>
      innerDivs.addEventListener("mouseover", function () {
        this.style.backgroundColor = "black";
      })
    );
  };

  const colorGridRainbow = function () {
    innerDivs.forEach((innerDivs) =>
      innerDivs.addEventListener("mouseover", function () {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        this.style.backgroundColor = "#" + randomColor;
      })
    );
  };

  //  to erase filled grids
  const eraseGridColor = function () {
    innerDivs.forEach((innerDivs) =>
      innerDivs.addEventListener("mouseover", function () {
        this.style.backgroundColor = "white";
      })
    );
  };

  //buttons to set the color & erase

  const blackButton = document.querySelector(".black-btn");
  blackButton.addEventListener("click", colorGridBlack);

  const rainbowButton = document.querySelector(".rainbow-btn");
  rainbowButton.addEventListener("click", colorGridRainbow);

  const eraseButton = document.querySelector(".eraser-btn");
  eraseButton.addEventListener("click", eraseGridColor);

  // button to clear grid

  const clearButton = document.querySelector(".clear-btn");
  clearButton.addEventListener("click", function () {
    innerDivs.forEach(
      (innerDivs) => (innerDivs.style.backgroundColor = "#ffffff")
    );
  });
}

//slider function to resize grid

function resizeGrid() {
  let size = slider.value;
  let innerDivs = document.querySelectorAll(".inner-box");
  innerDivs.forEach((innerDivs) => innerDivs.remove());
  buildGrid(size);
}

const slider = document.getElementById("resizeGrid");
const output = document.getElementById("value");

output.innerHTML = slider.nodeValue;

slider.oninput = function () {
  output.innerHTML = this.value;
};

slider.addEventListener("mousemove", resizeGrid);
