//controls game logic. Does not see canvas or anything to do with rendering
var Game = function(tileSize) {
  this.tileSize = tileSize;
  this.bodies = { pacman: null, foods: [], score: null, walls: [], ghosts: [], lives: null };
  this.coordinates = [];
  this.collision = new Collision(this.tileSize);
  this.mapObjects();
  this.load = false;
  this.foodUpdate = false;
  this.finish = false;
  this.collision.ghost = false;
};

Game.prototype = {
  update: function() {
    this.bodies.pacman.update();
    this.bodies.ghosts[0].update();
    this.checkFoodCollision();
    this.checkGhostCollision();
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
          this.collision.pacman = pacman;
          break;
        case 4:
          score = new Score(x, y, this.tileSize);
          this.bodies.score = score;
          break;
        case 5:
          redGhost = new Ghost(new Image(), x, y, this.tileSize);
          this.bodies.ghosts.push(redGhost);
          break;
        case 8:
          lives = new Lives(x, y, this.tileSize);
          this.bodies.lives = lives;
          break;
        default:
        }
      }
    }
  },
  checkFoodCollision: function() {
    for (var i = 0; i < this.bodies.foods.length; i++) {
      this.collision.foodColliding(this.bodies.foods[i]);
      if (this.collision.food == true) { this.destroyFood(i); }
    }
  },
  checkGhostCollision: function() {
    for (var i = 0; i < this.bodies.ghosts.length; i++) {
      this.collision.ghostColliding(this.bodies.ghosts[i]);
      if (this.collision.ghost === true) { this.killPacman(); }
    }
  },
  destroyFood: function(j) {
    var index = this.bodies.foods.indexOf(this.bodies.foods[j]);
    this.bodies.foods.splice(index, 1);
    this.bodies.score.scoreFood();
    this.bodies.score.update();
    this.foodUpdate = true;
  },
  killPacman: function() {
    if (this.bodies.lives > 0) {
      this.bodies.pacman.lives.removeLife;
      this.bodies.lives.update();
    }
    else { this.finish = true; }
  }
};
