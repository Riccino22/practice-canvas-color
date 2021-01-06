var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


var cWidth = canvas.width;
var cHeight = canvas.height;

var colorA = getRandomNumber(0,300);
var colorB = getRandomNumber(0,300);
var colorC = getRandomNumber(0,300);

var velocityA = 1;
var velocityB = -1;
var velocityC = 1;

ctx.fillStyle = `rgb(${colorA},${colorB},${colorC})`;
ctx.fillRect(0,0,cWidth,cHeight);


function getRandomNumber(min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


function animateCanvas(){
    var color = function(){
    
    
    ctx.clearRect(0,0,cWidth,cHeight);
    ctx.fillStyle = `rgb(${colorA},${colorB},${colorC})`;
    ctx.fillRect(0,0,cWidth,cHeight);


    if (colorA > 300) {
        velocityA = -1;
        velocityB = 1;
        velocityC = -1;
    }
    else if (colorA < -100) {
        velocityA = 1;
        velocityB = -1;
        velocityC = 1;
    }

    colorA += velocityA;
    colorB += velocityB;
    colorC += velocityC;
}

    color();
    window.requestAnimationFrame(animateCanvas);
}

animateCanvas();