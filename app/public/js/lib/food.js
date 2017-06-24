// Food looks best when drawn at intervals of 40
function Food(xPos, yPos) {
  this.canvasPos = { x: xPos , y: yPos };
  this.radius = 3;
  this.size = { x: 2 * this.radius, y: 2 * this.radius };
  this.fill = 'white';
  this.circlestart = 0;
  this.circlefinish = 2 * Math.PI;

  this.draw = function(renderer){
    renderer.drawCircle(this, this.circlestart, this.circlefinish);
  };

  this.update = function(){
  };
}
