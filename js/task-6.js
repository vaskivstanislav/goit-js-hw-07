function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input[type="number"]');
const btnCreate = document.querySelector('#controls button[data-create]');
const btnDestroy = document.querySelector('#controls button[data-destroy]');
const boxes = document.querySelector('#boxes');


btnCreate.addEventListener('click', () => {
  const amount = parseInt(input.value, 10);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; 
  }
});

btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  boxes.innerHTML = '';
 
  const elements = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    elements.push(div);
  }

  boxes.append(...elements);
}


function destroyBoxes() {
  boxes.innerHTML = '';
}
