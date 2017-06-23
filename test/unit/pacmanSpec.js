define(['pacman', 'pacmanhelper'], function() {
  describe("Pacman", function() {
    beforeEach(function() {
      image = new fakeImage();
      keyboard = new fakeKeyboard();
      pacman = new PacMan(fakeCanvasSize, image, keyboard)
    });

    describe('initialization', function() {

      it('has an image source', function() {
        expect(pacman.img.src).toEqual('/img/pacman.png');
      });

      it('has a speed of 0 on the x axis', function() {
        expect(pacman.xSpeed).toEqual(0);
      });

      it('has a speed of 0 on the y axis', function() {
        expect(pacman.ySpeed).toEqual(0);
      });

      it('positioned on the canvas where x and y are eqaul to 100', function() {
        expect(pacman.canvasPos.x).toEqual(100);
        expect(pacman.canvasPos.y).toEqual(100);
      });

      it('has a keyboard to control input', function() {
        expect(pacman.keyboard).toEqual(keyboard)
      });
    });

    describe('update', function() {
      describe('When the up arrow key is pressed', function() {
        it('updates the y axis speed of pacman to -3', function() {
          pacman.keyboard.keys.up = true;
          pacman.update();
          expect(pacman.ySpeed).toEqual(-3);
        });

        it("updates the position of pacman on the y axis", function() {
          pacman.keyboard.keys.up = true;
          pacman.update();
          expect(pacman.canvasPos.y).toEqual(100 - 3)
        });

        it("sets x and y speed to 0 upon collision with the top of canvas", function() {
          pacman.canvasPos.y = 2;
          pacman.keyboard.keys.up = true;
          pacman.update();
          expect(pacman.xSpeed).toEqual(0);
          expect(pacman.ySpeed).toEqual(0);
        });
      });

      describe('When the down arrow key is pressed', function() {
        it('updates the y axis speed of pacman to 3', function() {
          pacman.keyboard.keys.down = true;
          pacman.update()
          expect(pacman.ySpeed).toEqual(3)
        });

        it("updates the position of pacman on the y axis", function() {
          pacman.keyboard.keys.down = true;
          pacman.update();
          expect(pacman.canvasPos.y).toEqual(100 + 3)
        });

        it("sets x and y speed to 0 upon collision with the bottom of canvas", function() {
          pacman.canvasPos.y = 488;
          pacman.keyboard.keys.down = true;
          pacman.update();
          expect(pacman.xSpeed).toEqual(0);
          expect(pacman.ySpeed).toEqual(0);
        });
      });

      describe('When the right arrow key is pressed', function() {
        it('updates the x axis speed of pacman to 3', function() {
          pacman.keyboard.keys.right = true;
          pacman.update()
          expect(pacman.xSpeed).toEqual(3)
        });

        it("updates the position of pacman on the x axis", function() {
          pacman.keyboard.keys.right = true;
          pacman.update();
          expect(pacman.canvasPos.x).toEqual(100 + 3)
        });

        it("sets x and y speed to 0 upon collision with the right side of canvas", function() {
          pacman.canvasPos.x = 588;
          pacman.keyboard.keys.right = true;
          pacman.update();
          expect(pacman.xSpeed).toEqual(0);
          expect(pacman.ySpeed).toEqual(0);
        });
      });

      describe('When the left arrow key is pressed', function() {
        it('updates the x axis speed of pacman to -3', function() {
          pacman.keyboard.keys.left = true;
          pacman.update()
          expect(pacman.xSpeed).toEqual(-3)
        });

        it("updates the position of pacman on the x axis", function() {
          pacman.keyboard.keys.left = true;
          pacman.update();
          expect(pacman.canvasPos.x).toEqual(100 - 3)
        });

        it("sets x and y speed to 0 upon collision with the left side of canvas", function() {
          pacman.canvasPos.x = 2;
          pacman.keyboard.keys.left = true;
          pacman.update();
          expect(pacman.xSpeed).toEqual(0);
          expect(pacman.ySpeed).toEqual(0);
        });
      });
    });
  });
});
