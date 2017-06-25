var PacMan = function(image, controller, gridX, gridY, tileSize){
  var img = image;
  img.src = '/img/pacman.png';
  this.img = img;
  this.img.width = 20;
  this.img.height = 20;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.wallColliding = { up: false, down: false, left: false, right: false };
  this.posX = gridX * tileSize;
  this.posY = gridY * tileSize;
  this.keyboard = controller;
};

PacMan.prototype = {

  update: function() {
    if (this.keyboard.keys.up && this.wallColliding.up === false){
      this.velocity(0, -3);
    } else if (this.keyboard.keys.left){
      this.velocity(-3, 0);
    } else if (this.keyboard.keys.right){
      this.velocity(3, 0);
    } else if (this.keyboard.keys.down){
      this.velocity(0, 3);
    }

    this.posX += this.xSpeed;
    this.posY += this.ySpeed;
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
  }

};
