define(['gamedrawer', 'game', 'pacman', 'canteen'], function() {

  describe('#main', function(){
    var testGame
    it('pacman is a circle and yellow', function() {
      var canvas = document.createElement('canvas');

        canvas.id     = 'canvas';
        canvas.width  = 100;
        canvas.height = 100;
        console.log(canvas);
      var testGame = new GameDrawer(canvas, new Game(), 'yes');

      console.log('working');
      console.log('context: ' + testGame.context());
      console.log('context.hash: ' + testGame.context().hash());



      // return an md5 hash of the instruction stack
      // var hash = pacman.context.hash();
      var testHash = testGame.context().hash()
      // compare hash
      expect(testHash).toEqual('66a3b8e224c3a79b936d0dd0f694eb3a');

      // clear the stack
      // pacman.context.clear();
    });
  });
});
