var GhostFactory = function(tileSize) {
  this.tileSize = tileSize;
};

GhostFactory.prototype = {
  new: function(name, gridX, gridY) {
    switch(name){
    case 'Bertie': //Hunt Pacman Current
        this.bertie = new Ghost(image,gridX, gridY, tileSize)
      break;
    case 'Paul': //Hunt 4 Tiles in Front of Pacman

      break;
    case 'Henry': //Random when outside 8 tiles. Otherwise hunt Pacman

      break;
    case 'Sulaiman': //Takes tile two in front pacman and then takes opposing vector from that and Bertie

      break;
    default:
    }
  }
};
