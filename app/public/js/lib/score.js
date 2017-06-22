function Score() {
  this.value = 0;
}

Score.prototype.update = function () {
  this.value += 10;
};
