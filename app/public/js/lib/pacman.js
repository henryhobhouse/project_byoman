var PacMan = function(image, controller, tileX, tileY, tileSize){
  var img = image;
  img.src = '/img/pacman_sprite.png';
  this.img = img;
  this.img.size = 25;
  this.frameIndex = {x:0, y:0};
  this.frameWidth = Math.floor(324 / 10);
  this.frameHeight = 128 / 4;
  this.animationCycle = 0;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.dirX = 0;
  this.dirY = 0;
  this.speed = 3;
  this.setTile = {x: tileX, y: tileY};
  this.currentX = tileX;
  this.currentY = tileY;
  this.direction = {right: false, left: false, up: false, down: false};
  this.offset = (this.img.size - tileSize)/2;
  this.posXStart = this.currentX * tileSize - this.offset;
  this.posYStart = this.currentY * tileSize - this.offset;
  this.posX = this.posXStart;
  this.posY = this.posYStart;
  this.keyboard = controller;
  this.intendedDirection = 'left';
  this.motionrules = new MotionRules(this, tileSize);
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
    this.motionrules.availablePath();
    this.pacmanAnimation();
    this.posX += this.xSpeed;
    this.posY += this.ySpeed;
    this.pacmanOrientation();
    this.motionrules.wallBounce();
    this.motionrules.escapeSide();
    this.motionrules.nextMove();
    this.motionrules.currentTile();
  },
  draw: function(renderer) {
    renderer.drawSprite(this);
  },
  deathReset: function() {
    this.posX = this.posXStart;
    this.posY = this.posYStart;
  },
  pacmanOrientation: function() {
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
  pacmanAnimation: function() {
    this.animationCycle += 0.5;
    this.frameIndex.x = Math.floor(this.animationCycle) % 10;
  },
  velocity: function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  }
};
