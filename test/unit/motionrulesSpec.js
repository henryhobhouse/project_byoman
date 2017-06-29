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

    describe('currentTile', function() {
      it('calculates the x tile position of object', function() {
        var calcuation = (motionrules.object.posX+motionrules.object.offset+(motionrules.tileSize/2))/ motionrules.tileSize;
        motionrules.currentTile();
        expect(motionrules.object.tilePosX).toEqual(calcuation | 0);
      });

      it('calculates the y tile position of object', function() {
        var calcuation = (motionrules.object.posY+motionrules.object.offset+(motionrules.tileSize/2))/ motionrules.tileSize;
        motionrules.currentTile();
        expect(motionrules.object.tilePosY).toEqual(calcuation | 0);
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

    describe('availablePath', function() {
      describe("if object's grid position has a 1 on the grid to the right", function() {
        it("object can go right", function() {
          levelone.path[motionrules.object.tilePosY][motionrules.object.tilePosX+1] = 1
          motionrules.availablePath();
          expect(motionrules.object.canGo.right).toEqual(true);
        });

        it("if not, object can not go right", function() {
          levelone.path[motionrules.object.tilePosY][motionrules.object.tilePosX+1] = 0
          motionrules.availablePath();
          expect(motionrules.object.canGo.right).toEqual(false);
        });
      });

      describe("if object's grid position has a 1 on the grid to the left", function() {
        it("object can go left", function() {
          levelone.path[motionrules.object.tilePosY][motionrules.object.tilePosX-1] = 1
          motionrules.availablePath();
          expect(motionrules.object.canGo.left).toEqual(true);
        });

        it("if not, object can not go left", function() {
          levelone.path[motionrules.object.tilePosY][motionrules.object.tilePosX-1] = 0
          motionrules.availablePath();
          expect(motionrules.object.canGo.left).toEqual(false);
        });
      });

      describe("if object's grid position has a 1 on the grid to the top", function() {
        it("object can go up", function() {
          levelone.path[motionrules.object.tilePosY-1][motionrules.object.tilePosX] = 1
          motionrules.availablePath();
          expect(motionrules.object.canGo.up).toEqual(true);
        });

        it("if not, object can not go up", function() {
          levelone.path[motionrules.object.tilePosY-1][motionrules.object.tilePosX] = 0
          motionrules.availablePath();
          expect(motionrules.object.canGo.up).toEqual(false);
        });
      });

      describe("if object's grid position has a 1 on the grid to the bottom", function() {
        it("object can go down", function() {
          levelone.path[motionrules.object.tilePosY+1][motionrules.object.tilePosX] = 1
          motionrules.availablePath();
          expect(motionrules.object.canGo.down).toEqual(true);
        });

        it("if not, object can not go down", function() {
          levelone.path[motionrules.object.tilePosY+1][motionrules.object.tilePosX] = 0
          motionrules.availablePath();
          expect(motionrules.object.canGo.down).toEqual(false);
        });
      });
    });

    // describe('nextMove', function() {
    //   describe('when intendedDirection is right', function() {
    //     describe('object moving along y axis')
    //   });
    // });
  });
});
