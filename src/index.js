var config = require('../config.js');
var express = require('express');
var app = express('../config.js');

require('./server/config/routes.js')(app, express);

app.set('port', config.port);

app.listen(app.get('port'), () => {
  console.log('listening on port ', app.get('port'));
});

module.exports = app;