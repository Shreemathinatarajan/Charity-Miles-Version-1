var form = document.getElementById("form");
var email = document.getElementById("email");
var password = document.getElementById("password");

email.addEventListener('input',validateEmail);
password.addEventListener('input',validatePassword);

function validateEmail(){
    var emailValue = email.value.trim();
    if(emailValue === ''){
        setError(email, 'Email id cannot be blank');
    }
    else if(!isEmail(emailValue)){
        setError(email, 'Enter a valid email');
    }
    else{
        setSuccess(email);
    }    
}

function validatePassword(){
    var passwordValue = password.value.trim();
    if(passwordValue === ''){
        setError(password, 'Password cannot be blank');
    }
    else if(passwordValue.length != 8){
        setError(password, 'Password length must be 8 digits');
    }
    else{
        setSuccess(password);
    }
}

function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email)
{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

