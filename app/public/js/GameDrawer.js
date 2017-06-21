const GameDrawer = function(canvasId, game){
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext('2d');
  var canvasSize = { x: canvas.width, y: canvas.height }
  this.game = game
  this.game.createPacmanObject(canvasSize);
  var self = this;

  var tick = function() {
    self.update();
    self.draw(ctx, canvasSize);
    requestAnimationFrame(tick);
  };

  tick();
};

GameDrawer.prototype = {
  update: function() {
    this.game.update();
  },

  draw: function(ctx, canvasSize) {
    this.game.draw(ctx, canvasSize);
  }
};

var drawImg = function(ctx, body) {
  ctx.drawImage( body.img,
                 body.canvasPos.x,
                 body.canvasPos.y,
                 body.img.width,
                 body.img.height )
};
