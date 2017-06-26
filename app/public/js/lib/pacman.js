var PacMan = function(image, controller, gridX, gridY, tileSize){
  var img = image;
  img.src = '/img/pacman.png';
  this.img = img;
  this.img.size = 28;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.speed = 2;
  this.tileSize = tileSize;
  this.currentX = gridX;
  this.currentY = gridY;
  this.offset = (this.img.size - tileSize)/2;
  this.posX = this.currentX * this.tileSize - this.offset;
  this.posY = this.currentY * this.tileSize - this.offset;
  this.keyboard = controller;
  this.intendedDirection = 'left';
};

PacMan.prototype = {

  update: function() {
    if (this.keyboard.keys.up) { this.intendedDirection = 'up'; }
    else if (this.keyboard.keys.left) { this.intendedDirection = 'left'; }
    else if (this.keyboard.keys.right) { this.intendedDirection = 'right'; }
    else if (this.keyboard.keys.down) { this.intendedDirection = 'down'; }

    this.posX += this.xSpeed;
    this.posY += this.ySpeed;
    this.currentGrid();
    this.availablePath();
    this.wallBounce();
    this.nextMove();
    this.escapeSide();
  },

  currentGrid: function() {
    this.currentX = (this.posX+this.offset)/this.tileSize | 0;
    this.currentY = (this.posY+this.offset)/this.tileSize | 0;
  },

  escapeSide: function() {
    if (this.posX <= -this.offset) {
      this.posX = 575 - this.offset;
      this.xSpeed = -this.speed;
    } else if (this.posX >= 575 - this.offset) {
      this.posX = -this.offset;
      this.xSpeed = this.speed;
    }
  },

  draw: function(renderer) {
    renderer.drawPacman(this);
  },

  velocity: function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  },

  availablePath: function() {
    levelone.path[this.currentY][this.currentX+1] === 1 ? this.right = true: this.right = false;
    levelone.path[this.currentY][this.currentX-1] === 1 ? this.left = true: this.left = false;
    levelone.path[this.currentY+1][this.currentX] === 1 ? this.down = true: this.down = false;
    levelone.path[this.currentY-1][this.currentX] === 1 ? this.up = true: this.up = false;
  },

  wallBounce: function() {
    if (this.right === false && this.xSpeed > 0 && (this.posX+this.offset)/this.tileSize === this.currentX) {
      this.velocity(0,0);
    } else if (this.left === false && this.xSpeed < 0 && (this.posX+this.offset)/this.tileSize === this.currentX) {
      this.velocity(0,0);
    } else if (this.up === false && this.ySpeed < 0 && (this.posY+this.offset)/this.tileSize === this.currentY) {
      this.velocity(0,0);
    } else if (this.down === false && this.ySpeed > 0 && (this.posY+this.offset)/this.tileSize === this.currentY) {
      this.velocity(0,0);
    }
  },

  nextMove: function() {
    switch (this.intendedDirection) {
    case 'left':
      if ( this.left === true && (this.posY+this.offset)/this.tileSize === this.currentY) {
        this.velocity(-this.speed, 0);
        this.intendedDirection = null;
      }
      break;
    case 'right':
      if (this.right === true && (this.posY+this.offset)/this.tileSize === this.currentY) {
        this.velocity(this.speed, 0);
        this.intendedDirection = null;
      }
      break;
    case 'up':
      if (this.up === true && (this.posX+this.offset)/this.tileSize === this.currentX) {
        this.velocity(0, -this.speed);
        this.intendedDirection = null;
      }
      break;
    case 'down':
      if (this.down === true && (this.posX+this.offset)/this.tileSize === this.currentX) {
        this.velocity(0, this.speed);
        this.intendedDirection = null;
      }
      break;
    default:
    }
  },
};
