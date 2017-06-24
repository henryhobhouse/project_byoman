// Food looks best when drawn at intervals of 40
function Wall(image, xPos, yPos) {
  var img = image;
  img.src = '/img/wallTile.png';
  this.img = img;
  this.img.width = 20;
  this.img.height = 20;
  this.size = { x: this.img.width, y: this.img.height };
  this.canvasPos = { x: xPos, y: yPos };

  this.draw = function(renderer){
    renderer.drawImg(this, this.circlestart, this.circlefinish);
  };

  this.update = function(){
  };
}
