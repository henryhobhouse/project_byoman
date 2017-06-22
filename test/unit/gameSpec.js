define(['pacman'], function() {
  describe("Pacman", function() {

    describe('Post initialization', function() {
      beforeEach(function() {
        pacman = new PacMan
      });

      it('test testing - has game variable', function() {
        expect(pacman).toBeTruthy();
      });
    });
  });
});
