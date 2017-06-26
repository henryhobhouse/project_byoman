var Score = function(x, y) {
  this.value = 0;
  this.font = '24px pacfont';
  this.color = 'white';
  this.posX = x;
  this.posY = y;
  this.text = 'Score: ' + this.value.toString();
};

Score.prototype = {
  update: function() {
    this.text = 'Score: ' + this.value.toString();
  },

  scoreFood: function() {
    this.value += 10;
  },

  scoreEatGhost: function() {
    this.value += 200;
  },

  draw: function(renderer) {
    renderer.drawText(this);
  }
};
