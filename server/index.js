var express = require('express');
var app = express();
var lib = require('./lib');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var json = require('jsonwebtoken');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,x-access-token");
    next();
});

app.use(function (req, res, next) {
    json
        .verify(req.query.token, lib.config.secretKey, function (err, decoded) {
            decoded = decoded ? decoded : {
                data: {
                    isAuthorize: false
                }
            }
            if (req.url.indexOf('users/authorize') >= 0) {
                req.decoded = decoded;
                next();
                return;
            }
            if (err || !decoded.data.isAuthorize) {
                res.send(403, {
                    success: false,
                    message: 'Not authorized'
                });
            } else {
                req.decoded = decoded;
            }
        })
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