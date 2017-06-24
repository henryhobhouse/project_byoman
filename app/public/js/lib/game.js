//controls game logic. Does not see canvas or anything to do with rendering
var Game = function() {
  this.score = new Score();
  var pacman = new PacMan(new Image(), new Keyboard());
  this.bodies = { pacman: pacman, foods: [], score: this.score, walls: [] };
  this.coordinates = [];
  this.createFoodObjects();
  this.createWallObjects();
  this.collision = new Collision();
};

Game.prototype = {
  update: function() {
    this.bodies.pacman.update();
    this.checkFoodCollision();
    this.checkWallCollision();
  },
  createFoodObjects: function(){
    for (i = 0; i < levelone.foodPos.length; i++) {
      var food = new Food(levelone.foodPos[i][0], levelone.foodPos[i][1]);
      this.bodies.foods.push(food);
    }
  },
  createWallObjects: function(){
    for (i = 0; i < levelone.wallPos.length; i++) {
      var wall = new Wall(new Image(),
                          levelone.wallPos[i][0],
                          levelone.wallPos[i][1]
                          );
      this.bodies.walls.push(wall);
    }
  },
  destroyFood: function(j) {
    var index = this.bodies.foods.indexOf(this.bodies.foods[j]);
    this.bodies.foods.splice(index, 1);
    this.bodies.score.updateFood();
    this.bodies.score.update();
  },
  checkFoodCollision: function() {
    for (var i = 0; i < this.bodies.foods.length; i++) {
      this.collision.foodColliding(this.bodies.pacman, this.bodies.foods[i]);
      if (this.collision.food == true) {
        this.destroyFood(i);
      }
    }
  },
  checkWallCollision: function() {
    for (var j = 0; j < this.bodies.walls.length; j++) {
      this.collision.wallColliding(this.bodies.pacman, this.bodies.walls[j]);
      if (this.collision.wall.up === true) {
        this.bodies.pacman.wallColliding = this.collision.wall;
        this.bodies.pacman.velocity(0, 0);
      }
    }
  }
};
