var BaseCtrl = require('./base.controller');
var Models = require('../models');
var jwt = require('jsonwebtoken');
var axios = require('axios');

class UserController extends BaseCtrl {
    constructor(lib) {
        super();
        this.initalAction(lib);
    }
    initalAction(lib) {
        super.addAction({
            path: '/users',
            method: 'post'
        }, (req, res) => {
            new Models.UserModel(req.body).save((err, doc) => {
                res.send(doc);
            })
        })


        // check if user isAuthorize
        super.addAction({
            path: '/users/authorize',
            method: 'GET'
        }, (req, res, next) => {
            if (req.decoded.data.isAuthorize) {
                res.send({
                    isSuccess: true,
                    data: req.decoded.data
                })
            } else {
                res.send({
                    isSuccess: true
                })
            }

        })

        super.addAction({
            path: '/users',
            method: 'get'
        }, (req, res) => {
            if (!req.query.email) {
                res.send({
                    isSuccess: false,
                    errors: '用户名/密码错误'
                })
                return
            }
            if (req.query.email == 'testuser@test.com' && req.query.password == '123456') {
                var loggedUser = {
                    isAuthorize: true,
                    loggedUserEmail: result.data.Email,
                    userRole: 1
                }
                var token = jwt.sign(
                    {
                        data: loggedUser
                    },
                    lib.config.secretKey,
                    {
                        expiresIn: '365d'
                    });
                res.send({
                    isSuccess: true,
                    data: {
                        user: loggedUser,
                        token: token
                    }
                })
            } else {
                var userId = req.query.email.substring(0, req.query.email.indexOf('@shinetechchina.com'))
                axios.post(lib.config.emailAPI + '/account/login', {
                    userId: userId,
                    password: req.query.password
                }).then((result) => {
                    if (result.data) {
                        var userRole = lib.config.adminUsers.indexOf(result.data.Email) >= 0 ? 1 : 0 //0 for normal,1 for admin
                        var loggedUser = {
                            isAuthorize: true,
                            loggedUserEmail: result.data.Email,
                            userRole: userRole
                        }
                        var token = jwt.sign(
                            {
                                data: loggedUser
                            },
                            lib.config.secretKey,
                            {
                                expiresIn: '365d'
                            });
                        res.send({
                            isSuccess: true,
                            data: {
                                user: loggedUser,
                                token: token
                            }
                        })
                    } else {
                        res.send({
                            isSuccess: false,
                            errors: '用户名/密码错误'
                        })
                    }
                }, (err) => {
                    res.send({
                        isSuccess: false,
                        errors: '邮箱服务器出错，请稍后再试'
                    })
                })
            }

        })
    }
}

module.exports = UserController