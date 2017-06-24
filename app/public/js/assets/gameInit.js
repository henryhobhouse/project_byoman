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
  'wall'
], function() {
  new Controller('canvas');
});
