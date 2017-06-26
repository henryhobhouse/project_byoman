var Renderer = function(animateCtx, fixedCtx, uiCtx, tileSize, canvasSize){
  this.animateCtx = animateCtx;
  this.fixedCtx = fixedCtx;
  this.uiCtx = uiCtx;
  this.tileSize = tileSize;
  this.canvasSize = canvasSize;
};

Renderer.prototype = {
  drawAnimate: function(bodies, frames) {
    this.animateCtx.clearRect(0, 0, this.canvasSize.x, this.canvasSize.y);
    bodies.pacman.draw(this);
    bodies.ghosts[0].draw(this);
    // The below function is purely for development testing
    this.drawFps(frames);
  },
  drawFixed: function(walls) {
    for ( var j = 0; j < walls.length; j++) {
      walls[j].draw(this);
    }
  },
  drawUi: function(bodies) {
    this.uiCtx.clearRect(0, 0, this.canvasSize.x, this.canvasSize.y);
    for ( var i = 0; i < bodies.foods.length; i++) {
      bodies.foods[i].draw(this);
    }
    bodies.score.draw(this);
  },
  // drawFps temp function. Remove for production
  drawFps: function(frames) {
    this.animateCtx.font = '24px pacfont';
    this.animateCtx.fillStyle = 'white';
    this.animateCtx.fillText(
      'FPS: ' + frames,
      400,
      20
    );
  },
  drawAnimatedObject: function(body){
    this.animateCtx.drawImage(
      body.img,
      body.posX,
      body.posY,
      body.img.size,
      body.img.size
    );
  },
  drawTile: function(body){
    this.fixedCtx.drawImage(
      body.img,
      body.posX,
      body.posY,
      this.tileSize,
      this.tileSize
    );
  },
  drawText: function(body) {
    this.uiCtx.font = body.font;
    this.uiCtx.fillStyle = body.color;
    this.uiCtx.fillText(
      body.text,
      body.posX,
      body.posY + 20
    );
  },

  drawSprite: function(body){
    this.animateCtx.drawImage(
      body.img,
      body.frameIndex.x * body.frameWidth,
      body.frameIndex.y * body.frameHeight,
      body.frameWidth,
      body.frameHeight,
      body.posX,
      body.posY,
      body.img.size,
      body.img.size
    );
  },

  drawCircle: function(body, circlestart, circlefinish) {
    this.uiCtx.beginPath();
    this.uiCtx.arc(
      body.posX,
      body.posY,
      body.radius,
      circlestart,
      circlefinish,
      false
    );
    this.uiCtx.fillStyle = this.fill;
    this.uiCtx.fill();
    this.uiCtx.closePath();
  },

};
