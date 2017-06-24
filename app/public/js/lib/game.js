//controls game logic. Does not see canvas or anything to do with rendering
var Game = function() {
  this.score = new Score();
  var pacman = new PacMan(new Image(), new Keyboard());
  this.bodies = { pacman: pacman, foods: [], score: this.score };
  this.coordinates = [[140,40], [140,80], [140,120], [140, 160], [180,40], [180,80], [180, 120], [180,160], [220,40], [220,80], [220,120], [220,160], [260,40],
    [260,80], [260, 120], [260,160]];
  this.createFoodObjects();
  this.collision = new Collision();
};

Game.prototype = {
  update: function() {
    this.bodies.pacman.update();

    for (var j = 0; j < this.bodies.foods.length; j++) {
      this.collision.foodColliding(this.bodies.pacman, this.bodies.foods[j]);
      if (this.collision.food == true) {
        var index = this.bodies.foods.indexOf(this.bodies.foods[j]);
        this.bodies.foods.splice(index, 1);
        this.bodies.score.updatefood();
        this.bodies.score.update();
      }
    }
  },

  createFoodObjects: function(){
    var numberOfCoordinates = this.coordinates.length;
    for (i = 0; i < numberOfCoordinates; i++) {
      var food = new Food(this.coordinates[i][0], this.coordinates[i][1]);
      this.bodies.foods.push(food);
    }
  }
};
