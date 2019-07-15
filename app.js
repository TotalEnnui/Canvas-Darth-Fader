console.log("app js ");

function Draw(){
    var canvas = document.getElementById("appCanvas");

    console.log(canvas);
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2);
    ctx.fillStyle='blue';
    ctx.fill();
    ctx.stroke();
}