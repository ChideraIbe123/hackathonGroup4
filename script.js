<<<<<<< HEAD
=======
let BtnEl = document.getElementById("myBtn-1");

BtnEl.addEventListener("click", function() {
    console.log("Button Clicked");
    BtnEl.classList.remove("hidden");
})
>>>>>>> main
var sb1 = document.getElementById("subb1");
var sb2 = document.getElementById("subb2");
var sb3 = document.getElementById("subb3");
var sb4 = document.getElementById("subb4");
var ssb1 = document.getElementById("ssubb1");
var ssb2 = document.getElementById("ssubb2");
var ssb3 = document.getElementById("ssubb3");
var ssb4 =document.getElementById("ssubb4");
var ssb5 = document.getElementById("ssubb5");
var ssb6 = document.getElementById("ssubb6");
var ssb7 = document.getElementById("ssubb7");
var ssb8 = document.getElementById("ssubb8");
var ssb9 = document.getElementById("ssubb9");
var ssb10 =document.getElementById("ssubb10");
var ssb11 = document.getElementById("ssubb11");
var ssb12 = document.getElementById("ssubb12");
var mb1 = document.getElementById("mainb1");
var mb2 = document.getElementById("mainb2");
sb1.style.display = "none";
sb2.style.display = "none";
sb3.style.display = "none";
sb4.style.display = "none";
ssb1.style.display = "none";
ssb2.style.display = "none";
ssb3.style.display = "none";
ssb4.style.display = "none";
ssb5.style.display = "none";
ssb6.style.display = "none";
ssb7.style.display = "none";
ssb8.style.display = "none";
ssb9.style.display = "none";
ssb10.style.display = "none";
ssb11.style.display = "none";
ssb12.style.display = "none";


function showbutton(){

        sb1.style.display = "block";
  
        sb2.style.display = "block";

    mb1.style.display = "none";
    mb2.style.display = "none";
    
}

function showbutton2(){
    sb3.style.display = "block";
  
    sb4.style.display = "block";

mb1.style.display = "none";
mb2.style.display = "none";
}

function showbutton3(){
    sb1.style.display = "none";
    sb2.style.display = "none";

    ssb1.style.display = "block";
    ssb2.style.display = "block";
    ssb3.style.display = "block";
}

function showbutton4(){
    sb1.style.display = "none";
    sb2.style.display = "none";

    ssb7.style.display = "block";
    ssb8.style.display = "block";
    ssb9.style.display = "block";
}

function showbutton5(){
    sb3.style.display = "none";
    sb4.style.display = "none";

    ssb4.style.display = "block";
    ssb5.style.display = "block";
    ssb6.style.display = "block";
}

function showbutton6(){
    sb3.style.display = "none";
    sb4.style.display = "none";

    ssb10.style.display = "block";
    ssb11.style.display = "block";
    ssb12.style.display = "block";
}