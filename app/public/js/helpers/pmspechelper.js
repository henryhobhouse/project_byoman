fakeCanvasSize = { x: 640, y: 540};

fakeKeyboard = function() {
  var Keys = {
    up: false,
    down: false,
    left: false,
    right: false,
    leftPress: false
  };
  this.keys = Keys;
};

fakeImage = function() {
  this.src = '/img/pacman.png';
  this.height = 50;
  this.width = 50;
};
