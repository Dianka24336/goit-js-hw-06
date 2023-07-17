function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonRef = document.querySelector('.change-color');
const spanColorRef = document.querySelector('.color');


buttonRef.addEventListener('click', onChangeColorClick);

function onChangeColorClick(){
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor =  randomColor;
  spanColorRef.textContent = randomColor;
};