var Score = function() {
  this.value = 0;
  this.font = '24px';
  this.color = 'white';
  this.posX = levelone.scorePos[0];
  this.posY = levelone.scorePos[1];
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
