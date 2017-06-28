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
  this.speed = 2;
  this.huntGrid = {x: 0, y: 0};
  this.setGrid = {x: gridX, y: gridY};
  this.currentX = gridX;
  this.currentY = gridY;
  this.direction = {right: false, left: false, up: false, down: false};
  this.offset = (this.img.size - tileSize)/2;
  this.posXStart = gridX * tileSize - this.offset;
  this.posYStart = gridY * tileSize - this.offset;
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
    this.motionrules.currentGrid();
    this.motionrules.wallBounce();
    this.motionrules.escapeSide();
    this.ghostOrientation();
    this.ghostAnimation();
    this.onNewGrid();
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
  onNewGrid: function() {
    if (this.setGrid.x != this.currentX || this.setGrid.y != this.currentY) {
      this.setGrid.x = this.currentX;
      this.setGrid.y = this.currentY;
      this.direction = {right: false, left: false, up: false, down: false};
      this.motionrules.availablePath();
      this.removeReverse();
      this.determineGrid();
    }
  },
  removeReverse: function() {
    if (this.xSpeed > 0) {this.direction.left = false; }
    else if (this.xSpeed < 0) {this.direction.right = false; }
    else if (this.ySpeed > 0) {this.direction.up = false; }
    else if (this.ySpeed < 0) {this.direction.down = false; }
  },
  determineGrid: function() {
    var options = [];
    if (this.direction.right === true) {options.push([this.currentX+1, this.currentY]);}
    if (this.direction.left === true) {options.push([this.currentX-1, this.currentY]);}
    if (this.direction.up === true) {options.push([this.currentX, this.currentY-1]);}
    if (this.direction.down === true) {options.push([this.currentX, this.currentY+1]);}
    this.gridHunt(options);
  },
  changeIntended: function(dir) {
    this.intendedDirection = dir;
  },
  gridHunt: function(options) {
    var distances = [];
    var xPow = 0.0;
    var yPow = 0.0;
    var dist = 0.0;
    for(i=0;i<options.length;i++) {
      xPow = Math.pow((this.huntGrid.x - options[i][0]),2);
      yPow = Math.pow((this.huntGrid.y - options[i][1]),2);
      dist = Math.sqrt((xPow + yPow), 0.5);
      distances.push(dist);
    }
    index = this.indexOfMax(distances);
    this.getDir(options[index]);
  },
  indexOfMax: function(distances) {
    var min = 400;
    var minIndex = 0;
    for (var i = 0; i < distances.length; i++) {
      if (distances[i] < min) {
        minIndex = i;
        min = distances[i];
      }
    }
    return minIndex;
  },
  getDir: function(grid) {
    var dir = null;
    if (grid[0] > this.currentX) { dir = 'right'; }
    else if (grid[0] < this.currentX) { dir = 'left'; }
    else if (grid[1] < this.currentY) { dir = 'up'; }
    else if (grid[1] > this.currentY) { dir = 'down'; }
    this.changeIntended(dir);
  }
};
