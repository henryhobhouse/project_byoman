var GameDrawer = function(canvasId, game){
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext('2d');
  var canvasSize = { x: canvas.width, y: canvas.height };
  this.game = game;
  this.game.createPacmanObject(canvasSize);
  this.game.createDots();
  var self = this;

  var tick = function() {
    self.update();
    self.draw(ctx, canvasSize);
    self.drawDots();
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

  drawDots: function(ctx){
    for ( var i = 0; i < this.game.food.length; i++) {
      drawFood(ctx, this.game.food[i]);
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

var drawFood = function(ctx, food){
  ctx.drawDot(
    ctx.beginPath(),
    ctx.arc(food.posX, food.posY, food.radius, 0, 2 * Math.PI, false),
    ctx.fillStyle = food.fill,
    ctx.fill(),
    ctx.closePath() );
};
