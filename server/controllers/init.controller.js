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
            path: '/initHotelInfo',
            method: 'get'
        }, (req, res) => {
            // var hotelList=data.HotelJson;
            // data.HotelJson.forEach(function(element) {
            //     new Models.HotelModel(element).save((err, doc) => {
            //         res.send(doc);
            //     })
            // }, this);
        })
    }
}

module.exports = InitController