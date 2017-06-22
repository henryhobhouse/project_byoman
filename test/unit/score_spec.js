var rewire = require("rewire");

describe("Score", function() {
  var app = rewire('../../app/public/js/lib/score.js');

  describe('Post initialization', function() {
    beforeEach(function() {
      Score = app.__get__('Score');
      score = new Score();
    });

    it('Starts with a score of 0', function(){
      expect(score.value).toEqual(0)
    })

    it("changes by 10 when the update score method is called", function() {
      score.update();
      expect(score.value).toEqual(10)
    })
  });
});
