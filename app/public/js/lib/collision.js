var Collision = function(tileSize) {
  this.tileSize = tileSize;
  this.food = false;
  this.ghost = false;
  this.pacman = null;
  this.halfTile = this.tileSize/2;
};

Collision.prototype = {
  updatePacman: function() {
    this.pacmanXCenter = this.pacman.posX + this.halfTile;
    this.pacmanYCenter = this.pacman.posY + this.halfTile;
  },
  foodColliding: function(obj2) {
    var offset = this.pacman.img.size / 2 - 3;
    this.isColliding(obj2.posX, obj2.posY, offset) ? this.food = true : this.food = false;
  },
  ghostColliding: function(obj2) {
    var obj2posX = obj2.posX + this.halfTile;
    var obj2posY = obj2.posY + this.halfTile;
    this.isColliding(obj2posX, obj2posY, this.pacman.img.size) ? this.ghost = true : this.ghost = false;
  },
  isColliding: function(obj2PosX, obj2PosY, offset) {
    this.updatePacman();
    return  !(
      this.pacmanXCenter <= obj2PosX - offset ||
      this.pacmanYCenter <=  obj2PosY - offset ||
      this.pacmanXCenter >= obj2PosX + offset ||
      this.pacmanYCenter >= obj2PosY + offset
    );
  }
};
