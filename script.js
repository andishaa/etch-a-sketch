let gridNumber = 16;

function createDivs() {
    const gridContainer = document.querySelector('.grid-container');

    for (let i = 0; i < gridNumber * gridNumber; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = 'grid-item';
        gridContainer.appendChild(newDiv);
        
    }
    gridContainer.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
}
createDivs();