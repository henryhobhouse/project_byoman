var PacMan = function(image, controller, gridX, gridY, tileSize){
  var img = image;
  img.src = '/img/pacman.png';
  this.img = img;
  this.img.size = 28;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.speed = 3;
  this.tileSize = tileSize;
  this.currentX = gridX;
  this.currentY = gridY;
  this.direction = {right: false, left: false, up: false, down: false};
  this.offset = (this.img.size - tileSize)/2;
  this.posXStart = this.currentX * this.tileSize - this.offset;
  this.posYStart = this.currentY * this.tileSize - this.offset;
  this.posX = this.posXStart;
  this.posY = this.posYStart;
  this.keyboard = controller;
  this.intendedDirection = 'left';
  this.motionrules = new MotionRules(this, tileSize);
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
    renderer.drawAnimatedObject(this);
  },
  deathReset: function() {
    this.posX = this.posXStart;
    this.posY = this.posYStart;
  },
  velocity: function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  }
};
