function valid(){

//email var//
 let email = document.getElementById("email").value;
 let emailimg = document.getElementById("email");
 let emailerr = document.getElementById("emailem");
//email var//

//email validation//
 let valida = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

 if (email.match(valida)){
    
    emailerr.innerHTML="";
    emailimg.classList.remove("imgerror");
 }
else{
    emailerr.innerHTML= "Looks like this is not an email";
    emailimg.classList.add("imgerror");
}
//email validation//

//name var//
let name = document.getElementById("name").value;
let namemsg = document.getElementById("namemsg");
let nameimg = document.getElementById("name");
//name var//

//name validation//
if(name !== ""){
    namemsg.innerHTML = "";
    nameimg.classList.remove("imgerror");
}
else{
 
    namemsg.innerHTML="First Name cannot be empty";
    nameimg.classList.add("imgerror");
}
//name validation//

//lname var//

let lname =document.getElementById("lname").value;
let lnamemsg = document.getElementById("lnamemsg");
let lnameimg = document.getElementById("lname");
//lname var//

//lname validation//
if (lname !== ""){
    lnamemsg.innerHTML= "";
    lnameimg.classList.remove("imgerror");
}
else{
    lnamemsg.innerHTML = "Last Name cannot be empty";
    lnameimg.classList.add("imgerror");
}
//lname validation//

//password var//

let password = document.getElementById("password").value;
let passwordmsg = document.getElementById("pswmsg");
let passwordimg = document.getElementById("password");

if (password !== ""){
    passwordmsg.innerHTML= "";
    passwordimg.classList.remove("imgerror");
}
else{
    passwordmsg.innerHTML = "Password cannot be empty";
    passwordimg.classList.add("imgerror");
}



}
