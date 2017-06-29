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


function clickStart(){
  document.getElementById('starting_screen').style.display = 'none';
  new Controller('pac-animate', 'pac-fixed', 'pac-ui');
}
