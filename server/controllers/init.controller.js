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
            var hotels = data.HotelJson.map((val) => {
                return new Models.HotelModel(val)
            })
            Models.HotelModel.insertMany(hotels).then((doc) => {
                res.send(doc)
            }).catch((err) => {
                res.send(err)
            })

        });
    }
}

module.exports = InitController