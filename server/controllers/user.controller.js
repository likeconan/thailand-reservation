var BaseCtrl = require('./base.controller');
var Models = require('../models');
class UserController extends BaseCtrl {
    constructor() {
        super();
        this.initalAction();
    }
    initalAction() {
        // super.addAction({
        //     path: '/users',
        //     method: 'post'
        // }, (req, res) => {
        //     super.excuteDb(res, {
        //         model: new Models.UserModel(req.body),
        //         method: 'save',
        //         callback: (data) => {
        //             res.send({
        //                 isSuccess: true,
        //                 data: data
        //             });
        //         }
        //     })
        // })

        super.addAction({
            path: '/users',
            method: 'get'
        }, (req, res) => {
            Models.UserModel.where(req.params).findOne((err, doc) => {
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