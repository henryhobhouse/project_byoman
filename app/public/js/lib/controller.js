var Controller = function(canvasId) {
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext('2d');
  var canvasSize = { x: canvas.width, y: canvas.height };
  var game = new Game();
  var renderer = new Renderer(ctx);
  var tick = function() {
    this.game.update();
    this.renderer.draw(this.canvasSize, this.game.bodies);
    requestAnimationFrame(tick);
  };
  tick();

};

Controller.prototype = {
  // tick: function() {
  //   this.game.update();
  //   this.renderer.draw(this.canvasSize, this.game.bodies);
  //   requestAnimationFrame(tick);
  // }
};
