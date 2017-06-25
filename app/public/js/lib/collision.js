var Collision = function() {
  this.food = false;
};

Collision.prototype = {

  foodColliding: function(obj1, obj2) {
    isColliding(obj1, obj2) ? this.food = true : this.food = false;
  }
};

var isColliding = function(obj1, obj2) {
  return  !(
    obj1.posX + 20 <= obj2.posX ||
    obj1.posY + 20 <=  obj2.posY ||
    obj1.posX >= obj2.posX ||
    obj1.posY >= obj2.posY
  );
};
