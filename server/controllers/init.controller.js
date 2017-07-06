var BaseCtrl = require('./base.controller');
var Models = require('../models');
var data = require('../monogdata');

class InitController extends BaseCtrl {
    constructor() {
        super();
        this.initalAction();
    }
    initalAction() {
        super.addAction({
            path: '/init',
            method: 'get'
        }, (req, res) => {
            data.HotelJson.forEach(function (element) {
                var hotel = new Models.HotelModel(element);
                hotel.save((err, doc) => {
                    if (err) {
                        res.send(err)
                    } else {
                        res.send(doc);
                    }
                })

            }, this);
        });
    }
}

module.exports = InitController