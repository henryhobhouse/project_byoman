var Renderer = function(ctx){
  this.ctx = ctx;
};

Renderer.prototype = {
  draw: function(canvasSize, bodies) {
    this.ctx.clearRect(0, 0, canvasSize.x, canvasSize.y);
    for ( var i = 0; i < bodies.length; i++) {
      bodies[i].draw(this);
    }
  },
  drawImg: function(body) {
    this.ctx.drawImage(
      body.img,
      body.canvasPos.x,
      body.canvasPos.y,
      body.img.width,
      body.img.height );
  },
  drawText: function(body) {
    this.ctx.font = body.font;
    this.ctx.fillStyle = body.color;
    this.ctx.fillText(
      body.text,
      body.canvasPos.x,
      body.canvasPos.y);
  }
};
