var Score = function(x, y, tileSize) {
  this.value = 0;
  this.font = '20px Pacfont';
  this.color = 'white';
  this.posX = x * tileSize;
  this.posY = y * tileSize;
  this.text = 'Score: ';
  this.score = this.value.toString();
};

Score.prototype = {
  update: function() {
    this.score = this.value.toString();
  },

  scoreFood: function() {
    this.value += 10;
  },

  scoreEatGhost: function() {
    this.value += 200;
  },

  draw: function(renderer) {
    renderer.drawText(this.font, this.color, this.text, this.posX, this.posY);
    renderer.drawText('26px Sans-serif', this.color, this.score, this.posX + 100, this.posY + 4);
  }
};
