// Animated Object Helper to keep code DRY
var MotionRules = function(object, tileSize) {
  this.object = object;
  this.tileSize = tileSize;
};

MotionRules.prototype = {
  escapeSide: function() {
    if (this.object.posX <= this.tileSize) {
      this.object.posX = 575 - this.tileSize;
    } else if (this.object.posX >= 575 - this.tileSize) {
      this.object.posX = this.tileSize;
    }
  },
  availablePath: function() {
    this.object.direction.right = levelone.path[this.object.currentY][this.object.currentX+1] === 1;
    this.object.direction.left = levelone.path[this.object.currentY][this.object.currentX-1] === 1;
    this.object.direction.down = levelone.path[this.object.currentY+1][this.object.currentX] === 1;
    this.object.direction.up = levelone.path[this.object.currentY-1][this.object.currentX] === 1;
  },
  wallBounce: function() {
    if (this.object.direction.right === false && this.object.xSpeed > 0 && this.onTileCenter('X-RIGHT') === true ) {
      this.object.velocity(0,0);
      this._xGridAlign();
    } else if (this.object.direction.left === false && this.object.xSpeed < 0 && this.onTileCenter('X-LEFT') === true ) {
      this.object.velocity(0,0);
      this._xGridAlign();
    } else if (this.object.direction.up === false && this.object.ySpeed < 0 &&  this.onTileCenter('Y-UP') === true ) {
      this.object.velocity(0,0);
      this._yGridAlign();
    } else if (this.object.direction.down === false && this.object.ySpeed > 0 && this.onTileCenter('Y-DOWN')  === true ) {
      this.object.velocity(0,0);
      this._yGridAlign();
    }
  },
  currentGrid: function() {
    this.floatingGridX = (this.object.posX+this.object.offset+(this.tileSize/2))/this.tileSize;
    this.floatingGridY = (this.object.posY+this.object.offset+(this.tileSize/2))/this.tileSize;
    this.object.currentX = this.floatingGridX | 0;
    this.object.currentY = this.floatingGridY | 0;
  },
  onTileCenter: function(axis) {
    if (axis === 'X-LEFT') { return this.floatingGridX <= this.object.currentX+0.5; }
    else if (axis === 'X-RIGHT') { return this.floatingGridX >= this.object.currentX+0.5; }
    else if (axis === 'Y-UP') { return this.floatingGridY <= this.object.currentY+0.5; }
    else if (axis === 'Y-DOWN') { return this.floatingGridY >= this.object.currentY+0.5; }
  },
  nextMove: function() {
    switch (this.object.intendedDirection) {
    case 'left':
      if (this.object.direction.left === true && this.object.ySpeed <= 0 && this.onTileCenter('Y-DOWN') ||
          this.object.direction.left === true && this.object.ySpeed >= 0 && this.onTileCenter('Y-UP')) {
        this.object.velocity(-this.object.speed, 0);
        this._yGridAlign();
      }
      break;
    case 'right':
      if (this.object.direction.right === true && this.object.ySpeed <= 0 &&  this.onTileCenter('Y-DOWN') ||
          this.object.direction.right === true && this.object.ySpeed >= 0 && this.onTileCenter('Y-UP')) {
        this.object.velocity(this.object.speed, 0);
        this._yGridAlign();
      }
      break;
    case 'up':
      if (this.object.direction.up === true && this.object.xSpeed >= 0 && this.onTileCenter('X-RIGHT') ||
          this.object.direction.up === true && this.object.xSpeed <= 0 && this.onTileCenter('X-LEFT')) {
        this.object.velocity(0, -this.object.speed);
        this._xGridAlign();
      }
      break;
    case 'down':
      if (this.object.direction.down === true && this.object.xSpeed >= 0 && this.onTileCenter('X-RIGHT') ||
          this.object.direction.down === true && this.object.xSpeed <= 0 && this.onTileCenter('X-LEFT') ) {
        this.object.velocity(0, this.object.speed);
        this._xGridAlign();
      }
      break;
    default:
    }
  },
  _yGridAlign: function() {
    this.object.posY = this.object.currentY * this.tileSize - this.object.offset;
  },
  _xGridAlign: function() {
    this.object.posX = this.object.currentX * this.tileSize - this.object.offset;
  }
};
