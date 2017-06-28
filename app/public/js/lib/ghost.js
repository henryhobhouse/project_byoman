var Ghost = function(image, tileX, tileY, tileSize){
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
  this.speed = 2;
  this.huntTile = {x: 1, y: 1};
  this.setTile = {x: tileX, y: tileY};
  this.tilePosX = tileX;
  this.tilePosY = tileY;
  this.direction = {right: false, left: false, up: false, down: false};
  this.offset = (this.img.size - tileSize)/2;
  this.posXStart = tileX * tileSize - this.offset;
  this.posYStart = tileY * tileSize - this.offset;
  this.posX = this.posXStart;
  this.posY = this.posYStart;
  this.motionrules = new MotionRules(this, tileSize);
  this.motionrules.availablePath();
  this.intendedDirection = 'right';
};

Ghost.prototype = {
  update: function() {
    this.posX += this.xSpeed;
    this.posY += this.ySpeed;
    this.motionrules.nextMove();
    this.motionrules.currentTile();
    this.motionrules.wallBounce();
    this.motionrules.escapeSide();
    this.ghostOrientation();
    this.ghostAnimation();
    this.onNewTile();
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
  resetDeath: function() {
    this.posX = this.posXStart;
    this.posY = this.posYStart;
    this.motionrules.currentTile();
  },
  onNewTile: function() {
    if (this.setTile.x != this.tilePosX || this.setTile.y != this.tilePosY) {
      this.setTile.x = this.tilePosX;
      this.setTile.y = this.tilePosY;
      this.direction = {right: false, left: false, up: false, down: false};
      this.motionrules.availablePath();
      this.removeReverse();
      this.determineTile();
    }
  },
  removeReverse: function() {
    if (this.xSpeed > 0) {this.direction.left = false; }
    else if (this.xSpeed < 0) {this.direction.right = false; }
    else if (this.ySpeed > 0) {this.direction.up = false; }
    else if (this.ySpeed < 0) {this.direction.down = false; }
  },
  determineTile: function() {
    var options = [];
    if (this.direction.right === true) {options.push([this.tilePosX+1, this.tilePosY]);}
    if (this.direction.left === true) {options.push([this.tilePosX-1, this.tilePosY]);}
    if (this.direction.up === true) {options.push([this.tilePosX, this.tilePosY-1]);}
    if (this.direction.down === true) {options.push([this.tilePosX, this.tilePosY+1]);}
    this.tileHunt(options);
  },
  changeIntended: function(dir) {
    this.intendedDirection = dir;
  },
  tileHunt: function(options) {
    var distances = [];
    var xPow = 0.0;
    var yPow = 0.0;
    var dist = 0.0;
    for(i=0;i<options.length;i++) {
      xPow = Math.pow((this.huntTile.x - options[i][0]),2);
      yPow = Math.pow((this.huntTile.y - options[i][1]),2);
      dist = Math.sqrt((xPow + yPow), 0.5);
      distances.push(dist);
    }
    index = this.indexOfMin(distances);
    this.getDir(options[index]);
  },
  indexOfMin: function(distances) {
    var min = 2000;
    var minIndex = 0;
    for (var i = 0; i < distances.length; i++) {
      if (distances[i] < min) {
        minIndex = i;
        min = distances[i];
      }
    }
    return minIndex;
  },
  getDir: function(tile) {
    var dir = null;
    if (tile[0] > this.tilePosX) { dir = 'right'; }
    else if (tile[0] < this.tilePosX) { dir = 'left'; }
    else if (tile[1] < this.tilePosY) { dir = 'up'; }
    else if (tile[1] > this.tilePosY) { dir = 'down'; }
    this.changeIntended(dir);
  }
};
