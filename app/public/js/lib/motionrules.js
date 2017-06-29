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
    this.object.canGo.right = levelone.path[this.object.tilePosY][this.object.tilePosX+1] === 1;
    this.object.canGo.left = levelone.path[this.object.tilePosY][this.object.tilePosX-1] === 1;
    this.object.canGo.down = levelone.path[this.object.tilePosY+1][this.object.tilePosX] === 1;
    this.object.canGo.up = levelone.path[this.object.tilePosY-1][this.object.tilePosX] === 1;
  },
  wallBounce: function() {
    if (!this.object.canGo.right && this.object.xSpeed > 0 && this.onTileCenter('X-RIGHT') ) {
      this.object.velocity(0,0);
      this._xTileAlign();
    } else if (!this.object.canGo.left && this.object.xSpeed < 0 && this.onTileCenter('X-LEFT') ) {
      this.object.velocity(0,0);
      this._xTileAlign();
    } else if (!this.object.canGo.up && this.object.ySpeed < 0 && this.onTileCenter('Y-UP') ) {
      this.object.velocity(0,0);
      this._yTileAlign();
    } else if (!this.object.canGo.down && this.object.ySpeed > 0 && this.onTileCenter('Y-DOWN') ) {
      this.object.velocity(0,0);
      this._yTileAlign();
    }
  },
  currentTile: function() {
    this.floatingTileX = (this.object.posX+this.object.offset+(this.tileSize/2))/ this.tileSize;
    this.floatingTileY = (this.object.posY+this.object.offset+(this.tileSize/2))/ this.tileSize;
    this.object.tilePosX = this.floatingTileX | 0;
    this.object.tilePosY = this.floatingTileY | 0;
  },
  onTileCenter: function(axis) {
    if (axis === 'X-LEFT') { return this.floatingTileX <= this.object.tilePosX+0.5; }
    else if (axis === 'X-RIGHT') { return this.floatingTileX >= this.object.tilePosX+0.5; }
    else if (axis === 'Y-UP') { return this.floatingTileY <= this.object.tilePosY+0.5; }
    else if (axis === 'Y-DOWN') { return this.floatingTileY >= this.object.tilePosY+0.5; }
  },
  nextMove: function() {
    switch (this.object.intendedDirection) {
    case 'left':
      if (this.object.canGo.left && this.object.ySpeed <= 0 && this.onTileCenter('Y-DOWN') ||
          this.object.canGo.left && this.object.ySpeed >= 0 && this.onTileCenter('Y-UP')) {
        this.object.velocity(-this.object.speed, 0);
        this._yTileAlign();
      }
      break;
    case 'right':
      if (this.object.canGo.right && this.object.ySpeed <= 0 &&  this.onTileCenter('Y-DOWN') ||
          this.object.canGo.right && this.object.ySpeed >= 0 && this.onTileCenter('Y-UP')) {
        this.object.velocity(this.object.speed, 0);
        this._yTileAlign();
      }
      break;
    case 'up':
      if (this.object.canGo.up && this.object.xSpeed >= 0 && this.onTileCenter('X-RIGHT') ||
          this.object.canGo.up && this.object.xSpeed <= 0 && this.onTileCenter('X-LEFT')) {
        this.object.velocity(0, -this.object.speed);
        this._xTileAlign();
      }
      break;
    case 'down':
      if (this.object.canGo.down && this.object.xSpeed >= 0 && this.onTileCenter('X-RIGHT') ||
          this.object.canGo.down && this.object.xSpeed <= 0 && this.onTileCenter('X-LEFT') ) {
        this.object.velocity(0, this.object.speed);
        this._xTileAlign();
      }
      break;
    default:
    }
  },
  _yTileAlign: function() {
    this.object.posY = this.object.tilePosY * this.tileSize - this.object.offset;
  },
  _xTileAlign: function() {
    this.object.posX = this.object.tilePosX * this.tileSize - this.object.offset;
  }
};
