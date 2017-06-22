// 'use strict';

function PacMan(canvasSize) {
  var img = new Image();
  img.src = '/img/pacman.png';
  this.img = img;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.canvasPos = { x:100, y: 100 };
  this.canvasSize = canvasSize;
  this.keyboard = new Keyboard();

  this.direction = function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  };
}

PacMan.prototype = {

  update: function() {
    if (this.keyboard.keys.up){
      this.direction(0, -3);
    } else if (this.keyboard.keys.left){
      this.direction(-3, 0);
    } else if (this.keyboard.keys.right){
      this.direction(3, 0);
    } else if (this.keyboard.keys.down){
      this.direction(0, 3);
    }

    if (this._yPos() > this.canvasSize.y - this.img.height || this._yPos() < 0){
      this.direction(0, 0);
    } else if (this._xPos() > this.canvasSize.x - this.img.width || this._xPos() < 0) {
      this.direction(0, 0);
    }

    this.canvasPos.x += this.xSpeed;
    this.canvasPos.y += this.ySpeed;
  },

  _yPos: function() {
    return this.canvasPos.y + this.ySpeed;
  },

  _xPos: function() {
    return this.canvasPos.x + this.xSpeed;
  }

};
