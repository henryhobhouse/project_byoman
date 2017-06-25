define(['food'], function() {
  describe("Food", function() {
    describe('Post initialization', function() {
      beforeEach(function() {
        food = new Food(1, 1, 20);
      });

      it('Has an X coordinate', function(){
       expect(food.posX).toEqual(30);
      });

      it('has a Y coordinate', function(){
       expect(food.posY).toEqual(30);
      });

      it('has a radius of 3', function(){
       expect(food.radius).toEqual(3);
      });
    });
  });
});
