// Food looks best when drawn at intervals of 40
function Food(xPos, yPos) {
  this.canvasPos = { x: xPos, y: yPos };
  this.radius = 3;
  this.fill = 'white';

  this.draw = function(renderer){
    renderer.ctx.beginPath();
    renderer.ctx.arc(xPos, yPos, this.radius, 0, 2 * Math.PI, false);
    renderer.ctx.fillStyle = this.fill;
    renderer.ctx.fill();
    renderer.ctx.closePath();
  };

  this.update = function(){
  };
}
