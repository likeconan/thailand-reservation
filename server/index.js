var express = require('express');
var app = express();
var lib = require('./lib');
var mongoose = require('mongoose');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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