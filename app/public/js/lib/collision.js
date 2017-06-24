var Collision = function() {
  this.food = false;
  this.wall = false;
};

Collision.prototype = {
  wallColliding: function(obj1, obj2) {
    isColliding(obj1, obj2) ? this.wall = true : this.wall = false;
  },
  foodColliding: function(obj1, obj2) {
    isColliding(obj1, obj2) ? this.food = true : this.food = false;
  }
};

var isColliding = function(obj1, obj2) {
  return  !( obj1.canvasPos.x + obj1.size.x  / 2 <= obj2.canvasPos.x - obj2.size.x  / 2 ||
             obj1.canvasPos.y + obj1.size.y / 2 <=  obj2.canvasPos.y - obj2.size.y / 2 ||
             obj1.canvasPos.x - obj1.size.x  / 2 >= obj2.canvasPos.x + obj2.size.x  / 2 ||
             obj1.canvasPos.y - obj1.size.y / 2 >= obj2.canvasPos.y + obj2.size.y  / 2 );
};
