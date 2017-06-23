define(['gamedrawer', 'game', 'pacman', 'keyboard'], function() {

  beforeEach(function() {
    testGame = new GameDrawer('canvas', new Game(), 'yes');
    testHash = testGame.context()
  });

  describe('#main', function(){

    it('pacman can get context of a canvas', function() {
      expect(testHash[1].canvas.id).toEqual('canvas');
    });

    it('pacman can get context of a canvas', function() {
      expect(testHash[1].canvas.id).toEqual('canvas');
    });
  });
});
