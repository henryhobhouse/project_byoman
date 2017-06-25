// Food looks best when drawn at intervals of 40
function Wall(image, tileX, tileY) {
  var img = image;
  img.src = '/img/wallTile.png';
  this.img = img;
  this.posX = tileX;
  this.posY = tileY;
}

Wall.prototype = {
  draw: function(renderer){
    renderer.drawTile(this);
  },
  update: function() {
  }
};
