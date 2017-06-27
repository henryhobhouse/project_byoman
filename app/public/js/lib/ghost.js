var Ghost = function(image,gridX, gridY, tileSize){
  var img = image;
  img.src = '/img/redGhost.png';
  this.img = img;
  this.img.size = 28;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.dirX = 1;
  this.dirY = 0;
  this.speed = 1;
  this.currentX = gridX;
  this.currentY = gridY;
  this.gridMoveX = this.currentX + 1;
  this.gridMoveY = this.currentY;
  this.direction = {right: false, left: false, up: false, down: false};
  this.targetX = 20;
  this.targetY = 0;
  this.offset = (this.img.size - tileSize)/2;
  this.posX = this.currentX * tileSize - this.offset;
  this.posY = this.currentY * tileSize - this.offset;
  this.motionrules = new MotionRules(this, tileSize);
  this.intendedDirection = 'right';
};

Ghost.prototype = {
  update: function() {
    this.posX += this.xSpeed;
    this.posY += this.ySpeed;
    this.motionrules.availablePath();
    this.motionrules.currentGrid();
    this.motionrules.wallBounce();
    this.motionrules.nextMove();
    this.motionrules.escapeSide();
    this.moveOptions();
    if (this.ySpeed === 0) { this.dirX = this.xSpeed; }
    if (this.xSpeed === 0) { this.dirY = this.ySpeed; }
    console.log('update: '+(this.posX+10)/20|0)
  },
  draw: function(renderer) {
    renderer.drawAnimatedObject(this);
  },
  velocity: function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  },
  moveOptions: function() {
    if (this.gridMoveX === this.currentX || this.gridMoveY === this.currentY) {
      console.log('gridx:'+this.gridMoveX)
      console.log('gridy:'+this.gridMoveY)
      console.log('currentx:'+this.currentX)
      console.log('currenty:'+this.currentY)
      this.options = [];
      this.updateGrid();
    }
  },
  updateGrid: function() {
    if(this.dirX === this.xSpeed && this.dirX != 0) {
      this.newPath();
      console.log('inupdate')
    } else if (this.dirY === this.ySpeed && this.dirY != 0) {
      this.newPath();
      console.log('inupdate')

    }
  },
  newPath: function() {
    switch(this.dirX) {
    case this.speed:
      if(levelone.path[this.currentY][this.currentX+2] === 1) {this.options.push('right');}
      if(levelone.path[this.currentY+1][this.currentX+1] === 1) {this.options.push('down');}
      if(levelone.path[this.currentY-1][this.currentX+1] === 1) {this.options.push('up');}
      break;
    case -this.speed:
      if(levelone.path[this.currentY][this.currentX-2] === 1) {this.options.push('left');}
      if(levelone.path[this.currentY+1][this.currentX-1] === 1) {this.options.push('down');}
      if(levelone.path[this.currentY-1][this.currentX-1] === 1) {this.options.push('up');}
    }
    switch(this.dirY) {
    case this.speed:
      if(levelone.path[this.currentY+2][this.currentX] === 1) {this.options.push('down');}
      if(levelone.path[this.currentY+1][this.currentX-1] === 1) {this.options.push('left');}
      if(levelone.path[this.currentY+1][this.currentX+1] === 1) {this.options.push('right');}
      break;
    case -this.speed:
      if(levelone.path[this.currentY-2][this.currentX] === 1) {this.options.push('up');}
      if(levelone.path[this.currentY-1][this.currentX+1] === 1) {this.options.push('right');}
      if(levelone.path[this.currentY-1][this.currentX-1] === 1) {this.options.push('left');}
    }
    this.setDirection();
  },
  setDirection: function(){
    var rand = this.options[Math.floor(Math.random() * this.options.length)];
    this.intendedDirection = rand;
    console.log(this.intendedDirection)
    console.log('update: '+(this.posX+10)/20|0)
    if (this.intendedDirection === 'right') { this.gridMoveX = (this.posX+10)/20|0 + 1; }
    if (this.intendedDirection === 'left') { this.gridMoveX = (this.posX+10)/20|0 - 1; }
    if (this.intendedDirection === 'up') { this.gridMoveY = (this.posY+10)/20|0 - 1; }
    if (this.intendedDirection === 'down') { this.gridMoveY = (this.posY+10)/20|0 + 1; }
  },
};
