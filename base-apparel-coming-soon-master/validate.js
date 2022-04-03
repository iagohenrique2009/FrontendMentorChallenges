function validate(){
let email =document.getElementById("email").value;
let emailerr =document.getElementById("email");
let form = document.getElementById("form");
let valid = document.querySelector(".valid");
let error = document.querySelector(".error");


var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if (email.match(validRegex)){
    alert("Valid email, waith further news")
    console.log(email);
    valid.innerHTML = ""
    error.classList.remove("invalid")
    emailerr.style.borderColor = "grey"
}
else{
    valid.innerHTML= "Please provide a valid email";
    error.classList.add("invalid")
    emailerr.style.borderColor= "hsl(0, 93%, 68%)"
}


}