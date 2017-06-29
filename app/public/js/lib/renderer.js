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

    for(k=0;k<bodies.ghostFactory.ghosts.length;k++){
      bodies.ghostFactory.ghosts[k].draw(this);
    }
    // The below function is purely for development testing
    this.drawFps(frames);
  },
  drawFixed: function(walls) {

  },
  drawUi: function(bodies) {
    this.uiCtx.clearRect(0, 0, this.canvasSize.x, this.canvasSize.y);
    for ( var i = 0; i < bodies.foods.length; i++) {
      bodies.foods[i].draw(this);
    }
    for ( var s = 0; s < bodies.superFood.length; s++) {
      bodies.superFood[s].draw(this);
    }
    bodies.score.draw(this);
    bodies.lives.draw(this);
  },
  endGameDead: function() {
    this.uiCtx.clearRect(0, 0, this.canvasSize.x, this.canvasSize.y);
    this.animateCtx.clearRect(0, 0, this.canvasSize.x, this.canvasSize.y);
    this.fixedCtx.clearRect(0, 0, this.canvasSize.x, this.canvasSize.y);
    this.fixedCtx.font = '36px Arial';
    this.fixedCtx.fillStyle = 'white';
    this.fixedCtx.fillText(
      'Game Over - You Died',
      250,
      250
    );
  },
  // drawFps temp function. Remove for production
  drawFps: function(frames) {
    this.animateCtx.font = '24px Arial';
    this.animateCtx.fillStyle = 'white';
    this.animateCtx.fillText(
      'FPS: ' + frames,
      470,
      710
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
  drawText: function(font, color, text, posX, posY) {
    this.uiCtx.font = font;
    this.uiCtx.fillStyle = color;
    this.uiCtx.fillText(
      text,
      posX,
      posY + this.tileSize
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
