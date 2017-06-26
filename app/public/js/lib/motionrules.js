// Animated Object Helper to keep code DRY
var MotionRules = function(object) {
  this.object = object;
};

MotionRules.prototype = {
  escapeSide: function() {
    if (this.object.posX <= -this.object.offset) {
      this.object.posX = 575 - this.object.offset;
      this.object.xSpeed = -this.object.speed;
    } else if (this.object.posX >= 575 - this.object.offset) {
      this.object.posX = -this.object.offset;
      this.object.xSpeed = this.object.speed;
    }
  },
  availablePath: function() {
    levelone.path[this.object.currentY][this.object.currentX+1] === 1 ? this.right = true : this.right = false;
    levelone.path[this.object.currentY][this.object.currentX-1] === 1 ? this.left = true : this.left = false;
    levelone.path[this.object.currentY+1][this.object.currentX] === 1 ? this.down = true : this.down = false;
    levelone.path[this.object.currentY-1][this.object.currentX] === 1 ? this.up = true : this.up = false;
  },
  wallBounce: function() {
    if (this.right === false && this.object.xSpeed > 0 && (this.object.posX+this.object.offset)/this.object.tileSize === this.object.currentX) {
      this.object.velocity(0,0);
    } else if (this.left === false && this.object.xSpeed < 0 && (this.object.posX+this.object.offset)/this.object.tileSize === this.object.currentX) {
      this.object.velocity(0,0);
    } else if (this.up === false && this.object.ySpeed < 0 && (this.object.posY+this.object.offset)/this.object.tileSize === this.object.currentY) {
      this.object.velocity(0,0);
    } else if (this.down === false && this.object.ySpeed > 0 && (this.object.posY+this.object.offset)/this.object.tileSize === this.object.currentY) {
      this.object.velocity(0,0);
    }
  },
  currentGrid: function() {
    this.object.currentX = (this.object.posX+this.object.offset)/this.object.tileSize | 0;
    this.object.currentY = (this.object.posY+this.object.offset)/this.object.tileSize | 0;
  },
  nextMove: function() {
    switch (this.object.intendedDirection) {
    case 'left':
      if (this.left === true && (this.object.posY+this.object.offset)/this.object.tileSize === this.object.currentY ) {
        this.object.velocity(-this.object.speed, 0);
        this.object.intendedDirection = null;
      }
      break;
    case 'right':
      if (this.right === true && (this.object.posY+this.object.offset)/this.object.tileSize === this.object.currentY) {
        this.object.velocity(this.object.speed, 0);
        this.object.intendedDirection = null;
      }
      break;
    case 'up':
      if (this.up === true && (this.object.posX+this.object.offset)/this.object.tileSize === this.object.currentX) {
        this.object.velocity(0, -this.object.speed);
        this.object.intendedDirection = null;
      }
      break;
    case 'down':
      if (this.down === true && (this.object.posX+this.object.offset)/this.object.tileSize === this.object.currentX) {
        this.object.velocity(0, this.object.speed);
        this.object.intendedDirection = null;
      }
      break;
    default:
    }
  }
};
