module.exports = {
    development: {
        port: 3030,
        db_connect: 'mongodb://localhost:27017/Thailand',
        secretKey: 'thailand',
        emailAPI: 'http://localhost:6789/api',
        adminUsers: ['mayn@shinetechchina.com', 'tiany@shinetechchina.com', 'meijh@shinetechchina.com']
    },
    production: {
        port: 3030,
        db_connect: 'mongodb://localhost:27017/Thailand',
        secretKey: 'thailand',
        emailAPI: 'http://localhost:6789/api',
        adminUsers: ['mayn@shinetechchina.com', 'tiany@shinetechchina.com', 'meijh@shinetechchina.com']
    }
}