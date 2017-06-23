GameDrawer = function(canvasId, game, test){
  var ctx;
  var canvasSize;
  if (test === 'yes') {
    var canvas = document.createElement('canvas');
    canvas.id     = 'canvas';
    canvas.width  = 100;
    canvas.height = 100;
  } else {
    canvas = document.getElementById(canvasId);
  }
  ctx = canvas.getContext('2d');
  canvasSize = { x: canvas.width, y: canvas.height };
  this.game = game;
  this.game.createPacmanObject(canvasSize);
  var self = this;

  this.context = function() {
    return [self, ctx];
  };

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
    ctx.clearRect(0, 0, canvasSize.x, canvasSize.y);
    for ( var i = 0; i < this.game.bodies.length; i++) {
      this.game.bodies[i].draw(ctx);
    }
  }
};

var drawImg = function(ctx, body) {
  ctx.drawImage(
    body.img,
    body.canvasPos.x,
    body.canvasPos.y,
    body.img.width,
    body.img.height );
};

var drawText = function(ctx, body) {
  ctx.font = body.font;
  ctx.fillStyle = body.color;
  ctx.fillText(
    body.text,
    body.canvasPos.x,
    body.canvasPos.y);
};
