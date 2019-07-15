var canvas = document.getElementById("appCanvas");

console.log(canvas);
var ctx = canvas.getContext('2d');

var color = "#00ff00";

var r = 255,
    b = 0,
    g = 0,
    temp = 0;

for(i = 0; i < 150; i++){
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2);
    temp = r - i;
    ctx.fillStyle = 'rgb(' + temp + ', ' + 0 + ', ' + ' 0 ' + ')';
    ctx.fill();
    ctx.stroke();
    for(count = 0; count < 1000; count++){}
}

ctx.beginPath();
ctx.arc(100, 200, 50, 0, Math.PI * 2);
ctx.fillStyle=color;
ctx.fill();
ctx.stroke();

