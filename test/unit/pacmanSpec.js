define(['pacman'], function() {
  describe("Pacman", function() {
    var pacman;
    var fakeCanvasSize;
    var fakeKeyboard;
    var fakeImage;

    fakeCanvasSize = { x: 640, y: 540};

    fakeKeyboard = function() {
      var Keys = {
        up: false,
        down: false,
        left: false,
        right: false,
        leftPress: false
      };

      this.keys = Keys
    }

    fakeImage = function() {
      this.src = '/img/pacman.png'
    }

    describe('initialization', function() {

      beforeEach(function() {
        var image = new fakeImage();
        var keyboard = new fakeKeyboard();
        pacman = new PacMan(fakeCanvasSize, image, keyboard)
      });

      it('has an image source', function() {
        expect(pacman.img.src).toEqual('/img/pacman.png');
      });

      it('has a speed of 0 on the x axis', function() {
        expect(pacman.xSpeed).toEqual(0)
      });

      it('has a speed of 0 on the y axis', function() {
        expect(pacman.ySpeed).toEqual(0)
      });


    });


  });
});
