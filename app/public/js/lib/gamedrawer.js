GameDrawer = function(canvasId, game, test){
  var ctx;
  var canvasSize;
  if (test !== 'yes') {
    var canvas = document.getElementById(canvasId);
    ctx = canvas.getContext('2d');
    canvasSize = { x: canvas.width, y: canvas.height };
  } else {
    ctx = canvasId.getContext('2d');
    canvasSize = { x: canvasId.width, y: canvasId.height };
  }
  this.game = game;
  this.game.createPacmanObject(canvasSize);
  var self = this;

  var tick = function() {
    self.update();
    self.draw(ctx, canvasSize);
    requestAnimationFrame(tick);
  };

  this.context = function() {
    return ctx;
  };

  tick();
};

GameDrawer.prototype = {
  update: function() {
    this.game.update();
  },

  draw: function(ctx, canvasSize) {
    ctx.clearRect(0, 0, canvasSize.x, canvasSize.y);
    for ( var i = 0; i < this.game.bodies.length; i++) {
      drawImg(ctx, this.game.bodies[i]);
    }
  },
};

var drawImg = function(ctx, body) {
  ctx.drawImage(
    body.img,
    body.canvasPos.x,
    body.canvasPos.y,
    body.img.width,
    body.img.height );
};
