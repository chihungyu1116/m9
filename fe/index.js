'use strict';
require('babel-core/register');
var server = require('./server');
var PORT = process.env.PORT || 4000;

server.default.listen(PORT, function() {
  console.log('Server listening on', PORT);
});