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
            Models.ApplyModel.where({
                roomId: req.body.roomId,
                applyEmail: req.decoded.data.loggedUserEmail,
            }).find((err, doc) => {
                super.handleCallback(res, err).then(() => {
                    if (doc.length) {
                        res.send({
                            isSuccess: false,
                            errors: '你已经申请过了，无法再次申请'
                        });
                    } else {
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
                    }

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
            path: '/apply',
            method: 'put'
        }, (req, res) => {
            Models.ApplyModel.update(
                {
                    '_id': {
                        $in: req.body.ids
                    }
                },
                { status: 'approved', updatedAt: new Date(), modifiedBy: req.decoded.data.loggedUserEmail },
                { multi: true },
                (err, doc) => {
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