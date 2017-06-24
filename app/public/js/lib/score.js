var Score = function() {
  this.value = 0;
  this.font = '24px pacfont';
  this.color = 'white';
  this.canvasPos = { x: 0, y: 24 };
  this.text = 'Score: ' + this.value.toString();
};

Score.prototype = {
  update: function() {
    this.text = 'Score: ' + this.value.toString();
  },
  updatefood: function() {
    this.value += 10;
  },
  updateatghost: function() {
    this.value += 200;
  },

  draw: function(renderer) {
    renderer.drawText(this);
  }
};
