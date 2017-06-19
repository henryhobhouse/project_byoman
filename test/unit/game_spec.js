var rewire = require("rewire");

describe("TicTacToe", function() {
  var app = rewire('../../app/public/js/pacman.js');

  describe('Post initialization', function() {
    beforeEach(function() {
      PacMan = app.__get__('PacMan');
      pacman = new PacMan
    });

    it('test testing - has game variable', function() {
      expect(pacman.game).toBeTruthy();
    });
  });
});
