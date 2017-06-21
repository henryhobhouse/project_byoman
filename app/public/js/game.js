var Game = function(Pacman) {
  this.bodies = [Pacman]
};

Game.prototype = {
  update: function() {
    for (var i = 0; i < this.bodies.length; i++) {
      this.bodies[i].update();
    }
  },

};
