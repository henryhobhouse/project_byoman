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
    if (this.keyboard.keys.up && this.up === true && this.posX/20 === this.currentX ){
      this.velocity(0, -3);
      this.dir = 'up';
      this.posX = this.currentX * 20;
    } else if (this.keyboard.keys.left && this.left === true && this.posY/20 === this.currentY ){
      this.velocity(-3, 0);
      this.dir = 'left';
      this.posY = this.currentY * 20;
    } else if (this.keyboard.keys.right && this.right === true && this.posY/20 === this.currentY ){
      this.velocity(3, 0);
      this.dir = 'right';
      this.posY = this.currentY * 20;
    } else if (this.keyboard.keys.down && this.down === true && this.posX/20 === this.currentX ){
      this.velocity(0, 3);
      this.dir = 'down';
      this.posX = this.currentX * 20;
    }

    this.posX += this.xSpeed;
    this.posY += this.ySpeed;
    this.currentGrid();
    this.neighbouringTiles();
    this.wallCollision();
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

  _yPos: function() {
    return this.posY + this.ySpeed;
  },

  _xPos: function() {
    return this.posX + this.xSpeed;
  },

  neighbouringTiles: function() {
    levelone.path[this.currentY][this.currentX+1] === 1 ? this.right = true: this.right = false;
    levelone.path[this.currentY][this.currentX-1] === 1 ? this.left = true: this.left = false;
    levelone.path[this.currentY+1][this.currentX] === 1 ? this.down = true: this.down = false;
    levelone.path[this.currentY-1][this.currentX] === 1 ? this.up = true: this.up = false;
  },

  wallCollision: function() {
    if (this.right === false && this.dir === 'right' && this.posX/20 >= this.currentX) {
      this.velocity(0,0);
      this.posX = this.currentX * 20;
    } else if (this.left === false && this.dir === 'left' && this.posX/20 <= this.currentX) {
      this.velocity(0,0);
      this.posX = this.currentX * 20;
    } else if (this.up === false && this.dir === 'up' && this.posY/20 <= this.currentY) {
      this.velocity(0,0);
      this.posY = this.currentY * 20;
    } else if (this.down === false && this.dir === 'down' && this.posY/20 >= this.currentY) {
      this.velocity(0,0);
      this.posY = this.currentY * 20;
    }
  }


};
