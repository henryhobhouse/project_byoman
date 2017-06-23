define(['food'], function() {
  describe("Food", function() {
    describe('Post initialization', function() {
      beforeEach(function() {
        food = new Food(20, 20);
      });

      it('Has an X coordinate', function(){
       expect(food.canvasPos.x).toEqual(20)
      });

      it('has a Y coordinate', function(){
       expect(food.canvasPos.y).toEqual(20)
      });

      it('has a radius of 3', function(){
       expect(food.radius).toEqual(3);
      });
    });
  });
});
