var GameDrawer = function(canvasId, game){
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext('2d');
  var canvasSize = { x: canvas.width, y: canvas.height };
  this.game = game;
  this.game.createScoreObject();
  this.game.createPacmanObject(canvasSize);
  var score = this.game.createScoreObject();
  var self = this;

  var tick = function() {
    self.update();
    self.draw(ctx, canvasSize);
    self.drawScore(ctx);
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
      drawImg(ctx, this.game.bodies[i]);
    }
  },

  drawScore: function(ctx, canvasSize, score){
    var scoreString = this.game.score[0].value.toString();
    ctx.font = '24px pacfont';
    ctx.fillStyle = 'white';
    ctx.fillText('Score: ' + scoreString, 0, 24);
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
