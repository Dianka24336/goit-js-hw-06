function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divBoxesRef = document.getElementById('boxes');


createBtn.addEventListener('click', () => {
  const inputAmount = document.querySelector('input').value;
  createBoxes(inputAmount);
});
destroyBtn.addEventListener('click', destroyBoxes);


function createBoxes(amount){
  for (let i = 0; i < amount; i +=1) {
    const divBox = document.createElement('div');
    const initialSize = 30;
    divBox.style.width = `${initialSize + i * 10}px`;
    divBox.style.height = `${initialSize + i * 10}px`;
    divBox.style.backgroundColor = getRandomHexColor();
    divBoxesRef.appendChild(divBox);
   
  }
};

function destroyBoxes(){
  divBoxesRef.innerHTML = '';
};

