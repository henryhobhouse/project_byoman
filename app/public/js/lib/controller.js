// Interface between redenering and logic objects
var Controller = function(layerId,staticId) {
  var TILESIZE = 20;
  var layerCanvas = document.getElementById(layerId);
  var layerctx = layerCanvas.getContext('2d');
  var staticCanvas = document.getElementById(staticId);
  var staticctx = staticCanvas.getContext('2d');
  var canvasSize = { x: staticCanvas.width, y: staticCanvas.height };
  this.delayticker = 0;
  this.game = new Game(TILESIZE);
  this.renderer = new Renderer(layerctx, staticctx, TILESIZE, canvasSize);

  this.currentSecond = 0;
  this.frameCount = 0;
  this.framesLastSecond = 0;

  var self = this;
  var tick = function() {
    self.game.update();
    self.renderer.draw(self.game.bodies, self.framesLastSecond);
    self.fps(self); // For development purposes. Remove for production
    requestAnimationFrame(tick);
    self.delayStatic();
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
  },

  delayStatic: function() {
    if (this.delaytick < 10) {
      this.renderer.drawStatic(this.game.bodies.walls);
      this.delayticker++;
    }
  }
};
