var Ghost = function(image, tileX, tileY, tileSize, ghostSpriteNumber, scatX, scatY){
  var img = image;
  img.src = '/img/ghosts_spritesheet-v3.png';
  this.img = img;
  this.img.size = 28;
  this.frameIndex = {x:0, y:0};
  this.frameWidth = Math.floor(68/ 2);
  this.frameHeight = 697 / 16;
  this.animationCycle = 0;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.speed = 2.25;
  this.ifHuntTile = {x: 1, y: 1};
  this.scatterTile = {x: scatX, y: scatY};
  this.setTile = {x: tileX, y: tileY};
  this.tilePosX = tileX;
  this.tilePosY = tileY;
  this.direction = {right: false, left: false, up: false, down: false};
  this.offset = (this.img.size - tileSize)/2;
  this.startPosX = tileX * tileSize - this.offset;
  this.startPosY = tileY * tileSize - this.offset;
  this.posX = this.startPosX;
  this.posY = this.startPosY;
  this.motionrules = new MotionRules(this, tileSize);
  this.motionrules.availablePath();
  this.intendedDirection = 'right';
  this.ghostSpriteNumber =  ghostSpriteNumber;
  this.scatter = true;
  this.frightened = false;
  this.died = false;
  this.timer = new Timer();
  this.timer.start();
};

Ghost.prototype = {
  update: function() {
    this.scatterCheck();
    // if (this.died === true) { console.log(this.ifHuntTile) }
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
      this.frameIndex.y = 2 + this.ghostSpriteNumber;
    } else if (this.xSpeed > 0) {
      this.frameIndex.y = 3 + this.ghostSpriteNumber;
    } else if (this.ySpeed < 0) {
      this.frameIndex.y = 0 + this.ghostSpriteNumber;
    } else if (this.ySpeed > 0) {
      this.frameIndex.y = 1 + this.ghostSpriteNumber;
    }
  },
  ghostAnimation: function() {
    this.animationCycle += 0.15;
    this.frameIndex.x = Math.floor(this.animationCycle) % 2;
  },
  velocity: function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  },
  resetDeath: function() {
    this.posX = this.startPosX;
    this.posY = this.startPosY;
    this.motionrules.currentTile();
  },
  scatterCheck: function() {
    this.timer.update();
    if (this.scatter === true) {
      this.huntTile = this.scatterTile;
      if (this.timer.getTimeDiff() > 700000) {
        this.scatter = false;
        this.timer.reset();
        this.timer.start();
      }
    } else {
      this.huntTile = this.ifHuntTile;
      if (this.timer.getTimeDiff() > 2000000) {
        this.scatter = true;
        this.timer.reset();
        this.timer.start();
      }
    }
  },
  death: function() {
    this.timer.reset();
    this.timer.start();
    this.died = true;
    this.scatter = false;
    startTileX = (this.startPosX + this.offset) / 20;
    startTileY = (this.startPosY + this.offset) / 20;
    this.ifHuntTile = { x: startTileX, y: startTileY };
    this.speed = 5;
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
    this.frightened && !this.died ? this.randDir(options) : this.tileHunt(options);
  },
  randDir: function(options) {
    var rand = options[Math.floor(Math.random() * options.length)];
    this.changeIntended(rand);
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
