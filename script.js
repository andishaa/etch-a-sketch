const ColorModes = {BLACK : 'black', RANDOM: 'randomColor', ERASE: 'erase'};
const maxGridSize = 100;

let shouldDraw = false;
let setGlobalListeners = false;
let colorMode = ColorModes.BLACK;

function init() {
    let defaultGridSize = 16;

    initGrid(defaultGridSize);
    initMenu();
}

init();

function initMenu() {
    const resetBtn = document.querySelector('.resetBtn');

    resetBtn.addEventListener('click', () => {

        const defaultOption = 16;
        let gridSize = window.prompt(`Select new grid style (only numbers below ${maxGridSize}):`, defaultOption);

        if (gridSize > maxGridSize) {
            alert(`Sorry, choose number below ${maxGridSize}`)
            return;
        } else if (gridSize === null) {
            return;
        }

        initGrid(gridSize);
    });

    const randomColorBtn = document.querySelector('.randomColorBtn');
    randomColorBtn.addEventListener('click', () => {
        colorMode = ColorModes.RANDOM;
        randomColorBtn.style.backgroundColor = 'orange';
        blackColorBtn.style.backgroundColor = null;
        eraseBtn.style.backgroundColor = null;

    });

    const blackColorBtn = document.querySelector('.blackColorBtn');
    blackColorBtn.addEventListener('click', () => {
        colorMode = ColorModes.BLACK;
        blackColorBtn.style.backgroundColor = 'orange';
        eraseBtn.style.backgroundColor = null;
        randomColorBtn.style.backgroundColor = null;

    });

    const eraseBtn = document.querySelector('.eraseBtn');
    eraseBtn.addEventListener('click', () => {
        colorMode = ColorModes.ERASE;
        eraseBtn.style.backgroundColor = 'orange';
        blackColorBtn.style.backgroundColor = null;
        randomColorBtn.style.backgroundColor = null;

    });
}

function initGrid(gridSize) {
    resetDefaults();

    const gridContainer = document.querySelector('.grid-container');
    gridContainer.innerHTML = "";

    for (let i = 0; i < gridSize * gridSize; i++) {
        let gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridContainer.appendChild(gridItem);
    }

    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    const gridStatus = document.querySelector('.gridStatus');
    gridStatus.textContent = `Chosen grid: ${gridSize} x ${gridSize}`;

    setUpDrawingEngin();
}

function resetDefaults() {
    colorMode = ColorModes.BLACK;

    const randomColorBtn = document.querySelector('.randomColorBtn');
    const blackColorBtn = document.querySelector('.blackColorBtn');
    const eraseBtn = document.querySelector('.eraseBtn');

    blackColorBtn.style.backgroundColor = 'orange';
    randomColorBtn.style.backgroundColor = null;
    eraseBtn.style.backgroundColor = null;
}

function setUpDrawingEngin() {
    if (!setGlobalListeners) {
        const gridContainer = document.querySelector('.grid-container');
        gridContainer.addEventListener('mousedown', () => {
            shouldDraw = true;
        });
        const body = document.querySelector('body');
        body.addEventListener('mouseup', () => {
            shouldDraw = false;
        });
        setGlobalListeners = true;
    }

    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => {
        item.addEventListener('mouseenter', (e) => {
            if (!shouldDraw) {
                return;
            }

            if (colorMode === ColorModes.BLACK) {

                const blackPencilColor = 'black';
                // reset opacity in case when we draw over other colors
                if (e.currentTarget.style.backgroundColor !== blackPencilColor) {
                    e.currentTarget.style.opacity = 0;
                }

                e.currentTarget.style.backgroundColor = blackPencilColor;

                let opacityIncrement = 0.10;
                let currentOpacity = Number(e.currentTarget.style.opacity);
                let opacity = currentOpacity + opacityIncrement;

                e.currentTarget.style.opacity = opacity;
            } 
            
            if (colorMode === ColorModes.RANDOM) {
                let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                e.currentTarget.style.backgroundColor = randomColor;
                e.currentTarget.style.opacity = 1;
            } 
            
            if (colorMode === ColorModes.ERASE) {
                e.currentTarget.style.opacity = 1;
                e.currentTarget.style.backgroundColor = 'white';
            }
        });
    });
};