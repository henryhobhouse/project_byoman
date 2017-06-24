var Score = function() {
  this.value = 0;
  this.font = '24px pacfont';
  this.color = 'white';
  this.canvasPos = { x: 0, y: 24 };
  this.text = 'Score: ' + this.value.toString();
  this.collission = false;
};

Score.prototype = {
  update: function() {
    if (this.collission == true) {
      this.value += 10;
      this.text = 'Score: ' + this.value.toString();
    }
  },

  draw: function(renderer) {
    renderer.drawText(this);
  }
};
