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
            super.excuteDb(res, {
                model: Models.UserModel,
                method: 'find',
                options: req.params,
                callback: (data) => {
                    res.send({
                        isSuccess: true,
                        data: data
                    });
                }
            })
        })
    }
}

module.exports = UserController