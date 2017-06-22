var Game = function() {
  this.bodies = [];
};

Game.prototype = {
  update: function() {
    for (var i = 0; i < this.bodies.length; i++) {
      this.bodies[i].update();
    }
  },

  // draw: function(ctx, canvasSize) {
  //   ctx.clearRect(0, 0, canvasSize.x, canvasSize.y);
  //   for ( var i = 0; i < this.bodies.length; i++) {
  //     drawImg(ctx, this.bodies[i]);
  //   }
  // },

  createPacmanObject: function(canvasSize) {
    var pacman = new PacMan(canvasSize);
    this.bodies.push(pacman);
  }

};
