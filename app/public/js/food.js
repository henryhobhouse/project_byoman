function Food(x, y) {

  var posX = x;
  var posY = y;

  this.radius = 3;
  this.fill = 'white';

  this.draw = function(){
    ctx.beginPath();
    ctx.arc(posX, posY, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.fill;
    ctx.fill();
    ctx.closePath();
  };
}
