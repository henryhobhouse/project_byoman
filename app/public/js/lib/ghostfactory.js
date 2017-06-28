var GhostFactory = function(tileSize) {
  this.tileSize = tileSize;
  this.ghosts = [];
};

GhostFactory.prototype = {
  new: function(name, tileX, tileY) {
    switch(name){
    case 'Bertie': //Hunt Pacman Current. POS 0 in array
      return new Ghost(new Image(),tileX, tileY, this.tileSize);
    case 'Paul': // Hunt 4 Tiles in Front of Pacman
      return new Ghost(new Image(),tileX, tileY, this.tileSize);
    case 'Henry': //Runs away whn Pacman is within 8 tiles. Otherwise hunt Pacman
      return new Ghost(new Image(),tileX, tileY, this.tileSize);
    case 'Sulaiman': //Takes tile two in front pacman and then takes opposing vector from that and Bertie
      return new Ghost(new Image(),tileX, tileY, this.tileSize);
    default:
    }
  },

  update: function(posX, posY, xSpeed, ySpeed, speed) {
    this.pacmanX = posX;
    this.pacmanY = posY;
    this.pacmanXSpeed = xSpeed;
    this.pacmanYSpeed = ySpeed;
    this.pacmanSpeed = speed;
    this.updateBertie();
    this.updatePaul();
    this.updateHenry();
    this.updateSulaiman();
  },
  updateBertie: function() {
    this.ghosts[0].huntTile.x = this.pacmanX;
    this.ghosts[0].huntTile.y = this.pacmanY;
    this.ghosts[0].speed = (this.pacmanSpeed * 0.75);
  },
  updatePaul: function() {
    // Use speed to determin direction and then use that to create +4 onto position vector. -3 is Left, +3 is right. -3 is Up, +3 is down
    this.ghosts[1].speed = this.pacmanSpeed * 0.75;
    if (this.pacmanXSpeed > 0) { //Pacman's X speed is greater than 0 so he is moving right
      this.ghosts[1].huntTile.x = this.pacmanX + 4;
      this.ghosts[1].huntTile.y = this.pacmanY;
    } else if (this.pacmanXSpeed < 0) { //Pacman's X speed is less than 0 so he is moving left
      this.ghosts[1].huntTile.x = this.pacmanX - 4;
      this.ghosts[1].huntTile.y = this.pacmanY;
    } else if (this.pacmanYSpeed > 0) { //Pacman's Y speed is greater that 0 so he is moving down
      this.ghosts[1].huntTile.x = this.pacmanX;
      this.ghosts[1].huntTile.y = this.pacmanY + 4;
    } else if (this.pacmanYSpeed < 0) { //Pacman's Y speed is less than 0 so he is moving Up
      this.ghosts[1].huntTile.x = this.pacmanX;
      this.ghosts[1].huntTile.y = this.pacmanY - 4;
    }
    this.ghosts[1].speed = this.pacmanSpeed * 0.75;
  },
  updateHenry: function(){
    if (this.ghosts[2].currentX + 8 >= this.pacmanX || this.ghosts[2].currentX - 8 >= this.pacmanX || this.ghosts[2].currentY + 8 <= this.pacmanY || this.ghosts[2].currentY - 8 <= this.pacmanY){
      this.ghosts[2].huntTile.x = 2;
      this.ghosts[2].huntTile.y = 25;
    } else {
      this.ghosts[2].huntTile.x = this.pacmanX;
      this.ghosts[2].huntTile.y = this.pacmanY;
    }
  },
  updateSulaiman: function(){
    var tempTargetX = 0;
    var tempTargetY = 0;
    var bertieX = this.ghosts[0].currentX;
    var bertieY = this.ghosts[0].currentY;
    if (this.pacmanXSpeed > 0) { //Pacman's X speed is greater than 0 so he is moving right
      tempTargetX = this.pacmanX + 2;
      tempTargetY = this.pacmanY;
      this.ghosts[3].huntTile.x = tempTargetX + (this.pacmanX - bertieX);
      this.ghosts[3].huntTile.y = tempTargetY + (2 * (this.pacmanY - bertieY));
    } else if (this.pacmanXSpeed < 0) { //Pacman's X speed is less than 0 so he is moving left
      tempTargetX = this.pacmanX - 2;
      tempTargetY = this.pacmanY;
      this.ghosts[3].huntTile.x = tempTargetX + (this.pacmanX - bertieX);
      this.ghosts[3].huntTile.y = tempTargetY + (2 * (this.pacmanY - bertieY));
    } else if (this.pacmanYSpeed > 0) { //Pacman's Y speed is greater that 0 so he is moving down
      tempTargetX = this.pacmanX;
      tempTargetY = this.pacmanY + 2;
      this.ghosts[3].huntTile.x = tempTargetX + (this.pacmanX - bertieX);
      this.ghosts[3].huntTile.y = tempTargetY + (2 * (this.pacmanY - bertieY));
    } else if (this.pacmanYSpeed < 0) { //Pacman's Y speed is less than 0 so he is moving Up
      tempTargetX = this.pacmanX;
      tempTargetY = this.pacmanY - 2;
      this.ghosts[3].huntTile.x = tempTargetX + (this.pacmanX - bertieX);
      this.ghosts[3].huntTile.y = tempTargetY + (2 * (this.pacmanY - bertieY));
    }
  }
};

//IF TIME REFACTOR SO PAC MAN'S DIRECTION PERSISTS
