'use strict';

function PacMan(canvasSize) {
  var img = new Image();
  img.src = '../img/red_bird.png';
  this.img = img;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.canvasPos = { x:100, y: 20 };
  this.canvasSize = canvasSize;
  this.keyboard = new Keyboard();

  this.direction = function(x, y) {
    this.xSpeed = x;
    this.ySPeed = y;
  };
};

module.exports = PacMan;
