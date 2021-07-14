const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    div = document.createElement('div');
    div.classList.add('box');
    container.appendChild(div);
}

const allDivs = document.querySelectorAll('.box');
console.log(allDivs);

allDivs.forEach((div) => {
    div.addEventListener('mouseover', () => div.classList.add('addColor'));
}) 