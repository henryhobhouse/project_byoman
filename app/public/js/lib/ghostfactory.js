var GhostFactory = function(tileSize) {
  this.tileSize = tileSize;
  this.ghosts = [];
};

GhostFactory.prototype = {
  new: function(name, gridX, gridY) {
    switch(name){
    case 'Bertie': //Hunt Pacman Current
      return new Ghost(new Image(),gridX, gridY, this.tileSize);
    case 'Paul': //Hunt 4 Tiles in Front of Pacman
      return new Ghost(new Image(),gridX, gridY, this.tileSize);
    case 'Henry': //Random when outside 8 tiles. Otherwise hunt Pacman
      return new Ghost(new Image(),gridX, gridY, this.tileSize);
    case 'Sulaiman': //Takes tile two in front pacman and then takes opposing vector from that and Bertie
      return new Ghost(new Image(),gridX, gridY, this.tileSize);
    default:
    }
  }
};
