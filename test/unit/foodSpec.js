define(['keyboard', 'pacman', 'food'], function() {
  describe("Food", function() {
    describe('Post initialization', function() {
      beforeEach(function() {
        food = new Food();
      });

      it('Has an X coordinate', function(){
       expect(food.posX).not.toBeNull();
      });

      it('has a Y coordinate', function(){
       expect(food.posY).not.toBeNull();
      });

      it('has a radius of 3', function(){
       expect(food.radius).toEqual(3);
      });
    });
  });
});
