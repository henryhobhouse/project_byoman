var server = require('../server');
var router = require('../router/router');
var requestHandlers = require('../router/requestHandlers');

var handle = {};
handle['/'] = requestHandlers.index;
handle['/test'] = requestHandlers.test;

server.start(router.route, handle);
