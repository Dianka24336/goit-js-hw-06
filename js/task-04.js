let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.getElementById('value');

function onDecrementBtnClick(){
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

function onIncrementBtnClick(){
    counterValue += 1;
    valueEl.textContent = counterValue;
};

decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);

