//controls game logic. Does not see canvas or anything to do with rendering
var Game = function(tileSize) {
  this.tileSize = tileSize;
  this.bodies = { pacman: null, foods: [], score: null, walls: [], ghosts: [] };
  this.coordinates = [];
  this.collision = new Collision(this.tileSize);
  this.mapObjects();
  this.load = false;
  this.foodUpdate = false;
};

Game.prototype = {
  update: function() {
    this.bodies.pacman.update();
    this.checkFoodCollision();
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
        case 4:
          score = new Score(x, y, this.tileSize);
          this.bodies.score = score;
          break;
        case 5:
          redGhost = new Ghost(new Image(), x, y, this.tileSize);
          this.bodies.ghosts.push(redGhost);
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
    this.foodUpdate = true;
  },
};
