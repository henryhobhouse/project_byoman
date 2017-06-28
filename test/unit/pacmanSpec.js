define(['pacman', 'pmspechelper', 'motionrules'], function() {
  describe("Pacman", function() {
    var canvasPos;
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
        canvasPos = { x: pacman.posX, y: pacman.posY }
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
        expect(canvasPos.x).toEqual(297.5);
      });

      it('y position of pacman is y: 517.5 on the canvas', function() {
        expect(canvasPos.y).toEqual(517.5);
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
