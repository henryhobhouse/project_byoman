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
  'motionrules'
], function() {
  new Controller('pac-animate', 'pac-fixed', 'pac-ui');
});
