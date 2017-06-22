define(['keyboard', 'pacman'], function() {
  describe("Pacman", function() {
  var pacman;
  var DoubleCanvasSize;

    beforeEach(function() {
      DoubleCanvasSize = { x: 640, y: 540 }
      pacman = new PacMan(DoubleCanvasSize)
    });

    it('has an Image', function(){
      expect(pacman.img).not.toBeNull();
    });

    it('has an Y position', function(){
      expect(pacman.posY).not.toBeNull();
    });

    it('has a radius of at least 5', function(){
      expect(pacman.radius).not.toBeLessThan(5);
    });
  });
});
