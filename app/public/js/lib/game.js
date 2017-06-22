var Game = function() {
  this.bodies = [];
  this.score = [];
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
    this.score.push(score);
  }
};
