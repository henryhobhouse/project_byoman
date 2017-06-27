define(['score', 'levelone'], function() {
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
        expect(score.font).toContain('20px')
      })

      it('has text showing the score value', function(){
        expect(score.text).toEqual('Score: ')
      })
    });

    describe('updateFood', function() {
      it("changes score value by 10", function() {
        score.scoreFood();
        expect(score.value).toEqual(10)
      });
    });

    describe('updateEatGhost', function() {
      it("changes score value by 200", function() {
        score.scoreEatGhost();
        expect(score.value).toEqual(200)
      });
    });

    describe('update', function() {
      it("changes score text to show new score", function() {
        score.scoreFood();
        score.update();
        expect(score.score).toEqual('10')
      });
    });
  });
});
