// Food looks best when drawn at intervals of 40
function Food(xPos, yPos) {
  var img = image;
  img.src = '/img/pacman.png';
  this.img = img;
  this.img.width = 20;
  this.img.height = 20;
  this.size = { x: this.img.width, y: this.img.height };
  this.canvasPos = {
    x: levelone.pacmanloc[0],
    y: levelone.pacmanloc[1]
  };

  this.draw = function(renderer){
    renderer.drawCircle(this, this.circlestart, this.circlefinish);
  };

  this.update = function(){
  };
}
