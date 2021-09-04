var canvas,
    ctx;

canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx = canvas.getContext("2d");


const MAP = [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0],
];



function init() {
    for (var col = 0; col <= MAP[0].length; col++) {
        for (var row = 0; row <= MAP.length; row++) {
            var xc = canvas.width / 40;
            var xy = canvas.height / 40;
            var w = canvas.width / 5;
            var h = canvas.height / 5;
            var x = row * w ;
            var y = col * w;
            if(MAP[col][row] === 1){
                ctx.fillStyle = "green";
                ctx.fillRect(x, y,  w,  w);
            }
        }
    }
}

window.onload = init;