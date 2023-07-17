const inputRef = document.getElementById('name-input');
const nameLabelRef = document.getElementById('name-output');

inputRef.addEventListener('input', onInputChange);



function onInputChange(event){

    if(inputRef.value === ''){
        nameLabelRef.textContent = 'Anonymous';
    } else
    nameLabelRef.textContent = event.currentTarget.value;

}