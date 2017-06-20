var rewire = require("rewire");

describe("Pacman", function() {
  var app = rewire('../../app/public/js/pacman.js');

  describe('Post initialization', function() {
    beforeEach(function() {
      PacMan = app.__get__('PacMan');
      pacman = new PacMan
    });
  });
});
