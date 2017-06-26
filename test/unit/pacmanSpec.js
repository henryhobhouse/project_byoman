define(['pacman', 'pmspechelper'], function() {
  describe("Pacman", function() {
    beforeEach(function() {
      image = new fakeImage();
      keyboard = new fakeKeyboard();
      pacman = new PacMan(image, keyboard, 1, 1, 20)
      pacman.up = null;
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

      it('positioned on the canvas where x and y are equal to 100', function() {
        expect(pacman.posX).toEqual(16);
        expect(pacman.posY).toEqual(16);
      });

      it('has a keyboard to control input', function() {
        expect(pacman.keyboard).toEqual(keyboard)
      });
    });

    // describe('update', function() {
    //   describe('When the up arrow key is pressed', function() {
    //     it('updates the y axis speed of pacman to -3', function() {
    //       pacman.keyboard.keys.up = true;
    //       pacman.up = true;
    //       pacman.update();
    //       expect(pacman.ySpeed).toEqual(-3);
    //     });
    //
    //     it("updates the position of pacman on the y axis", function() {
    //       pacman.keyboard.keys.up = true;
    //       pacman.update();
    //       expect(pacman.posY).toEqual(20 - 3)
    //     });
    //   });
    //
    //   describe('When the down arrow key is pressed', function() {
    //     it('updates the y axis speed of pacman to 3', function() {
    //       pacman.keyboard.keys.down = true;
    //       pacman.update()
    //       expect(pacman.ySpeed).toEqual(3)
    //     });
    //
    //     it("updates the position of pacman on the y axis", function() {
    //       pacman.keyboard.keys.down = true;
    //       pacman.update();
    //       expect(pacman.posY).toEqual(20 + 3)
    //     });
    //
    //   });
    //
    //   describe('When the right arrow key is pressed', function() {
    //     it('updates the x axis speed of pacman to 3', function() {
    //       pacman.keyboard.keys.right = true;
    //       pacman.update()
    //       expect(pacman.xSpeed).toEqual(3)
    //     });
    //
    //     it("updates the position of pacman on the x axis", function() {
    //       pacman.keyboard.keys.right = true;
    //       pacman.update();
    //       expect(pacman.posX).toEqual(20 + 3)
    //     });
    //   });
    //
    //   describe('When the left arrow key is pressed', function() {
    //     it('updates the x axis speed of pacman to -3', function() {
    //       pacman.keyboard.keys.left = true;
    //       pacman.update()
    //       expect(pacman.xSpeed).toEqual(-3)
    //     });
    //
    //     it("updates the position of pacman on the x axis", function() {
    //       pacman.keyboard.keys.left = true;
    //       pacman.update();
    //       expect(pacman.posX).toEqual(20 - 3)
    //     });
    //   });
    // });
  });
});
