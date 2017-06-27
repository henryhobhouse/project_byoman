var Ghost = function(image,gridX, gridY, tileSize){
  var img = image;
  img.src = '/img/redGhost.png';
  this.img = img;
  this.img.size = 28;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.speed = 3;
  this.currentX = gridX;
  this.currentY = gridY;
  this.direction = {right: false, left: false, up: false, down: false};
  this.targetX = 20;
  this.targetY = 0;
  this.offset = (this.img.size - tileSize)/2;
  this.posX = this.currentX * tileSize - this.offset;
  this.posY = this.currentY * tileSize - this.offset;
  this.motionrules = new MotionRules(this, tileSize);
  this.intendedDirection = this.setDirection();
  this.reverse = null;
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
    this.setDirection();
  },
  draw: function(renderer) {
    renderer.drawAnimatedObject(this);
  },
  velocity: function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  },
  setDirection: function(){
    this.getAvailable();
    var rand = this.options[Math.floor(Math.random() * this.options.length)];
    this.intendedDirection = rand;
  },
  getAvailable: function() {
    this.options = [];
    this.findReverse();
    if(this.direction.right === true && this.reverse != 'right') {this.options.push('right');}
    if(this.direction.left === true && this.reverse != 'left') {this.options.push('left');}
    if(this.direction.up === true && this.reverse != 'up') {this.options.push('up');}
    if(this.direction.down === true && this.reverse != 'down') {this.options.push('down');}
  },
  findReverse: function() {
    if(this.xSpeed < 0) {this.reverse = 'right';}
    else if(this.xSpeed > 0) {this.reverse = 'left';}
    else if(this.ySpeed > 0) {this.reverse = 'up';}
    else if(this.ySpeed < 0) {this.reverse = 'down';}
  },
};
