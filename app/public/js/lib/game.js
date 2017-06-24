//controls game logic. Does not see canvas or anything to do with rendering
var Game = function() {
  this.score = new Score();
  var pacman = new PacMan(new Image(), new Keyboard());
  this.bodies = { pacman: pacman, foods: [], score: this.score };
  this.coordinates = [];
  this.createFoodObjects();
  this.collision = new Collision();
};

Game.prototype = {
  update: function() {
    this.bodies.pacman.update();
    for (var j = 0; j < this.bodies.foods.length; j++) {
      this.collision.foodColliding(this.bodies.pacman, this.bodies.foods[j]);
      if (this.collision.food == true) {
        this.destroyFood(j);
      }
    }
  },
  createFoodObjects: function(){
    for (i = 0; i < levelone.foodlocs.length; i++) {
      var food = new Food(levelone.foodlocs[i][0], levelone.foodlocs[i][1]);
      this.bodies.foods.push(food);
    }
  },
  destroyFood: function(j) {
    var index = this.bodies.foods.indexOf(this.bodies.foods[j]);
    this.bodies.foods.splice(index, 1);
    this.bodies.score.updateFood();
    this.bodies.score.update();
  }
};
