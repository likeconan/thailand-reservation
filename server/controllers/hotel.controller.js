var BaseCtrl = require('./base.controller');
var Models = require('../models');

class HotelController extends BaseCtrl {
    constructor() {
        super();
        this.initalAction();
    }
    initalAction() {
        super.addAction({
            path: '/hotellist',
            method: 'get'
        }, (req, res) => {
             Models.HotelModel.where(req.query).find((err, doc) => {
                super.handleCallback(res, err).then(() => {
                    if (doc) {
                        res.send({
                            isSuccess: true,
                            data: doc
                        })
                    } else {
                        res.send({
                            isSuccess: false,
                            errors: '获取酒店信息失败'
                        })
                    }
                })
            })
        })
    }
}

module.exports = HotelController