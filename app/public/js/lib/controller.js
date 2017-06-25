// Interface between redenering and logic objects
var Controller = function(layerId,staticId) {
  var TILESIZE = 20;
  var canvas = document.getElementById(layerId);
  var ctx = canvas.getContext('2d');
  this.canvasSize = { x: canvas.width, y: canvas.height };
  this.game = new Game();
  this.renderer = new Renderer(ctx, TILESIZE);
  this.currentSecond = 0;
  this.frameCount = 0;
  this.framesLastSecond = 0;
  var self = this;

  var tick = function() {
    self.game.update();
    self.renderer.draw(self.canvasSize, self.game.bodies, self.framesLastSecond);
    self.fps(self); // For development purposes. Remove for production
    requestAnimationFrame(tick);
  };
  tick();
};

// As temporary method - not pushed into own onject
Controller.prototype = {
  fps: function(self) {
    var sec = Math.floor(Date.now()/1000);
    if(sec!=self.currentSecond) {
      self.currentSecond = sec;
      self.framesLastSecond = self.frameCount;
      self.frameCount = 1;
    } else {
      self.frameCount++;
    }
  }
};
