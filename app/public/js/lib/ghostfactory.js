var GhostFactory = function(tileSize) {
  this.tileSize = tileSize;
  this.ghosts = [];
};

GhostFactory.prototype = {
  new: function(name, tileX, tileY, ghostSpriteNumber, scatX, scatY) {
    switch(name){
    case 'Bertie': //Hunt Pacman Current. POS 0 in array
      return new Ghost(new Image(),tileX, tileY, this.tileSize, ghostSpriteNumber,scatX, scatY);
    case 'Paul': // Hunt 4 Tiles in Front of Pacman
      return new Ghost(new Image(),tileX, tileY, this.tileSize, ghostSpriteNumber,scatX, scatY);
    case 'Henry': //Runs away when Pacman is within 8 tiles. Otherwise hunt Pacman
      return new Ghost(new Image(),tileX, tileY, this.tileSize, ghostSpriteNumber,scatX, scatY);
    case 'Sulaiman': //Takes tile two in front pacman and then takes opposing vector from that and Bertie
      return new Ghost(new Image(),tileX, tileY, this.tileSize, ghostSpriteNumber,scatX, scatY);
    default:
    }
  },

  update: function(posX, posY, xSpeed, ySpeed, speed) {
    this.pacmanX = posX;
    this.pacmanY = posY;
    this.pacmanXSpeed = xSpeed;
    this.pacmanYSpeed = ySpeed;
    this.pacmanSpeed = speed;
    if (this.ghosts[0].died === false) { this.updateBertie(); }
    if (this.ghosts[1].died === false) { this.updatePaul(); }
    if (this.ghosts[2].died === false) { this.updateHenry(); }
    if (this.ghosts[3].died === false) { this.updateSulaiman(); }
  },
  updateBertie: function() {
    this.ghosts[0].ifHuntTile.x = this.pacmanX;
    this.ghosts[0].ifHuntTile.y = this.pacmanY;
    this.ghosts[0].speed = (this.pacmanSpeed * 0.75);
  },
  updatePaul: function() {
    // Use speed to determin direction and then use that to create +4 onto position vector. -3 is Left, +3 is right. -3 is Up, +3 is down
    if (this.pacmanXSpeed > 0) { //Pacman's X speed is greater than 0 so he is moving right
      this.ghosts[1].ifHuntTile.x = this.pacmanX + 4;
      this.ghosts[1].ifHuntTile.y = this.pacmanY;
    } else if (this.pacmanXSpeed < 0) { //Pacman's X speed is less than 0 so he is moving left
      this.ghosts[1].ifHuntTile.x = this.pacmanX - 4;
      this.ghosts[1].ifHuntTile.y = this.pacmanY;
    } else if (this.pacmanYSpeed > 0) { //Pacman's Y speed is greater that 0 so he is moving down
      this.ghosts[1].ifHuntTile.x = this.pacmanX;
      this.ghosts[1].ifHuntTile.y = this.pacmanY + 4;
    } else if (this.pacmanYSpeed < 0) { //Pacman's Y speed is less than 0 so he is moving Up
      this.ghosts[1].ifHuntTile.x = this.pacmanX;
      this.ghosts[1].ifHuntTile.y = this.pacmanY - 4;
    }
    // this.ghosts[1].speed = this.pacmanSpeed * 0.75;
  },
  updateHenry: function(){
    if (this.ghosts[2].tilePosX + 8 >= this.pacmanX || this.ghosts[2].tilePosX - 8 >= this.pacmanX || this.ghosts[2].tilePosY + 8 <= this.pacmanY || this.ghosts[2].tilePosY - 8 <= this.pacmanY){
      this.ghosts[2].ifHuntTile.x = 2;
      this.ghosts[2].ifHuntTile.y = 25;
    } else {
      this.ghosts[2].ifHuntTile.x = this.pacmanX;
      this.ghosts[2].ifHuntTile.y = this.pacmanY;
    }
  },
  updateSulaiman: function(){
    var tempTargetX = 0;
    var tempTargetY = 0;
    var bertieX = this.ghosts[0].tilePosX;
    var bertieY = this.ghosts[0].tilePosY;
    if (this.pacmanXSpeed > 0) { //Pacman's X speed is greater than 0 so he is moving right
      tempTargetX = this.pacmanX + 2;
      tempTargetY = this.pacmanY;
      this.ghosts[3].ifHuntTile.x = tempTargetX + (this.pacmanX - bertieX);
      this.ghosts[3].ifHuntTile.y = tempTargetY + (this.pacmanY - bertieY);
    } else if (this.pacmanXSpeed < 0) { //Pacman's X speed is less than 0 so he is moving left
      tempTargetX = this.pacmanX - 2;
      tempTargetY = this.pacmanY;
      this.ghosts[3].ifHuntTile.x = tempTargetX + (this.pacmanX - bertieX);
      this.ghosts[3].ifHuntTile.y = tempTargetY + (this.pacmanY - bertieY);
    } else if (this.pacmanYSpeed > 0) { //Pacman's Y speed is greater that 0 so he is moving down
      tempTargetX = this.pacmanX;
      tempTargetY = this.pacmanY + 2;
      this.ghosts[3].ifHuntTile.x = tempTargetX + (this.pacmanX - bertieX);
      this.ghosts[3].ifHuntTile.y = tempTargetY + (this.pacmanY - bertieY);
    } else if (this.pacmanYSpeed < 0) { //Pacman's Y speed is less than 0 so he is moving Up
      tempTargetX = this.pacmanX;
      tempTargetY = this.pacmanY - 2;
      this.ghosts[3].ifHuntTile.x = tempTargetX + (this.pacmanX - bertieX);
      this.ghosts[3].ifHuntTile.y = tempTargetY + (this.pacmanY - bertieY);
    }
  },
  resetPacDeath: function() {
    for(i=0;i<this.ghosts.length;i++) {
      this.ghosts[i].resetDeath();
    }
  },
  frightened: function() {
    for(i=0;i<this.ghosts.length;i++) {
      this.ghosts[i].speed = this.pacmanSpeed * 0.5;
      this.ghosts[i].random = true;
      // this.ghosts[i].img = '/img/frightened-ghosts-v1.png';
    }
  },
  frightenedRevert: function() {
    for(i=0;i<this.ghosts.length;i++) {
      this.ghosts[i].random = false;
      this.ghosts[i].speed = this.pacmanSpeed * 0.75;
      // this.ghosts[i].img = '/img/frightened-ghosts-v1.png';
    }
  },
};

//IF TIME REFACTOR SO PAC MAN'S DIRECTION PERSISTS
