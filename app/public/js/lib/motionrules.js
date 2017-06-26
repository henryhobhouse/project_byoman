// Animated Object Helper to keep code DRY
var MotionRules = function(object) {
  this.object = object;
  this.floatingGridX = (this.object.posX+this.object.offset)/this.object.tileSize;
  this.floatingGridY = (this.object.posY+this.object.offset)/this.object.tileSize;
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
    if (this.right === false && this.object.xSpeed > 0 && onTileCenter('X')) {
      this.object.velocity(0,0);
    } else if (this.left === false && this.object.xSpeed < 0 && onTileCenter('X')) {
      this.object.velocity(0,0);
    } else if (this.up === false && this.object.ySpeed < 0 &&  onTileCenter('Y')) {
      this.object.velocity(0,0);
    } else if (this.down === false && this.object.ySpeed > 0 && onTileCenter('Y')) {
      this.object.velocity(0,0);
    }
  },
  currentGrid: function() {
    this.object.currentX = this.floatingGridX | 0;
    this.object.currentY = this.floatingGridY | 0;
  },
  onTileCenter: function(axis) {
    if (axis === 'X') { this.floatingGridX === this.object.currentX; }
    else { this.floatingGridX === this.object.currentX; }
  },
  nextMove: function() {
    switch (this.object.intendedDirection) {
    case 'left':
      if (this.left === true && onTileCenter('Y') ) {
        this.object.velocity(-this.object.speed, 0);
        this.object.intendedDirection = null;
      }
      break;
    case 'right':
      if (this.right === true && onTileCenter('Y')) {
        this.object.velocity(this.object.speed, 0);
        this.object.intendedDirection = null;
      }
      break;
    case 'up':
      if (this.up === true && onTileCenter('X')) {
        this.object.velocity(0, -this.object.speed);
        this.object.intendedDirection = null;
      }
      break;
    case 'down':
      if (this.down === true && onTileCenter('X')) {
        this.object.velocity(0, this.object.speed);
        this.object.intendedDirection = null;
      }
      break;
    default:
    }
  }
};
