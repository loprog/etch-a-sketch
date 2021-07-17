const container = document.querySelector('#container');

// Create the grid
for (let i = 0; i < 256; i++) {
    div = document.createElement('div');
    div.classList.add('box');
    container.appendChild(div);
}

const allDivs = document.querySelectorAll('.box');

function changeBackground() {
    this.style.backgroundColor = 'green';
}

// Change background on click
allDivs.forEach((div) => {
    div.addEventListener('click', changeBackground);
}) 

// Toggle change background color on mouseover 
let clickCount = 0;
container.addEventListener('click', addColor);
function addColor() {
    allDivs.forEach((div) => {
        div.addEventListener('mouseover', changeBackground);
    });

    ++clickCount;

    if (clickCount % 2 == 0) {
        allDivs.forEach((div) => {
            div.removeEventListener('mouseover', changeBackground);
        });
    }
}

// Clear Button
const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', clearAll);

function clearAll() {
    allDivs.forEach((div) => {
        div.style.backgroundColor = '';
        div.removeEventListener('mouseover', changeBackground); 
        clickCount = 0;
    })
}

