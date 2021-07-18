// Selects the Container
const container = document.querySelector('#container');

const gridSize = document.querySelector('#gridSize');

let gridSizeValue = gridSize.value;
console.log(gridSizeValue)
let gridSizeValueSq = gridSizeValue * gridSizeValue;
let boxLength;
let boxHeight;
let div;

// Create the grid
for (let i = 0; i < gridSizeValueSq; i++) {
    div = document.createElement('div');
    div.classList.add('box');
    boxLength = parseFloat(496/gridSizeValue) + 'px';
    boxHeight = parseFloat((496/gridSizeValue) + 1) + 'px';
    div.style.width = boxHeight;
    div.style.height = boxHeight;
    container.appendChild(div);
    container.style.gridTemplateRows = 'repeat('+gridSizeValue+','+boxLength+')';
    container.style.gridTemplateColumns = 'repeat('+gridSizeValue+','+boxLength+')';
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

const toggleBorderBtn = document.querySelector('#toggleBorder');
function toggleBorder() {
    allDivs.forEach((div) => {
        div.classList.toggle('borderOff')
    });

    toggleBorderBtn.classList.toggle('activeBtn');

    if (toggleBorderBtn.textContent.includes('On')) {
        toggleBorderBtn.textContent = 'Borders Off';
    } else {
        toggleBorderBtn.textContent = 'Borders On';
    }
}