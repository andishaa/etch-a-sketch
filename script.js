function createDivs() {
    const gridContainer = document.querySelector('.grid-container');

    for (let i = 0; i < 32; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = 'grid-item';
        gridContainer.appendChild(newDiv);
    }
}
createDivs();