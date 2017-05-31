var BaseCtrl = require('./base.controller');
var Models = require('../models');
class UserController extends BaseCtrl {
    constructor() {
        super();
        this.initalAction();
    }
    initalAction() {
        super.addAction({
            path: '/users',
            method: 'post'
        }, (req, res) => {
            new Models.UserModel(req.body).save((err, doc) => {
                res.send(doc);
            })
        })

        super.addAction({
            path: '/users',
            method: 'get'
        }, (req, res) => {
            Models.UserModel.where(req.query).select('-password').findOne((err, doc) => {
                super.handleCallback(res, err).then(() => {
                    if (doc) {
                        res.send({
                            isSuccess: true,
                            data: doc
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