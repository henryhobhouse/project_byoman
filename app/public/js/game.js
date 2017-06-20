var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var pacman = new PacMan;
var food = new Food(40, 150);

pacman.draw();
food.draw();
