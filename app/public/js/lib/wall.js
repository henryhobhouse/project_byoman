// Food looks best when drawn at intervals of 40
function Wall(image, tileX, tileY, tileSize) {
  var img = image;
  img.src = '/img/wallTile.png';
  this.img = img;
  this.posX = tileX * tileSize;
  this.posY = tileY * tileSize;
  this.update = function(){};
}

Wall.prototype = {
  draw: function(renderer){
    renderer.drawTile(this);
  },
};
