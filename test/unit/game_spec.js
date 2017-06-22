var PacMan = require('../../app/public/js/lib/pacman.js')

describe("Pacman", function() {

  describe('Post initialization', function() {
    beforeEach(function() {
      pacman = new PacMan
    });

    it('test testing - has game variable', function() {
      expect(pacman.game).toBeTruthy();
    });
  });
});
