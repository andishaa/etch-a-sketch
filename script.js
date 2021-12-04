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
            e.currentTarget.style.backgroundColor = 'orange';
        });
    });
}

const resetBtn = document.querySelector('.resetBtn');

resetBtn.addEventListener('click', () => {
    gridNumber = Number(window.prompt('Select new grid style:', 16));
    
    if (gridNumber > 100) {
        alert('Sorry, choose number below 100')
        return;
    }

    let removeGrid = document.querySelectorAll('.grid-item')
    removeGrid.forEach((item) => {
        item.remove();
    });

    createNewGrid(gridNumber);

});