var rewire = require("rewire");

describe("Food", function() {
  var app = rewire('../../app/public/js/food.js');

  describe('Post initialization', function() {
    beforeEach(function() {
      Food = app.__get__('Food');
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
