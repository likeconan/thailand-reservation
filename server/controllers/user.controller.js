var BaseCtrl = require('./base.controller');
var Models = require('../models');
var jwt = require('jsonwebtoken');


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
            Models.UserModel.where({
                email: req.query.email,
                password: req.query.password
            }).select('-password').findOne((err, doc) => {
                super.handleCallback(res, err).then(() => {
                    if (doc) {
                        var token = jwt.sign(
                            {
                                data: {
                                    isAuthorize: true,
                                    loggedUserEmail: doc.email,
                                    userRole: 1
                                }
                            },
                            lib.config.secretKey,
                            {
                                expiresIn: '365d'
                            });
                        res.send({
                            isSuccess: true,
                            data: {
                                user: doc,
                                token: token
                            }
                        })
                    } else {
                        res.send({
                            isSuccess: false,
                            errors: '用户名/密码错误'
                        })
                    }
                })
            })
        })
    }
}

module.exports = UserController