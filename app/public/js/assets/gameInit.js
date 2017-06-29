// Acts to load game asynchronously using require js
define([
  'renderer',
  'game',
  'keyboard',
  'pacman',
  'food',
  'score',
  'controller',
  'collision',
  'levelone',
  'wall',
  'motionrules',
  'ghost',
  'lives',
  'super_food',
  'ghostfactory',
  'timer'
]);

var controller;


function clickStart(){
  document.getElementById('youwin').style.display = 'none';
  document.getElementById('starting_screen').style.display = 'none';
  controller = new Controller('pac-animate', 'pac-fixed', 'pac-ui');
}

function endScreen() {
  document.getElementById('youwin').style.display = 'inherit';
  document.getElementById('score').innerHTML = 'YOUR SCORE:  ' + controller.game.bodies.score.value;
}
