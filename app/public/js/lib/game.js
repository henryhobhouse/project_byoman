var Game = function() {
  this.bodies = [];
<<<<<<< Updated upstream

  this.food = [];
=======
  this.coordinates = [[140,40], [140,80], [140,120], [140, 160], [180,40], [180,80], [180, 120], [180,160], [220,40], [220,80], [220,120], [220,160], [260,40],
    [260,80], [260, 120], [260,160]];
  this.createScoreObject();
  this.createFoodObjects();
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
  createDots: function() {
    var numCols = 27;
    var numRows = 32;
    for (var c =0; c < numCols; c++){
      for (var r = 0; r < numRows; r++){
        food = new Food(c* 20 +20,r*20 + 20);
        this.food.push(food);
      }
=======
  createFoodObjects: function(){
    var numberOfCoordinates = this.coordinates.length;
    for (i = 0; i < numberOfCoordinates; i++) {
      var food = new Food(this.coordinates[i][0], this.coordinates[i][1]);
      this.bodies.push(food);
>>>>>>> Stashed changes
    }
  }
};
