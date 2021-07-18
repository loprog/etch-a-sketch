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
        box.addEventListener('click', () => {
            ++clickCount;
        })
    }
        container.style.gridTemplateRows = 'repeat('+boxNumber+','+boxMargin+')';
        container.style.gridTemplateColumns = 'repeat('+boxNumber+','+boxMargin+')';

        // Start or Stop Change Background on Click
        container.addEventListener('click', addColor);
}

// Create Initial Grid
createGrid(16);

// Change Color on Hover/Click function
function changeBackground() {
    this.style.backgroundColor = 'green';
}

// Toggle change background color on mouseover 
function addColor() {
    const allBox = document.querySelectorAll('.box');

    allBox.forEach((box) => {
        box.addEventListener('mouseover', changeBackground);
    });

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
    const allBox = document.querySelectorAll('.box');
    allBox.forEach((box) => {
        box.style.backgroundColor = '';
        box.removeEventListener('mouseover', changeBackground); 
        clickCount = 0;
    })
}

// Toggle Border
const toggleBorderBtn = document.querySelector('#toggleBorder');
function toggleBorder() {
    const allBox = document.querySelectorAll('.box');

    toggleBorderBtn.classList.toggle('activeBtn');

    if (toggleBorderBtn.textContent.includes('On')) {
        toggleBorderBtn.textContent = 'Borders Off';
        allBox.forEach((box) => {
            box.classList.add('borderOff')
        });
    } else {
        toggleBorderBtn.textContent = 'Borders On';
        allBox.forEach((box) => {
            box.classList.remove('borderOff')
        });
    }
}
 
const rowNumber = document.querySelector('#rowNumber');
const applyRow = document.querySelector('#applyRow')
applyRow.addEventListener('click', gridSize);

function gridSize() {
    container.textContent = '';
    if (rowNumber.value <= 0) {
        createGrid(1);
    } else if (rowNumber.value > 100) {
    createGrid(100);
    } else {
        createGrid(rowNumber.value);
    }

    const allBox = document.querySelectorAll('.box');
    if (toggleBorderBtn.textContent.includes('On')) {
        allBox.forEach((box) => {
            box.classList.remove('borderOff')
        });
    } else {
        allBox.forEach((box) => {
            box.classList.add('borderOff')
        });
    }
}