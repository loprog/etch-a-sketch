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

// Adds hover effect for boxes
allDivs.forEach((div) => {
    div.addEventListener('mouseover', () => div.classList.add('addColor'));
}) 

// Remove color for boxes on clear button
const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', clearAll);

function clearAll() {
    allDivs.forEach((div) => {
        div.classList.remove('addColor');
    })
}