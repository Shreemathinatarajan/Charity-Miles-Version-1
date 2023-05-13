const form = document.getElementById('form');
const username= document.getElementById('username');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const password =document.getElementById('password');
const password2 = document.getElementById('password2');

/*Client side Validation*/

username.addEventListener('input',validateUsername);
email.addEventListener('input',validateEmail);
mobile.addEventListener('input',validateMobile);
password.addEventListener('input',validatePassword);
password2.addEventListener('input',validatePassword2);

function validateUsername(){
    var usernameValue = username.value.trim();
    if(usernameValue.length < 3){
        setErrorFor(username, 'Username should be minimum 3 charcters')
    }
    else if(!isName(usernameValue)){
        setErrorFor(username, 'Enter a valid Name');
    }
    else{
        setSuccessFor(username);
    }
}
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
function validateMobile(){
    var mobileValue = mobile.value.trim();
    if(mobileValue === ''){
        setErrorFor(mobile, 'Phone number cannot be blank');
    }
    else if(!isMobile(mobileValue)){
        setErrorFor(mobile, 'Enter a valid phone number');
    }
    else{
        setSuccessFor(mobile);
    }
}
function validatePassword(){
    var passwordValue = password.value.trim();
    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank');
    }
    else if (!isPassword(passwordValue)) {
        setErrorFor(password, 'atleast one number, one uppercase, lowercase letter, and atleast 8 character');
    }
    
    else{
        setSuccessFor(password);
    }
}

function validatePassword2(){
    var passwordValue = password.value.trim();
    var password2Value = password2.value.trim();
    if(password2Value === ''){
        setErrorFor(password2, 'Confirm password cannot be blank');
    }
    else if(passwordValue !== password2Value)
    {
        setErrorFor(password2, 'Password does not match ')
    }
    else{
        setSuccessFor(password2);
    }
}




/*Serverside validation*/

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const mobileValue = mobile.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    

    if (usernameValue === '') {
        setErrorFor(username, 'Please enter your name');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Please enter your email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email not valid');
    } else {
        setSuccessFor(email);
    }

    if(mobileValue === ''){
        setErrorFor(mobile, 'Phone number cannot be blank');
    }
    else if(!isPhone(mobileValue)){
        setErrorFor(mobile, 'Enter a valid phone number');
    }
    else{
        setSuccessFor(mobile);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Please enter password');
    } else if (!isPassword(passwordValue)) {
        setErrorFor(password, 'atleast one number, one uppercase, lowercase letter, and atleast 8 character');
    }else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Please re-enter password');
    }else if(passwordValue===password2Value){
        setSuccessFor(password2)
    }else if (!isConfirm(password2Value)) {
        setErrorFor(password2, 'Invalid password');
    }else {
        setErrorFor(password2, 'Passwords does not match');
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
function isPassword(password){  
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
}
function isMobile(mobile){
    return /^[6-9]\d{9}$/.test(mobile);
}
function isName(username){
return /^[A-Za-z\s]+$/.test(username);
}