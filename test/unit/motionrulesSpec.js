define(['motionrules', 'pacman'], function() {
  describe('MotionRules', function() {
    var motionrules;
    var image;
    var keyboard;
    var pacman;
    var tileSize;
    beforeEach(function() {
      image = new fakeImage();
      keyboard = new fakeKeyboard();
      var tileX = 15;
      var tileY = 26;
      tileSize = 20;
      pacman = new PacMan(image, keyboard, tileX, tileY, tileSize);
      motionrules = pacman.motionrules;
    });

    describe('initialization', function() {
      it('takes in an object', function() {
        expect(motionrules.object).toEqual(pacman);
      });

      it('takes in tileSize', function() {
        expect(motionrules.tileSize).toEqual(tileSize);
      });
    });

    describe('escapeSide', function() {
      describe("if object's x position is off the left side of tile", function() {
        it("sets object's x position to oppossite side of canvas", function() {
          motionrules.object.posX = tileSize;
          motionrules.escapeSide();
          expect(motionrules.object.posX).toEqual(575 - tileSize);
        });
      });

      describe("if object's x position is off the right side of tile", function() {
        it("sets object's x position to oppossite side of canvas", function() {
          motionrules.object.posX = 575 - tileSize;
          motionrules.escapeSide();
          expect(motionrules.object.posX).toEqual(tileSize);
        });
      });
    });
  });
});
