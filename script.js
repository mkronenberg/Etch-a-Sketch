// get elements
const mainGrid = document.querySelector('#main-grid');
const fragment = new DocumentFragment();

const calcGrid = () => {
      const verticalSquares = Math.floor(window.innerHeight / 16);
      const horizontalSquares = Math.floor(window.innerWidth / 16);
      const totalSquares = verticalSquares*horizontalSquares;
      return totalSquares;
};

const squaresNeeded = calcGrid();

for (let index = 0; index < squaresNeeded; index++) {
      const gridSquare = document.createElement('div');
      gridSquare.innerHTML = `<div class="grid-box"></div>`;
      fragment.appendChild(gridSquare);
}

mainGrid.appendChild(fragment);