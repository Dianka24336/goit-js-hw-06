const inputRef = document.getElementById('font-size-control');
const spanRef = document.getElementById('text');

inputRef.addEventListener('input', onChangeFontCick);

function onChangeFontCick() {
    spanRef.style.fontSize = `${inputRef.value}px`; //inputRef.value +'px'
}