var Collision = function(tileSize) {
  this.tileSize = tileSize;
  this.food = false;
};

Collision.prototype = {
  foodColliding: function(obj1, obj2) {
    isColliding(obj1, obj2, this.tileSize) ? this.food = true : this.food = false;
  }
};

var isColliding = function(obj1, obj2, tileSize) {
  return  !(
    obj1.posX + tileSize <= obj2.posX ||
    obj1.posY + tileSize <=  obj2.posY ||
    obj1.posX >= obj2.posX ||
    obj1.posY >= obj2.posY
  );
};
