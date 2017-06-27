var Lives = function(x, y, tileSize) {
  this.remaining = 3;
  this.font = '20px pacfont';
  this.color = 'white';
  this.posX = x * tileSize;
  this.posY = y * tileSize;
  this.pretext = 'liVes: ';
  this.posttext = '';
  for (i=0;i<this.remaining;i++) {
    this.posttext = this.posttext += '1';
  }
};

Lives.prototype = {
  update: function() {
    this.posttext = '';
    for (i=0;i<this.remaining;i++) {
      this.posttext = this.posttext += '1';
    }
  },
  removeLife: function() {
    this.remaining--;
  },
  draw: function(renderer) {
    renderer.drawText(this.font, this.color, this.pretext+this.posttext, this.posX, this.posY);
  }
};
