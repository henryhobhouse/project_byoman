var Renderer = function(ctx, canCenter){
  this.ctx = ctx;
  this.canCenter = canCenter;
};

Renderer.prototype = {
  draw: function(canvasSize, bodies) {
    this.ctx.clearRect(0, 0, canvasSize.x, canvasSize.y);
    for ( var i = 0; i < bodies.foods.length; i++) {
      bodies.foods[i].draw(this);
    }
    bodies.pacman.draw(this);
    bodies.score.draw(this);
  },
  drawImg: function(body) {
    this.ctx.drawImage(
      body.img,
      body.canvasPos.x - body.size.x / 2 + this.canCenter.x,
      body.canvasPos.y - body.size.x / 2 + this.canCenter.y,
      body.img.width,
      body.img.height );
  },
  drawText: function(body) {
    this.ctx.font = body.font;
    this.ctx.fillStyle = body.color;
    this.ctx.fillText(
      body.text,
      body.canvasPos.x + this.canCenter.x,
      body.canvasPos.y + this.canCenter.y);
  },
  drawCircle: function(body, circlestart, circlefinish) {
    this.ctx.beginPath();
    this.ctx.arc(
      body.canvasPos.x + this.canCenter.x,
      body.canvasPos.y + this.canCenter.y,
      body.radius,
      circlestart,
      circlefinish,
      false
    );
    this.ctx.fillStyle = this.fill;
    this.ctx.fill();
    this.ctx.closePath();
  },
};
