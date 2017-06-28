function SuperFood(gridX, gridY, tileSize) {
  this.radius = 6;
  this.posX = gridX * tileSize + tileSize / 2;
  this.posY = gridY * tileSize + tileSize / 2;
  this.fill = 'white';
  this.circlestart = 0;
  this.circlefinish = 2 * Math.PI;

  this.draw = function(renderer){
    renderer.drawCircle(this, this.circlestart, this.circlefinish);
  };

  this.update = function(){
  };
}
