const GameDrawer = function(canvasId){
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext('2d');
  var canvasSize = { x: canvas.width, y: canvas.height }

  var self = this;
  var tick = function() {
    self.update();
    self.draw(ctx);
    requestAnimationFrame(tick);
  };

  tick();
};

GameDrawer.prototype = {
  update: function() {

  },

  draw: function(ctx) {

  }
};
