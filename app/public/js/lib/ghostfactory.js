var GhostFactory = function(tileSize) {
  this.tileSize = tileSize;
  this.ghosts = [];
};

GhostFactory.prototype = {
  new: function(name, tileX, tileY) {
    switch(name){
    case 'Bertie': //Hunt Pacman Current
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

  update: function(posX, posY) {
    updateBertie(posX, posY);
    // updatePaul(posX, posY);
    // updateHenry(posX, posY);
    // updateSulaiman(posX, posY);
  },
  updateBertie: function(posX, posY) {
    this.ghosts[0].huntTile.x = posX;
    this.ghosts[0].huntTile.y = posY;
  }
};
