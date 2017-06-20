'use strict';

function PacMan () {
  this.game = true;
  var posX = 30;
  var posY = 20;

  this.radius = 5;
  this.fill = 'yellow';

  this.draw = function(){
    ctx.beginPath();
    ctx.arc(posX, posY, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.fill;
    ctx.fill();
    ctx.closePath();
  };
}

module.exports = PacMan;
