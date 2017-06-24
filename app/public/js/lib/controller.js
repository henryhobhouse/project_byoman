// Interface between redenering and logic objects
var Controller = function(canvasId) {
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext('2d');
  this.canvasSize = { x: canvas.width, y: canvas.height };
  var canvasCenter = {x: canvas.width / 2, y: canvas.height / 2};
  this.game = new Game();
  this.renderer = new Renderer(ctx, canvasCenter);
  this.currentSecond = 0;
  this.frameCount = 0;
  this.framesLastSecond = 0;
  var self = this;

  var tick = function() {
    self.game.update();
    self.renderer.draw(self.canvasSize, self.game.bodies, self.framesLastSecond);
    //the below variable and if statement for development purposes only. 
    var sec = Math.floor(Date.now()/1000);
    if(sec!=self.currentSecond) {
      self.currentSecond = sec;
      self.framesLastSecond = self.frameCount;
      self.frameCount = 1;
    } else {
      self.frameCount++;
    }
    requestAnimationFrame(tick);
  };
  tick();
};
