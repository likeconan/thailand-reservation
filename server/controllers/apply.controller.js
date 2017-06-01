var BaseCtrl = require('./base.controller');
var Models = require('../models');


class ApplyController extends BaseCtrl {
    constructor() {
        super();
        this.initalAction();
    }
    initalAction() {
        super.addAction({
            path: '/apply',
            method: 'post'
        }, (req, res) => {

            new Models.ApplyModel({
                roomId: req.body.roomId,
                applyEmail: req.decoded.data.loggedUserEmail,
                createdAt: new Date(),
                updatedAt: new Date(),
                status: 'applying'
            }).save((err, doc) => {
                super.handleCallback(res, err).then(() => {
                    res.send({
                        isSuccess: true,
                        data: doc
                    });
                })
            })
        });

        super.addAction({
            path: '/apply/room/:id',
            method: 'get'
        }, (req, res) => {
            Models.ApplyModel.where({
                roomId: req.params.id
            }).find((err, doc) => {
                super.handleCallback(res, err).then(() => {
                    res.send({
                        isSuccess: true,
                        data: doc
                    })
                })
            })
        });

        super.addAction({
            path: '/apply/:id',
            method: 'put'
        }, (req, res) => {
            Models.ApplyModel.findByIdAndUpdate(req.params.id, {
                status: req.body.status
            }, (err, doc) => {
                super.handleCallback(res, err).then(() => {
                    res.send({
                        isSuccess: true,
                        data: doc
                    })
                })
            })
        });
    }
}

module.exports = ApplyController