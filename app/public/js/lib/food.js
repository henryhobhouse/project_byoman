// Food looks best when drawn at intervals of 20
function Food(xPos, yPos) {
  this.canvasPos = { x: xPos, y: yPos };
  this.radius = 3;
  this.fill = 'white';

  this.draw = function(ctx){
    ctx.beginPath();
    ctx.arc(xPos, yPos, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.fill;
    ctx.fill();
    ctx.closePath();
  };

  this.update = function(){
  };
}
