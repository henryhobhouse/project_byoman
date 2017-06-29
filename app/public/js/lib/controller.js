// Interface between redenering and logic objects
var Controller = function(animateId,fixedId,uiId) {
  var TILESIZE = 20;
  var animateCanvas = document.getElementById(animateId);
  var animateCtx = animateCanvas.getContext('2d');
  var fixedCanvas = document.getElementById(fixedId);
  var fixedCtx = fixedCanvas.getContext('2d');
  var uiCanvas = document.getElementById(uiId);
  var uiCtx = uiCanvas.getContext('2d');
  var canvasSize = { x: fixedCanvas.width, y: fixedCanvas.height };
  this.delayticker = 0;
  this.game = new Game(TILESIZE);
  this.renderer = new Renderer(animateCtx, fixedCtx, uiCtx, TILESIZE, canvasSize);
  this.currentSecond = 0;
  this.frameCount = 0;
  this.framesLastSecond = 0;
  this.tick();
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
  tick: function() {
    if (this.game.game) {
      this.game.update();
      this.renderer.drawAnimate(this.game.bodies, this.framesLastSecond);
      this.checkUiUpdate();
    } else { this.renderer.endGameDead(); }
    this.fps(this); // For development purposes. Remove for production
    requestAnimationFrame(this.tick.bind(this));
    this.delayStatic();

  },

  checkUiUpdate: function() {
    if (this.game.uiUpdate === true) {
      this.renderer.drawUi(this.game.bodies);
      this.game.uiUpdate = this.game.uiUpdate === true;
    }
  },
  // As renderer doesn't know about game, this method allows game to load first
  delayStatic: function() {
    // Will only call this method for the first second.
    if (this.delayticker < 10) {
      if (this.delayticker < 2) {this.renderer.drawUi(this.game.bodies);}
      this.renderer.drawFixed(this.game.bodies.walls);
      this.delayticker++;
    }
  }
};
