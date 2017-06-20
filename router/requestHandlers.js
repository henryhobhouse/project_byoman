function index(response) {
const fs = require("fs");
const path = require("path")

  fs.readFile('app/views/index.html', function(err, data){
    if(err){
      response.statusCode = 500;
      response.write('Error getting the file: ${err}.');
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(data);
      response.end();
    }
  });
}
exports.index = index;

function test(response) {
const fs = require("fs");
const path = require("path")

  fs.readFile('app/views/test.html', function(err, data){
    if(err){
      response.statusCode = 500;
      response.write('Error getting the file: ${err}.');
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(data);
      response.end();
    }
  });
}
exports.test = test;
