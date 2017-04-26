var express = require('express');
var app = express();
var lib = require('./lib');
var mongoose = require('mongoose');


lib
    .helpers
    .setupRoutes(app, lib)

mongoose.connect(lib.config.db_connect);
mongoose.connection.on('open', function () {
    console.log('Mongoose connected.');
});
mongoose.Promise = global.Promise;

app.listen(lib.config.port, () => {
    console.log('Thailand API start');
});