describe("Pacman", function() {

  beforeEach(function() {
    pacman = new PacMan
  });

  it('test testing - has game variable', function() {
    expect(pacman.game).toBeTruthy();
  });

  it('has an X position', function(){
    expect(pacman.posX).not.toBeNull();
  });

  it('has an Y position', function(){
    expect(pacman.posY).not.toBeNull();
  });

  it('has a radius of at least 5', function(){
    expect(pacman.radius).not.toBeLessThan(5);
  });

  it('is yellow', function(){
    expect(pacman.fill).toEqual("yellow")
  });
});
