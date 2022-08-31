const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let number = 0;
let number1 = 0;
let scale = 10;
let hue = 2;
let hue2 = 0;
let hue1 = 5;
let hue3 = 3;
let radius = scale * Math.sqrt(number);

function drawcircle(r, fill, stroke, lw, flag) {
    let angle = number * 0.2;
    
    let positionX = radius * Math.sin(angle) + canvas.width / 2;
    let positionY = radius * Math.cos(angle) + canvas.height / 2;

    ctx.fillStyle = fill;
    if(stroke) {
        ctx.strokeStyle = 'orange';
    }
    ctx.lineWidth = lw;
    ctx.beginPath();
    ctx.arc(positionX, positionY, r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    if(stroke) {
        ctx.stroke();
    }
    if(flag){
        number1++;
    } else {
        number++;
    }
    
}


function drawflower() {
    let angle = number * 0.9;
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + canvas.width / 2;
    let positionY = radius * Math.cos(angle) + canvas.height / 2;

    ctx.fillStyle = 'hsl(' + hue + ', 100%, 30%)';
    ctx.strokeStyle = 'hsl(' + hue2 + ', 100%, 40%)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(positionX, positionY, 60, 0, Math.PI * 2);
    ctx.closePath();
    ctx.stroke();
    number++;
    hue++;
    hue2 += 3;
}


function drawshape(radius, inset, n, clr, lw) {
    ctx.fillStyle = clr;
    ctx.strokeStyle = 'white';
    ctx.lineWidth = lw;
    ctx.beginPath();
    ctx.save();
    ctx.translate(canvas.width/2, canvas.height/2);
    ctx.moveTo(0, 0 - radius);
    for(let i = 0; i < n; i++) {
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - (radius * inset));
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - radius);
    }
    ctx.restore();
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    if(clr == 'hsl(73, 93%, 59%)') {
        hue3 += 50;
    }
    else if(clr == 'hsl(' + hue + ', 100%, 30%)') {
        hue += 30;
    }
    
    
}

function animate() {
    drawflower();
    drawshape(50, .7, 30, 'hsl(' + hue + ', 100%, 30%)', 2);
    drawshape(20, .7, 10, 'hsl(' + hue + ', 100%, 30%)', 2);
    drawcircle(10, 'orange', false, 2, true);
    if (number > 100) return;
    requestAnimationFrame(animate);
}
drawcircle(290, 'brown', true, 9, true);
drawshape(293, .9, 10, 'hsl(49, 72%, 50%)', 5)
drawcircle(270, 'hsl(126, 72%, 27%)', false, 2, true);
drawcircle(canvas.height / 4, 'white', true, 30, false);
drawshape(210, .9, 8, 'hsl(280, 100%, 25%)', 5);
drawshape(210, .6, 20, 'hsl(73, 93%, 59%)', 2);
drawshape(240, .3, 40, 'hsl(' + hue + ', 100%, 30%)', 2);  
animate();

