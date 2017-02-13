// separate NodeJS server for production (webpack is not available in production)
var app = require('express')();

require('./webserver')(app);

app.listen(3232);
