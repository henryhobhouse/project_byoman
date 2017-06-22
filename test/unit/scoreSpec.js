define(['score'], function() {
  describe("Score", function() {
    describe('Post initialization', function() {
      beforeEach(function() {
        score = new Score();
      });

      it('Starts with a score of 0', function(){
        expect(score.value).toEqual(0)
      })
    });
    it("changes by 10 when the update score method is called", function() {
      score.update();
      expect(score.value).toEqual(10)
    })
  });
});
