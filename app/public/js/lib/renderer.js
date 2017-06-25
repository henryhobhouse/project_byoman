var Renderer = function(ctxui, ctxstatic, tileSize){
  this.ctxui = ctxui;
  this.ctxstatic = ctxstatic;
  this.tileSize = tileSize;
};

Renderer.prototype = {
  draw: function(canvasSize, bodies, frames) {
    this.ctxui.clearRect(0, 0, canvasSize.x, canvasSize.y);
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
  drawstatic: function(canvasSize, bodies) {
    this.ctxstatic.clearRect(0, 0, canvasSize.x, canvasSize.y);
  },
  drawFps: function(frames) {
    this.ctxui.font = '24px pacfont';
    this.ctxui.fillStyle = 'white';
    this.ctxui.fillText(
      'FPS: ' + frames,
      400,
      20
    );
  },
  drawTile: function(body){
    this.ctxui.drawImage(
      body.img,
      body.posX,
      body.posY,
      this.tileSize,
      this.tileSize
    );
  },
  drawText: function(body) {
    this.ctxui.font = body.font;
    this.ctxui.fillStyle = body.color;
    this.ctxui.fillText(
      body.text,
      body.posX,
      body.posY + 20
    );
  },
  drawCircle: function(body, circlestart, circlefinish) {
    this.ctxui.beginPath();
    this.ctxui.arc(
      body.posX,
      body.posY,
      body.radius,
      circlestart,
      circlefinish,
      false
    );
    this.ctxui.fillStyle = this.fill;
    this.ctxui.fill();
    this.ctxui.closePath();
  },

};
