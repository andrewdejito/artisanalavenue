let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
menu.onclick = () => {
    navbar.classList.toggle('active');
}
 
window.onscroll = () => {
    navbar.classList.remove('active');
}

var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");

function login() {
    x.style.left = '4px';
    y.style.right = '-5020px';
    a.className += "white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}
function register() {
    x.style.left = '-5010px';
    y.style.right = '5px';
    a.className = "btn";
    b.className += "white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}

var mainImg = document.getElementById("main-img");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    mainImg.src = smallImg[3].src;
}

