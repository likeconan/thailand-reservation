var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/build/index.html'));
})

app.listen(normalizePort(), onListening);


function onListening() {

    console.log('yome listend on ' + '3000' + ' and env is ' + process.env.NODE_ENV);
}

function normalizePort() {
    var port = 3000;
    if (process.env.NODE_ENV === 'test') {
        port = 3300;
    }
    return port;
}