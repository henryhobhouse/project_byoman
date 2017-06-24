// Interface between redenering and logic objects
var Controller = function(canvasId) {
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext('2d');
  this.canvasSize = { x: canvas.width, y: canvas.height };
  var canvasCenter = {x: canvas.width / 2, y: canvas.height / 2};
  this.game = new Game();
  this.renderer = new Renderer(ctx, canvasCenter);
  var self = this;

  var tick = function() {
    self.game.update();
    self.renderer.draw(self.canvasSize, self.game.bodies);
    requestAnimationFrame(tick);
  };
  tick();
};
