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
    case 'Henry': //Random when outside 8 tiles. Otherwise hunt Pacman
      return new Ghost(new Image(),tileX, tileY, this.tileSize);
    case 'Sulaiman': //Takes tile two in front pacman and then takes opposing vector from that and Bertie
      return new Ghost(new Image(),tileX, tileY, this.tileSize);
    default:
    }
  },

  update: function(posX, posY, xSpeed, ySpeed) {
    this.posX = posX;
    this.posY = posY;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.updateBertie();
    this.updatePaul();
    // updateHenry();
    // updateSulaiman();
  },
  updateBertie: function() {
    this.ghosts[0].huntTile.x = this.posX;
    this.ghosts[0].huntTile.y = this.posY;
  },
  updatePaul: function() {
    // Use speed to determin direction and then use that to create +4 onto position vector
    this.ghosts[1].huntTile.x = this.posX;
    this.ghosts[1].huntTile.y = this.posY;
  }
};
