'use strict';
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function PacMan () {
  this.game = true;
  var posX = 30;
  var posY = 20;

  this.radius = 10;
  this.fill = 'yellow';

  this.draw = function(){
    ctx.beginPath();
    ctx.arc(posX, posY, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.fill;
    ctx.fill();
    ctx.closePath();
  };
}

var pacman = new PacMan;
pacman.draw();
