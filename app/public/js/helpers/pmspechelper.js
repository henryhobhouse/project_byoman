var fakeKeyboard;
var fakeImage;

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
  this.src = '/img/pacman_sprite.png';
  this.size = 25;
};
