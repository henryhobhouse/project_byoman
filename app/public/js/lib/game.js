//controls game logic. Does not see canvas or anything to do with rendering
var Game = function(tileSize) {
  this.score = new Score();
  this.tileSize = tileSize;
  this.bodies = { pacman: null, foods: [], score: this.score, walls: [] };
  this.coordinates = [];
  this.collision = new Collision();
  this.mapObjects();
};

Game.prototype = {
  update: function() {
    this.bodies.pacman.update();
    this.checkFoodCollision();
    // this.checkWallCollision();
  },
  mapObjects: function(){
    for(var y = 0; y < levelone.map.length; y++) {
      for(var x = 0; x < levelone.map[0].length; x++){
        switch(levelone.map[y][x]) {
        case 0:
          var wall = new Wall(new Image(),x,y, this.tileSize);
          this.bodies.walls.push(wall);
          break;
        case 1:
          var food = new Food(x, y, this.tileSize);
          this.bodies.foods.push(food);
          break;
        case 3:
          var pacman = new PacMan(new Image(), new Keyboard(), x, y, this.tileSize);
          this.bodies.pacman = pacman;
          break;
        default:
        }
      }
    }
  },
  checkFoodCollision: function() {
    for (var i = 0; i < this.bodies.foods.length; i++) {
      this.collision.foodColliding(this.bodies.pacman, this.bodies.foods[i]);
      if (this.collision.food == true) {
        this.destroyFood(i);
      }
    }
  },
  destroyFood: function(j) {
    var index = this.bodies.foods.indexOf(this.bodies.foods[j]);
    this.bodies.foods.splice(index, 1);
    this.bodies.score.scoreFood();
    this.bodies.score.update();
  }
  // checkWallCollision: function() {
  //   for (var j = 0; j < this.bodies.walls.length; j++) {
  //     this.collision.wallColliding(this.bodies.pacman, this.bodies.walls[j]);
  //     if (this.collision.wall.up === true) {
  //       this.bodies.pacman.wallColliding = this.collision.wall;
  //       this.bodies.pacman.velocity(0, 0);
  //     }
  //   }
  // }
};
