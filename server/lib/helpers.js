module.exports = {
    setupRoutes: setupRoutes,
    excludeRoutes: excludeRoutes
}


function setupRoutes(server, lib) {
    for (controller in lib.controllers) {
        cont = new lib.controllers[controller](lib)
        cont.setUpActions(server)
    }
}

function excludeRoutes(path) {
    var res = false;
    var array = ['/users/authorize', '/init', '/users'];
    for (var index = 0; index < array.length; index++) {
        var val = array[index];
        if (path.indexOf(val) >= 0) {
            res = true;
            break;
        }
    };
    return res;
}