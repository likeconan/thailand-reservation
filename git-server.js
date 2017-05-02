// this is used for git events automatically depoly
var restify = require('restify');
var colors = require('colors');
var exec = require('child_process').exec;

function respond(req, res, next) {
    console.log("start get push event from webhook".bgGreen);
    exec('git pull', (error, stdout, stderr) => {
        if (error) {
            console.log(`pull exec error: ${error}`.bgRed);
            return;
        } else {
            console.log("---------pull success----------".bgGreen);
            console.log(stdout.bgGreen);
            console.log("start npm install");

            exec('npm run clientinstall', (err, stdout, stderr) => {
                if (err) {
                    console.log('install client wrong'.bgRed);
                } else {
                    console.log('install client executed'.bgGreen);
                }
            })

            exec('npm run serverinstall', (err, stdout, stderr) => {
                if (err) {
                    console.log('install server wrong'.bgRed);
                } else {
                    console.log('install server executed'.bgGreen);
                }
            })
        }

    });
    res.send("get events and execute");
    next();
}

var server = restify.createServer({
    name: 'Webhook',
    version: '1.0.0',
    port: 4567
});

server.use(restify.queryParser());
server.use(restify.bodyParser());

server.post('/payload', respond);

server.listen(4567, function () {
    console.log('%s listening at %s'.bgCyan, server.name, server.url);
});