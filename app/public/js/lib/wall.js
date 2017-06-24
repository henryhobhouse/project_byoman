// Food looks best when drawn at intervals of 40
function Wall(image) {
  var img = image;
  img.src = '/img/wallTile.png';
  this.img = img;
  this.img.width = 20;
  this.img.height = 20;
  this.size = { x: this.img.width, y: this.img.height };



  this.update = function(){
  };
}

Wall.prototype.draw = function(renderer){
  console.log('in wall')
  renderer.drawMap(this);
};
