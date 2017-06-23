var Score = function() {
  this.value = 0;
  this.font = '24px pacfont';
  this.color = 'white';
  this.canvasPos = { x: 0, y: 24 };
  this.text = 'Score: ' + this.value.toString();
};

Score.prototype = {
  update: function() {
    this.value += 10;
  },

  draw: function(ctx) {
    drawText(ctx, this);
  }
};
