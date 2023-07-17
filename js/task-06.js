const inputRef = document.getElementById('validation-input');

inputRef.addEventListener('blur', onBlurBorderColor);


function onBlurBorderColor(){
if(inputRef.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid')
    
} else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
}
};


