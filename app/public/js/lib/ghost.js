var Ghost = function(image,source,gridX, gridY, tileSize){
  var img = image;
  img.src = source;
  this.img = img;
  this.img.size = 28;
  this.frameIndex = {x:0, y:0};
  this.frameWidth = Math.floor(68/ 2);
  this.frameHeight = 164 / 4;
  this.animationCycle = 0;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.speed = 2;
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
    this.ghostOrientation();
    this.ghostAnimation();
  },
  draw: function(renderer) {
    renderer.drawSprite(this);
  },
  ghostOrientation: function() {
    if (this.xSpeed < 0) {
      this.frameIndex.y = 2;
    } else if (this.xSpeed > 0) {
      this.frameIndex.y = 3;
    } else if (this.ySpeed < 0) {
      this.frameIndex.y = 0;
    } else if (this.ySpeed > 0) {
      this.frameIndex.y = 1;
    }
  },

  ghostAnimation: function() {
    this.animationCycle += 0.1;
    this.frameIndex.x = Math.floor(this.animationCycle) % 2;
  },

  velocity: function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  },
  setDirection: function(){
    this.getAvailable();
    var rand = this.options[Math.floor(Math.random() * this.options.length)];
    this.intendedDirection = rand;
    this.findReverse();
  },
  getAvailable: function() {
    this.options = [];
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
