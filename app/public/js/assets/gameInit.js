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
  var controller;
  document.getElementById('youwin').style.display = 'none';
  document.getElementById('starting_screen').style.display = 'none';
  controller = new Controller('pac-animate', 'pac-fixed', 'pac-ui');
}


function endScreen() {
  var noMoreFood = controller.game.bodies.foods.length == 0;
  var highScore = controller.game.bodies.score.value > 3600;

  document.getElementById('youwin').style.display = 'inherit';
  if (highScore && noMoreFood){
    document.getElementById('outcome').innerHTML = 'YOU LEGEND!';
  } else if (noMoreFood) {
    document.getElementById('outcome').innerHTML = 'YOU SMASHED IT!';
  }
  document.getElementById('score').innerHTML = 'YOUR SCORE:  ' + controller.game.bodies.score.value;
}
