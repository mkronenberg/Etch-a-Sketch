// get elements
const header = document.querySelector('#header');
const mainGrid = document.querySelector('#main-grid');
const fragment = new DocumentFragment();
const redrawBtn = document.querySelector('#redraw');

// slider display
const pixelValue = document.querySelector("#pixel-value");
const input = document.querySelector("#tick");
pixelValue.textContent = input.value;
input.addEventListener("input", (event) => {
      pixelValue.textContent = event.target.value;
});


const drawGrid = () => {

      const gridPixelSize = parseInt(input.value);
      mainGrid.style.setProperty("grid-template-columns", `repeat(auto-fill, ${gridPixelSize}px)`);
      mainGrid.innerHTML = ``;

      const calcGrid = () => {
            const verticalSquares = Math.floor((window.innerHeight-header.offsetHeight) / gridPixelSize);
            const horizontalSquares = Math.floor(window.innerWidth / gridPixelSize);
            const totalSquares = verticalSquares*horizontalSquares;
            return totalSquares;
      };

      const squaresNeeded = calcGrid();

      for (let index = 0; index < squaresNeeded; index++) {
            const gridSquare = document.createElement('div');
            gridSquare.innerHTML = `<div class="grid-box" style="width: ${gridPixelSize}px; height: ${gridPixelSize}px;"></div>`;
            fragment.appendChild(gridSquare);
      }

      mainGrid.appendChild(fragment);

      const gridBox = document.querySelectorAll('.grid-box');

      gridBox.forEach((box) => {
            box.addEventListener("mouseenter", () => {
                  box.classList.add("activated");
            });
      });

}

drawGrid();

window.addEventListener("resize", () => {drawGrid()});
redraw.addEventListener("click", () => {drawGrid()});

