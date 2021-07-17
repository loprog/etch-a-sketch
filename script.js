const container = document.querySelector('#container');

// Create the grid
for (let i = 0; i < 256; i++) {
    div = document.createElement('div');
    div.classList.add('box');
    container.appendChild(div);
}

// Selects individual boxes
const allDivs = document.querySelectorAll('.box');
console.log(allDivs);

// Add color effect for boxes on click
allDivs.forEach((div) => {
    div.addEventListener('click', addColorClass);
}) 

// Add color effect for boxes on hover
function addColor() {
    allDivs.forEach((div) => {
        div.addEventListener('mouseover', addColorClass);
    });
}

// Add Class CSS addColor
function addColorClass() {
    this.classList.add('addColor');
}

container.addEventListener('click', addColor, {capture: true});

// Remove color for boxes on clear button
const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', clearAll);

function clearAll() {
    allDivs.forEach((div) => {
        div.classList.remove('addColor');
    })
}

// CLEAR BUTTON DOESNT MAKE IT START FROM CLICK
// CLick again to stop the color