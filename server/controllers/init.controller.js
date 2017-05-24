var BaseCtrl = require('./base.controller');
var Models = require('../models');
var data = require('../monogdata');

class HotelController extends BaseCtrl {
    constructor() {
        super();
        this.initalAction();
    }
    initalAction() {
        super.addAction({
            path: '/initHotelInfo',
            method: 'get'
        }, (req, res) => {
            debugger;
             
        })
    }
}

module.exports = HotelController