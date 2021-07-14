const container = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
    div = document.createElement('div');
    div.classList.add('box');
    container.appendChild(div);
}


