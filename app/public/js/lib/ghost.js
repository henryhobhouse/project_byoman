var Ghost = function(image,gridX, gridY, tileSize){
  var img = image;
  img.src = '/img/redGhost.png';
  this.img = img;
  this.img.size = 28;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.speed = 3;
  this.tileSize = tileSize;
  this.currentX = gridX;
  this.currentY = gridY;
  this.offset = (this.img.size - tileSize) / 2;
  this.posX = this.currentX * this.tileSize - this.offset;
  this.posY = this.currentY * this.tileSize - this.offset;
  this.motionrules = new MotionRules(this);
};

Ghost.prototype = {
  update: function() {
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
  velocity: function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  }
};
