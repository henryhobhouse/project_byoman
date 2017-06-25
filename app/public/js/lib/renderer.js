var Renderer = function(ctx, tileSize){
  this.ctx = ctx;
  this.tileSize = tileSize;
};

Renderer.prototype = {
  draw: function(canvasSize, bodies, frames) {
    this.ctx.clearRect(0, 0, canvasSize.x, canvasSize.y);
    for ( var i = 0; i < bodies.foods.length; i++) {
      bodies.foods[i].draw(this);
    }
    for ( var j = 0; j < bodies.walls.length; j++) {
      bodies.walls[j].draw(this);
    }
    bodies.pacman.draw(this);
    bodies.score.draw(this);
    // The below function is purely for development testing
    this.drawFps(frames);
  },
  drawFps: function(frames) {
    this.ctx.font = '24px pacfont';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText(
      'FPS: ' + frames,
      400,
      20
    );
  },
  drawImg: function(body) {
    this.ctx.drawImage(
      body.img,
      body.canvasPos.x - body.size.x / 2 + 240,
      body.canvasPos.y - body.size.x / 2 + 240,
      body.img.width,
      body.img.height
    );
  },
  drawText: function(body) {
    this.ctx.font = body.font;
    this.ctx.fillStyle = body.color;
    this.ctx.fillText(
      body.text,
      body.posX,
      body.posY + 20
    );
  },
  drawCircle: function(body, circlestart, circlefinish) {
    this.ctx.beginPath();
    this.ctx.arc(
      body.posX,
      body.posY,
      body.radius,
      circlestart,
      circlefinish,
      false
    );
    this.ctx.fillStyle = this.fill;
    this.ctx.fill();
    this.ctx.closePath();
  },
  drawTile: function(body){
    this.ctx.drawImage(
      body.img,
      body.posX * this.tileSize,
      body.posy * this.tileSize,
      this.tileSize,
      this.tileSize
    );
    console.log(this.ctx)
  },
};
