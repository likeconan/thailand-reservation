var env = process.env.NODE_ENV || 'development';

var lib = {
    config: require("./config")[env],
    controllers: require("../controllers"),
    helpers: require("./helpers"),
    db: require("../models")
}

module.exports = lib