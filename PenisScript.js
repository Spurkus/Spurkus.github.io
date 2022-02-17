let clouds = document.getElementById("clouds");
let sun = document.getElementById("sun");
let background = document.getElementById("background");
let header = document.querySelector("header");
let text = document.querySelector("text");


let pplength = document.getElementById("pp");
let inches = document.getElementById("inches");
let tube = document.getElementById("tube");
let head = document.getElementById("head");
let length = head.offsetTop
let newLength = length - 250

window.addEventListener("scroll", function(){
    let value = window.scrollY;
    if(value > 720) return inches.style.top = value -100 + 'px';
    sun.style.top = value * 1.25 + 'px';
    clouds.style.left = value * 0.25 + 'px';
    header.style.top = value + 'px';
    text.style.left = value * 2 + 'px';
}) 

function lerp (start, end, t) {
    return start * (1 - t) + end * t;
}

document.addEventListener("keyup", function(event) {
    if (event.key === ' ') {
        length = newLength;
        newLength = length + 200;
        pplength.setAttribute('style', `height:${length + 200}px;`);
    }
});

function moveHead(){
    length = lerp(length, newLength, 0.1)
    head.style.top = length + 'px';
    requestAnimationFrame(moveHead)
}

function movePP(){
    pp.style.height = length + 1600 + 'px';
    requestAnimationFrame(movePP)
}

function stretchTube(){
    tube.width = 300;
    tube.height = length + 150;
    requestAnimationFrame(stretchTube)
}

function PPInches(){
    inches.innerHTML = (length/100).toFixed(2) + " Inches!";
    requestAnimationFrame(PPInches)
}

movePP();
moveHead();
stretchTube();
PPInches();