//controls game logic. Does not see canvas or anything to do with rendering
var Game = function(tileSize) {
  this.tileSize = tileSize;
  this.bodies = { pacman: null, foods: [], score: null, walls: [], ghostFactory: new GhostFactory(tileSize), lives: null,superFood:[] };
  this.coordinates = [];
  this.ghosts = this.bodies.ghostFactory.ghosts;
  this.collision = new Collision(this.tileSize);
  this.mapObjects();
  this.load = false;
  this.uiUpdate = false;
  this.finish = false;
};

Game.prototype = {
  update: function() {
    pacman = this.bodies.pacman;
    pacman.update();
    for(i=0;i<this.ghosts.length;i++){
      this.ghosts[i].update();
    }
    this.bodies.ghostFactory.update(pacman.tilePosX, pacman.tilePosY, pacman.xSpeed, pacman.ySpeed,pacman.speed);
    this.checkFoodCollision();
    this.checkGhostCollision();
  },
  mapObjects: function(){
    for(var y = 0; y < levelone.map.length; y++) {
      for(var x = 0; x < levelone.map[0].length; x++){
        switch(levelone.map[y][x]) {
        case s:
          var superFood = new SuperFood(x,y, this.tileSize);
          this.bodies.superFood.push(superFood);
          break;
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
          ghost = this.bodies.ghostFactory.new('Bertie', x, y);
          this.ghosts.push(ghost);
          break;
        case 6:
          ghost = this.bodies.ghostFactory.new('Paul', x, y);
          this.ghosts.push(ghost);
          break;
        case 7:
          ghost = this.bodies.ghostFactory.new('Henry', x, y);
          this.ghosts.push(ghost);
          break;
        case 8:
          ghost = this.bodies.ghostFactory.new('Sulaiman', x, y);
          this.ghosts.push(ghost);
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
      if (this.collision.food === true) { this.destroyFood(i); }
    }
  },
  checkGhostCollision: function() {
    for (var i = 0; i < this.ghosts.length; i++) {
      this.collision.ghostColliding(this.ghosts[i]);
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
    if (this.bodies.lives.remaining > 0 && this.bodies.foods.length > 0) {
      this.bodies.lives.removeLife();
      this.bodies.lives.update();
      this.uiUpdate = true;
      this.bodies.pacman.deathReset();
      this.bodies.ghostFactory.resetPacDeath();
    }
    else { this.gameOver(); }
  },
  gameOver: function() {
    if (this.bodies.foods.length === 0) {
      alert('Congratulations. A Winner is you!!!!!!');
    } else {
      alert('You are a victim of random behaviour. Predictable. Drop Mic.');
    }
  }
};
