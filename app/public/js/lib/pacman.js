var PacMan = function(image, controller, gridX, gridY, tileSize){
  var img = image;
  img.src = '/img/pacman.png';
  this.img = img;
  this.img.width = 20;
  this.img.height = 20;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.posX = gridX * tileSize;
  this.posY = gridY * tileSize;
  this.keyboard = controller;
  this.currentX = gridX;
  this.currentY = gridY;
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
  },

  currentGrid: function() {
    this.currentX = (this.posX+10)/20 | 0;
    this.currentY = (this.posY+10)/20 | 0;
  },

  draw: function(renderer) {
    renderer.drawTile(this);
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
    if (this.right === false && this.xSpeed > 0 && this.posX/20 >= this.currentX) {
      this.velocity(0,0);
      this._xGridAlign();
    } else if (this.left === false && this.xSpeed < 0 && this.posX/20 <= this.currentX) {
      this.velocity(0,0);
      this._xGridAlign();
    } else if (this.up === false && this.ySpeed < 0 && this.posY/20 <= this.currentY) {
      this.velocity(0,0);
      this._yGridAlign();
    } else if (this.down === false && this.ySpeed > 0 && this.posY/20 >= this.currentY) {
      this.velocity(0,0);
      this._yGridAlign();
    }
  },

  nextMove: function() {
    switch (this.intendedDirection) {
    case 'left':
      if (this.left === true && this.posY/20 === this.currentY) {
        this.velocity(-3, 0);
        this.intendedDirection = null;
        this._yGridAlign();
      }
      break;
    case 'right':
      if (this.right === true && this.posY/20 === this.currentY) {
        this.velocity(3, 0);
        this.intendedDirection = null;
        this._yGridAlign();
      }
      break;
    case 'up':
      if (this.up === true && this.posX/20 === this.currentX) {
        this.velocity(0, -3);
        this.intendedDirection = null;
        this._xGridAlign();
      }
      break;
    case 'down':
      if (this.down === true && this.posX/20 === this.currentX) {
        this.velocity(0, 3);
        this.intendedDirection = null;
        this._xGridAlign();
      }
      break;
    default:
    }
  },

  _yGridAlign: function() {
    this.posY = this.currentY * 20;
  },

  _xGridAlign: function() {
    this.posX = this.currentX * 20;
  }
};
