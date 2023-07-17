const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(ev){
    ev.preventDefault();

    const email = form.elements.email.value;
    const password = form.elements.password.value;


    if(email==='' || password ===''){
        alert('Заповніть всі поля!');
        return;
    }

    const DataFromForm = {
        email: email,
        password: password,
    }

    console.log(DataFromForm);

    form.reset();

}
