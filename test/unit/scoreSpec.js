define(['score'], function() {
  describe("Score", function() {
    var score;
    beforeEach(function() {
      score = new Score();
    });

    describe('initialization', function() {

      it('Starts with a score of 0', function(){
        expect(score.value).toEqual(0)
      })

      it('color is white', function(){
        expect(score.color).toEqual('white')
      })

      it('font is 24px big', function(){
        expect(score.font).toContain('24px')
      })

      it('has text showing the score value', function(){
        expect(score.text).toEqual('Score: 0')
      })
    });

    describe('update', function() {
      it("changes score value by 10", function() {
        score.collission = true;
        score.update();
        expect(score.value).toEqual(10)
      });

      it("updates score text to show new score", function() {
        score.collission = true;
        score.update();
        expect(score.text).toEqual('Score: 10')
      });
    });
  });
});
