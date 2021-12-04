let gridNumber = 16;

createNewGrid(gridNumber);

function createNewGrid() {
    const gridContainer = document.querySelector('.grid-container');

    for (let i = 0; i < gridNumber * gridNumber; i++) {
        let gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridContainer.appendChild(gridItem);
    }

    gridContainer.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;

    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => {
        item.addEventListener('mouseenter', (e) => {
            let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            e.currentTarget.style.backgroundColor = randomColor;
        });
    });
}

const resetBtn = document.querySelector('.resetBtn');

resetBtn.addEventListener('click', () => {
    gridNumber = window.prompt('Select new grid style (only numbers below 100):', 16);
    
    if (gridNumber > 100) {
        alert('Sorry, choose number below 100')
        return;
    } else if (gridNumber === null) {
        return;
    }

    let removeGrid = document.querySelectorAll('.grid-item')
    removeGrid.forEach((item) => {
        item.remove();
    });

    createNewGrid(gridNumber);

});