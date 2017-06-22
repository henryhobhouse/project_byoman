define(['gamedrawer', 'game', 'pacman', 'canteen'], function() {

  describe('#main', function(){

    // beforeEach(function() {
    //
    //   // canvas.width = 600;
    //   // canvas.height = 100;
    //
    //   // this.currentTest.canvas = canvas;
    //   // this.currentTest.context = context;
    // });

    it('pacman is a circle and yellow', function() {
      // var context = this.test.context;
      // draw stuff
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = 600;
      canvas.height = 100;

      context.beginPath();
      context.arc(30, 20, 10, 0, 2 * Math.PI, false);
      context.fillStyle = 'yellow';
      context.fill();
      context.closePath();


      // return an md5 hash of the instruction stack
      // var hash = pacman.context.hash();

      // compare hash
      expect(context.hash()).toEqual('66a3b8e224c3a79b936d0dd0f694eb3a');

      // clear the stack
      // pacman.context.clear();
    });
  });
});
