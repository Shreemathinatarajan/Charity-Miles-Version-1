var form = document.getElementById("form");
var email = document.getElementById("email");
var password = document.getElementById("password");
function validateCredentials(){
    emailValue = email.value.trim();
    passwordValue = password.value.trim();
    if(emailValue == "shreemathinatarajan29@gmail.com" && passwordValue == "12345678"){
        alert("Login Succesfully");
        window.open("http://127.0.0.1:5501/Homepage/homepage.html");
        return true;
    }
    else{
        alert("Invalid email id and password");
        return false;
    }
}