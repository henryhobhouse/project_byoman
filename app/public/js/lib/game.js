//controls game logic. Does not see canvas or anything to do with rendering
var Game = function(tileSize) {
  this.tileSize = tileSize;
  this.bodies = {
    pacman: null,
    foods: [],
    score: null,
    walls: [],
    ghostFactory: new GhostFactory(tileSize),
    lives: null,
    superFood: []
  };
  this.coordinates = [];
  this.ghosts = this.bodies.ghostFactory.ghosts;
  this.collision = new Collision(this.tileSize);
  this.mapObjects();
  this.load = false;
  this.uiUpdate = false;
  this.finish = false;
  this.timerOn = false;
  this.timer = new Timer();
  this.game = true;
};

Game.prototype = {
  update: function() {
    pacman = this.bodies.pacman;
    pacman.update();
    for(i=0;i<this.ghosts.length;i++){
      this.ghosts[i].update();
    }
    this.bodies.ghostFactory.update(pacman.tilePosX, pacman.tilePosY, pacman.xSpeed, pacman.ySpeed, pacman.speed);
    this.checkFoodCollision();
    this.checkGhostCollision();
    this.checkSuperFoodCollision();
    if (this.timerOn) { this.checktimer(); }
  },
  checktimer: function() {
    this.timer.update();
    if (this.timer.getTimeDiff() > 500000) {
      this.timer.reset();
      this.timerOn = false;
      this.bodies.ghostFactory.frightenedRevert();
    }
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
          ghost = this.bodies.ghostFactory.new('Bertie', x, y, 0, 19, 0);
          this.ghosts.push(ghost);
          break;
        case 6:
          ghost = this.bodies.ghostFactory.new('Paul', x, y, 4, 3, 0);
          this.ghosts.push(ghost);
          break;
        case 7:
          ghost = this.bodies.ghostFactory.new('Henry', x, y, 8, 0, 35);
          this.ghosts.push(ghost);
          break;
        case 8:
          ghost = this.bodies.ghostFactory.new('Sulaiman', x, y, 12, 19, 35);
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
      this.collision.foodColliding(this.bodies.foods[i], 'food');
      if (this.collision.food === true) {
        this.destroyFood(i);
        this.pacmanWins();
      }
    }
  },
  checkGhostCollision: function() {
    for (var i = 0; i < this.ghosts.length; i++) {
      this.collision.ghostColliding(this.ghosts[i]);
      if (this.collision.ghost === true && this.timerOn ) {
        this.killGhost(i);
      } else if (this.collision.ghost === true) {
        this.killPacman();
      }
    }
  },
  checkSuperFoodCollision: function() {
    for (var i = 0; i < this.bodies.superFood.length; i++) {
      this.collision.foodColliding(this.bodies.superFood[i]);
      if (this.collision.superFood === true) { this.destroySuper(i); }
    }
  },
  destroySuper: function(j) {
    var index = this.bodies.superFood.indexOf(this.bodies.superFood[j]);
    this.bodies.superFood.splice(index, 1);
    this.bodies.ghostFactory.frightened();
    this.bodies.score.scoreSuperFood();
    this.bodies.score.update();
    this.timer.reset();
    this.timer.start();
    this.timerOn = true;
  },

  destroyFood: function(j) {
    var index = this.bodies.foods.indexOf(this.bodies.foods[j]);
    this.bodies.foods.splice(index, 1);
    this.bodies.score.scoreFood();
    this.bodies.score.update();
    this.uiUpdate = true;
  },

  killGhost: function(i) {
    this.ghosts[i].resetDeath();
    this.bodies.score.scoreEatGhost();
    this.bodies.score.update();
  },

  killPacman: function() {
    if (this.bodies.lives.remaining > 1) {
      this.bodies.lives.removeLife();
      this.bodies.lives.update();
      this.uiUpdate = true;
      this.bodies.pacman.deathReset();
      this.bodies.ghostFactory.resetPacDeath();
    }
    else { this.game = false; }
  },

  pacmanWins: function() {
    if (this.bodies.foods.length == 0) {
      this.game = false;
    }
  },

};
