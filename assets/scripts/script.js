var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(20, 40, 50, 50); //defines init position of rect as well as dimension
ctx.fillStyle = "#FF0000"; //defines the color of rect
ctx.fill(); // actually fills the rect with the defined color
ctx.closePath();