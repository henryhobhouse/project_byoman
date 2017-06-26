var PacMan = function(image, controller, gridX, gridY, tileSize){
  var img = image;
  img.src = '/img/pacman_sprite.png';
  this.img = img;
  this.img.size = 25;
  // new
  this.frameIndex = {x:0, y:0};
  this.frameWidth = this.img.size;
  this.frameHeight = 128 / 4;

  this.xSpeed = 0;
  this.ySpeed = 0;
  this.speed = 3;
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
    if (this.keyboard.keys.up) {
      this.intendedDirection = 'up';
    }
    else if (this.keyboard.keys.left) {
      this.intendedDirection = 'left';
    }
    else if (this.keyboard.keys.right) {
      this.intendedDirection = 'right';
    }
    else if (this.keyboard.keys.down) {
      this.intendedDirection = 'down';
    }
    this.posX += this.xSpeed;
    this.posY += this.ySpeed;
    this.animation();
    this.motionrules.currentGrid();
    this.motionrules.availablePath();
    this.motionrules.wallBounce();
    this.motionrules.nextMove();
    this.motionrules.escapeSide();

    console.log('height: '+this.img.height)
    console.log('width: '+this.img.width)

  },
  draw: function(renderer) {
    renderer.drawSprite(this);
  },

  animation: function() {
    if (this.xSpeed < 0) {
      this.frameIndex.y = 1;
    } else if (this.xSpeed > 0) {
      this.frameIndex.y = 0;
    } else if (this.ySpeed < 0) {
      this.frameIndex.y = 2;
    } else if (this.ySpeed > 0) {
      this.frameIndex.y = 3;
    }
  },

  velocity: function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  }
};
