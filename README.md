# BYO Pacman Game

## To update upon new object file

#### On production
1. Add new file w/ object to /app/public/js/lib/
2. Add constructer and file to the list in /app/public/js/index.js
3. Update require (define) in /app/public/js/assets/gameInit.js

#### On testing
1. Add constructer and file to the list in test/test-main.js
2. wrap the test with: define(['<insert name of object dependency>', '<object two etc>'], function() { <insert test> }

