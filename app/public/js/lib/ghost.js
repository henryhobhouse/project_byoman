var Ghost = function(image,gridX, gridY, tileSize){
  var img = image;
  img.src = '/img/red_ghost_spritesheet.png';
  this.img = img;
  this.img.size = 28;
  this.frameIndex = {x:0, y:0};
  this.frameWidth = Math.floor(68/ 2);
  this.frameHeight = 164 / 4;
  this.animationCycle = 0;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.dirX = 1;
  this.dirY = 0;
  this.speed = 1;
  this.setGrid = {x: gridX, y: gridY};
  this.currentX = gridX;
  this.currentY = gridY;
  this.direction = {right: false, left: false, up: false, down: false};
  this.targetX = 20;
  this.targetY = 0;
  this.offset = (this.img.size - tileSize)/2;
  this.posX = this.currentX * tileSize - this.offset;
  this.posY = this.currentY * tileSize - this.offset;
  this.motionrules = new MotionRules(this, tileSize);
  this.intendedDirection = 'right';
};

/*
To get this working

1. Current direction to ensure non reversing
2. Current grid
3. Available Grids

*/
Ghost.prototype = {
  update: function() {
    this.posX += this.xSpeed;
    this.posY += this.ySpeed;
    this.motionrules.availablePath();
    this.motionrules.currentGrid();
    this.motionrules.wallBounce();
    this.motionrules.nextMove();
    this.motionrules.escapeSide();
    this.ghostOrientation();
    this.ghostAnimation();
    this.updateMove();
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
  updateMove: function() {
    if (this.setGrid.x != this.currentX || this.setGrid.y != this.currentY) {
      this.setGrid.x = this.currentX;
      this.setGrid.y = this.currentY;
      console.log('setgrid: '+this.setGrid.x)
      console.log('currentx '+this.currentX)
    }
  }


};
