const form = document.getElementById('form');
const email = document.getElementById('email');
const password= document.getElementById('password');

email.addEventListener('input',validateEmail);
password.addEventListener('input',validatePassword);

function validateEmail(){
    var emailValue = email.value.trim();
    if(emailValue === ''){
        setErrorFor(email, 'Email id cannot be blank');
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email, 'Enter a valid email');
    }
    else{
        setSuccessFor(email);
    }
}

function validatePassword(){
    var passwordValue = password.value.trim();
    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank');
    }
    else if (passwordValue.length<8) {
        setErrorFor(password, 'Enter atleast 8 character');
    }
    else{
        setSuccessFor(password);
    }
}

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});


function checkInputs() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
   
    if(emailValue,passwordValue === ''){
        alert("Enter your details");
    }
    else if(emailValue=="shreemathinatarajan29@gmail.com" && passwordValue=="12345678"){
        alert("Login Successfully");
        window.open("http://127.0.0.1:5501/HOMEPAGE/homepage.html")
    }
    else{
        alert("Incorrect username or password");
    }

    if (emailValue === '') {
        setErrorFor(email, 'Enter your email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email not valid');
    } else {
        setSuccessFor(email);
    }
    
    if (passwordValue === '') {
        setErrorFor(password, 'Enter your password');
    } else if (passwordValue.length<8) {
        setErrorFor(password, 'Enter atleast 8 character');
    }else {
        setSuccessFor(password);
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email)
{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}