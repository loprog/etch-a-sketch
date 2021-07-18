// Selects the Container
const container = document.querySelector('#container');

// Create Grid
let box;
let boxLength;
let boxMargin;
let clickCount = 0;

function createGrid(boxNumber) {
    for (let i = 0; i < (boxNumber * boxNumber); i++) {
        box = document.createElement('div'); // Create Boxes
        box.classList.add('box'); // Add box styling
        boxLength = parseFloat((496/boxNumber) + 1) + 'px'; // Full Length
        boxMargin = parseFloat((496/boxNumber)) + 'px'; // Length minus 1
        box.style.width = boxLength;
        box.style.height = boxLength;
        container.appendChild(box); // Add box to container
        
        // Change Background on Click
        box.addEventListener('click', changeBackground);
    }

        container.style.gridTemplateRows = 'repeat('+boxNumber+','+boxMargin+')';
        container.style.gridTemplateColumns = 'repeat('+boxNumber+','+boxMargin+')';

        // Start or Stop Change Background on Click
        container.addEventListener('click', addColor);
}

// Create Initial Grid
createGrid(16);

// Select all boxes
const allBox = document.querySelectorAll('.box');

// Change Color on Hover/Click function
function changeBackground() {
    this.style.backgroundColor = 'green';
}

// Toggle change background color on mouseover 
function addColor() {
    allBox.forEach((box) => {
        box.addEventListener('mouseover', changeBackground);
    });

    ++clickCount;

    if (clickCount % 2 == 0) {
        allBox.forEach((box) => {
            box.removeEventListener('mouseover', changeBackground);
        });
    }
}

// Clear Button
const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', clearAll);
function clearAll() {
    allBox.forEach((box) => {
        box.style.backgroundColor = '';
        box.removeEventListener('mouseover', changeBackground); 
        clickCount = 0;
    })
}

// Toggle Border
const toggleBorderBtn = document.querySelector('#toggleBorder');
function toggleBorder() {
    allBox.forEach((box) => {
        box.classList.toggle('borderOff')
    });

    toggleBorderBtn.classList.toggle('activeBtn');

    if (toggleBorderBtn.textContent.includes('On')) {
        toggleBorderBtn.textContent = 'Borders Off';
    } else {
        toggleBorderBtn.textContent = 'Borders On';
    }
}
 
const rowNumber = document.querySelector('#rowNumber');
const applyRow = document.querySelector('#applyRow')
applyRow.addEventListener('click', gridSize);

function gridSize() {
    console.log(rowNumber.value);
    container.textContent = '';
    createGrid(rowNumber.value);
}