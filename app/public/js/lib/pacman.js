var PacMan = function(image, controller){
  var img = image;
  img.src = '/img/pacman.png';
  this.img = img;
  this.img.width = 20;
  this.img.height = 20;
  this.size = { x: this.img.width, y: this.img.height }
  this.xSpeed = 0
  this.ySpeed = 0;
  this.canvasPos = {
    x: levelone.pacmanloc[0],
    y: levelone.pacmanloc[1]
  };
  this.keyboard = controller;
}

PacMan.prototype = {

  update: function() {
    if (this.keyboard.keys.up){
      this.velocity(0, -3);
    } else if (this.keyboard.keys.left){
      this.velocity(-3, 0);
    } else if (this.keyboard.keys.right){
      this.velocity(3, 0);
    } else if (this.keyboard.keys.down){
      this.velocity(0, 3);
    }

    this.canvasPos.x += this.xSpeed;
    this.canvasPos.y += this.ySpeed;
  },

  draw: function(renderer) {
    renderer.drawImg(this);
  },

  velocity: function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  },

  _yPos: function() {
    return this.canvasPos.y + this.ySpeed;
  },

  _xPos: function() {
    return this.canvasPos.x + this.xSpeed;
  }

};
