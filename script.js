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

const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach((item) => {
    item.addEventListener('mouseenter', (e) => {
        e.currentTarget.style.backgroundColor = 'orange';
    });
});
// for(let i = 0; i < gridItems.length; i++) {
//     gridItems[i].addEventListener('mouseenter', function() {
//         gridItems[i].style.backgroundColor = 'orange';
//     });
// }