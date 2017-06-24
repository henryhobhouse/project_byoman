//controls game logic. Does not see canvas or anything to do with rendering
var Game = function() {
  this.bodies = [];
  this.coordinates = [[140,40], [140,80], [140,120], [140, 160], [180,40], [180,80], [180, 120], [180,160], [220,40], [220,80], [220,120], [220,160], [260,40],
    [260,80], [260, 120], [260,160]];
  this.createScoreObject();
  this.createFoodObjects();
  this.createPacmanObject();
};

Game.prototype = {
  update: function() {
    for (var i = 0; i < this.bodies.length; i++) {
      this.bodies[i].update();
    }
  },

  createPacmanObject: function() {
    var pacman = new PacMan(new Image(), new Keyboard());
    this.bodies.push(pacman);
  },

  createScoreObject: function() {
    var score = new Score();
    this.bodies.push(score);
  },

  createFoodObjects: function(){
    var numberOfCoordinates = this.coordinates.length;
    for (i = 0; i < numberOfCoordinates; i++) {
      var food = new Food(this.coordinates[i][0], this.coordinates[i][1]);
      this.bodies.push(food);
    }
  }
};
