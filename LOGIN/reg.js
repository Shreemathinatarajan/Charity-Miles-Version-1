const form = document.getElementById('form');
const username= document.getElementById('username');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const password =document.getElementById('password');
const password2 = document.getElementById('password2');

function validateCredentials(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const mobileValue = mobile.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    if(usernameValue,emailValue,mobileValue,passwordValue,password2Value==setSuccessFor){
        alert("Register Successfully");
    }
    else{
        alert("Enter a valid details");
    }
}