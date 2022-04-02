let submit = document.querySelector(".cardfront");
let appear = document.querySelector(".cardback");
let numrating = document.querySelector(".cardback-rating");
let btns = document.querySelectorAll(".button")


document.querySelector(".submit").addEventListener("click", function(){
    
    submit.classList.toggle("hidden");
    appear.classList.toggle("apprating");

});

for (let i = 0; i<btns.length; i++){
    btns[i].addEventListener("click", function(){
        num = this.innerHTML
        numrating.innerHTML= "You selected "+num+" out of 5";
    })
}

