var PacMan = function(image, controller, gridX, gridY, tileSize){
  var img = image;
  img.src = '/img/pacman.png';
  this.img = img;
  this.img.size = 28;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.speed = 6;
  this.tileSize = tileSize;
  this.currentX = gridX;
  this.currentY = gridY;
  this.offset = (this.img.size - tileSize)/2;
  this.posX = this.currentX * this.tileSize - this.offset;
  this.posY = this.currentY * this.tileSize - this.offset;
  this.keyboard = controller;
  this.intendedDirection = 'left';
  this.motionrules = new MotionRules(this);
};

PacMan.prototype = {
  update: function() {
    if (this.keyboard.keys.up) { this.intendedDirection = 'up'; }
    else if (this.keyboard.keys.left) { this.intendedDirection = 'left'; }
    else if (this.keyboard.keys.right) { this.intendedDirection = 'right'; }
    else if (this.keyboard.keys.down) { this.intendedDirection = 'down'; }
    this.posX += this.xSpeed;
    this.posY += this.ySpeed;
    this.motionrules.currentGrid();
    this.motionrules.availablePath();
    this.motionrules.wallBounce();
    this.motionrules.nextMove();
    this.motionrules.escapeSide();
  },
  draw: function(renderer) {
    renderer.drawPacman(this);
  },
  velocity: function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  }
};
