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
            new Models.ApplyModel(req.body).save((err, doc) => {
                super.handleCallback(res, err).then(() => {
                    res.send({
                        isSuccess: true,
                        data: doc
                    });
                })
            })
        })

        super.addAction({
            path: '/apply/hotel/:id',
            method: 'get'
        }, (req, res) => {
            Models.ApplyModel.where({
                hotelId: req.params.id
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
            }, function (err, doc) {
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

module.exports = UserController