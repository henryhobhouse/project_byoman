var Game = function() {
  this.bodies = [];

  this.food = [];
};

Game.prototype = {
  update: function() {
    for (var i = 0; i < this.bodies.length; i++) {
      this.bodies[i].update();
    }
  },

  createPacmanObject: function(canvasSize) {
    var pacman = new PacMan(canvasSize, new Image(), new Keyboard());
    this.bodies.push(pacman);
  },

  createScoreObject: function() {
    var score = new Score();
    this.bodies.push(score);
  },

  createDots: function() {
    var numCols = 27;
    var numRows = 32;
    for (var c =0; c < numCols; c++){
      for (var r = 0; r < numRows; r++){
        food = new Food(c* 20 +20,r*20 + 20);
        this.food.push(food);
      }
    }
  }
};
