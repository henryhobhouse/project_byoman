var Collision = function(tileSize) {
  this.tileSize = tileSize;
  this.food = false;
  this.superFood = false;
  this.ghost = false;
  this.pacman = null;
  this.halfTile = this.tileSize/2;
};

Collision.prototype = {
  updatePacman: function() {
    this.pacmanXCenter = this.pacman.posX + this.halfTile;
    this.pacmanYCenter = this.pacman.posY + this.halfTile;
  },
  foodColliding: function(obj2, type) {
    var offset = 4;
    if (type === 'food') {
      this.food = this.isColliding(obj2.posX, obj2.posY, offset);
    } else {
      this.superFood = this.isColliding(obj2.posX, obj2.posY, offset);
    }
  },
  ghostColliding: function(obj2) {
    var offset = this.pacman.img.size / 2 + 3;
    var obj2posX = obj2.posX + this.halfTile;
    var obj2posY = obj2.posY + this.halfTile;
    this.ghost = this.isColliding(obj2posX, obj2posY, offset);
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
