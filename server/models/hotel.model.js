var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    path = require('path');

var UserSchema = new Schema({
    hotelname: { type: String },
    hoteldetail: { type: String },
    imageurl:{type:String},
});

module.exports = mongoose.model('Hotels', UserSchema);
