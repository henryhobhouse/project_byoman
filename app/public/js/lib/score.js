var Score = function() {
  this.value = 0;
  this.font = '24px pacfont';
  this.color = 'white';
  this.canvasPos = {
    x: levelone.scorePos[0],
    y: levelone.scorePos[1]
  };
  this.text = 'Score: ' + this.value.toString();
};

Score.prototype = {
  update: function() {
    this.text = 'Score: ' + this.value.toString();
  },

  updateFood: function() {
    this.value += 10;
  },

  updateEatGhost: function() {
    this.value += 200;
  },

  draw: function(renderer) {
    renderer.drawText(this);
  }
};
