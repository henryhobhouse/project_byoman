var Controller = function(canvasId) {
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext('2d');
  this.canvasSize = { x: canvas.width, y: canvas.height };
  this.game = new Game();
  this.renderer = new Renderer(ctx);
  var self = this;
  
  var tick = function() {
    self.game.update();
    self.renderer.draw(self.canvasSize, self.game.bodies);
    requestAnimationFrame(tick);
  };
  tick();
};
