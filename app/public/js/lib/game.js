//controls game logic. Does not see canvas or anything to do with rendering
var Game = function(tileSize) {
  this.tileSize = tileSize;
  this.bodies = { pacman: null, foods: [], score: null, walls: [], ghosts: [], lives: null };
  this.coordinates = [];
  this.collision = new Collision(this.tileSize);
  this.mapObjects();
  this.load = false;
  this.uiUpdate = false;
  this.finish = false;
};

Game.prototype = {
  update: function() {
    this.bodies.pacman.update();
    for(i=0;i<this.bodies.ghosts.length;i++){
      this.bodies.ghosts[i].update();
    }
    this.checkFoodCollision();
    this.checkGhostCollision();
    this.gameOver();
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
          ghost = new Ghost(new Image(),'/img/red_ghost_spritesheet.png', x, y, this.tileSize);
          this.bodies.ghosts.push(ghost);
          break;
        case 6:
          ghost = new Ghost(new Image(),'/img/Pinky.png', x, y, this.tileSize);
          this.bodies.ghosts.push(ghost);
          break;
        case 7:
          ghost = new Ghost(new Image(),'/img/Inky.png', x, y, this.tileSize);
          this.bodies.ghosts.push(ghost);
          break;
        case 8:
          ghost = new Ghost(new Image(),'/img/Clyde.png', x, y, this.tileSize);
          this.bodies.ghosts.push(ghost);
          break;
        case 9:
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
    this.uiUpdate = true;
  },
  killPacman: function() {
    if (this.bodies.lives.remaining > 0) {
      this.bodies.lives.removeLife();
      this.bodies.pacman.deathReset();
      this.bodies.lives.update();
      this.uiUpdate = true;
    }
    else { this.finish = true; }
  },
  gameOver: function(){
    if (this.bodies.foods.length == 0) {
      alert('Congratulations. A Winner is you!!!!!!');
    }
  }
};
