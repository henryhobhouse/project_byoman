var PacMan = function(image, controller, gridX, gridY, tileSize){
  var img = image;
  img.src = '/img/sprite_test_transparent.png';
  this.img = img;
  this.img.size = 25;
  // new
  this.frameIndex = {x:0, y:0};
  this.frameWidth = this.img.size;
  this.frameHeight = 119 / 4;

  this.xSpeed = 0;
  this.ySpeed = 0;
  this.speed = 2; // Has to be an even number
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
      this.frameIndex.y = 2;
    }
    else if (this.keyboard.keys.left) {
      this.intendedDirection = 'left';
      this.frameIndex.y = 3;
    }
    else if (this.keyboard.keys.right) {
      this.intendedDirection = 'right';
      this.frameIndex.y = 0;
    }
    else if (this.keyboard.keys.down) {
      this.intendedDirection = 'down';
      this.frameIndex.y = 1;
    }
    this.posX += this.xSpeed;
    this.posY += this.ySpeed;
    this.motionrules.currentGrid();
    this.motionrules.availablePath();
    this.motionrules.wallBounce();
    this.motionrules.nextMove();
    this.motionrules.escapeSide();
  },
  draw: function(renderer) {
    renderer.drawSprite(this);
  },
  velocity: function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  }
};
