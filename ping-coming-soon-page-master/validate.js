function validate(){

    let email = document.getElementById("email").value;
    let emailerr = document.getElementById("error");
    let emailbd = document.getElementById("email");
    let btn = document.querySelector(".button");

    let validatation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validatation)){
        
        alert("Sucessful subscription await further news :)");
        emailerr.innerHTML= "";
        emailbd.style.borderColor = "hsl(0, 0%, 59%)";
        if(window.innerWidth <501){
            btn.style.marginTop = "auto";
        }
    }
    else{
        if(window.innerWidth < 501){
            btn.style.marginTop = "2rem";
        }
        emailerr.innerHTML= "Please provide a valid email";
        emailbd.style.borderColor = "hsl(354, 100%, 66%)";
    }
}