define(['pacman', 'pmspechelper', 'motionrules'], function() {
  describe("Pacman", function() {
    var pos;
    var image;
    var keyboard;
    var pacman;
    beforeEach(function() {
      image = new fakeImage();
      keyboard = new fakeKeyboard();
      var tileX = 15;
      var tileY = 26;
      var tileSize = 20;
      pacman = new PacMan(image, keyboard, tileX, tileY, tileSize);
    });

    describe('initialization', function() {
      beforeEach(function() {
        pos = { x: pacman.posX, y: pacman.posY }
      });

      it('has a spirte sheet source', function() {
        expect(pacman.img.src).toEqual('/img/pacman_sprite.png');
      });

      it('has a speed of 0 on the x axis', function() {
        expect(pacman.xSpeed).toEqual(0);
      });

      it('has a speed of 0 on the y axis', function() {
        expect(pacman.ySpeed).toEqual(0);
      });

      it('x position of pacman is x: 297.5 on the canvas', function() {
        expect(pos.x).toEqual(297.5);
      });

      it('y position of pacman is y: 517.5 on the canvas', function() {
        expect(pos.y).toEqual(517.5);
      });

      it('has a keyboard to control input', function() {
        expect(pacman.keyboard).toEqual(keyboard);
      });

      it('has a starting direction of left', function() {
        expect(pacman.intendedDirection).toEqual('left');
      });

      it('has a starting speed of 3', function() {
        expect(pacman.speed).toEqual(3);
      });

    });

    describe('update', function() {
      describe('When the up arrow key is pressed', function() {
        it("sets pacman's intendedDirection attribute to up", function() {
          pacman.keyboard.keys.up = true;
          pacman.update();
          expect(pacman.intendedDirection).toEqual('up');
        });
      });

      describe('When the down arrow key is pressed', function() {
        it("sets pacman's intendedDirection attribute to down", function() {
          pacman.keyboard.keys.down = true;
          pacman.update();
          expect(pacman.intendedDirection).toEqual('down');
        });
      });

      describe('When the right arrow key is pressed', function() {
        it("sets pacman's intendedDirection attribute to right", function() {
          pacman.keyboard.keys.right = true;
          pacman.update();
          expect(pacman.intendedDirection).toEqual('right');
        });
      });

      describe('When the left arrow key is pressed', function() {
        it("sets pacman's intendedDirection attribute to left", function() {
          pacman.keyboard.keys.left = true;
          pacman.update();
          expect(pacman.intendedDirection).toEqual('left');
        });
      });
    });

    describe('velocity', function() {
      it("changes pacman's direction and speed", function() {
        pacman.velocity(3, 0);
        expect(pacman.xSpeed).toEqual(3)
      });
    });
  });
});
