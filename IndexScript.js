let clouds = document.getElementById("clouds");
let sun = document.getElementById("sun");
let background = document.getElementById("background");
let header = document.querySelector("header");

window.addEventListener("scroll", function(){
    let value = window.scrollY;
    if(value > 800) return
    sun.style.top = value * 1.25 + 'px';
    clouds.style.left = value * 0.25 + 'px';
    header.style.top = value + 'px';
}) 