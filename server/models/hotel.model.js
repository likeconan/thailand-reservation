var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    path = require('path');

var UserSchema = new Schema({
    HotelName: String,
    HotelAddress: String,
    HotelRemark: String,
    ImageUrl: String,
    Accommodates: Number,
    LiveDate: String,
    Bathrooms: Number,
    CheckOutTime: String,
    Bedrooms: Number,
    HotelFrom: String,
    Beds: Number,
    HotelType: String,
    HotelRule: String
});

//UsefulFacilities
var UsefulSchema = new Schema({
	UsefulItem: String
});

//SafeFacilities
var SafeSchema = new Schema({
	SafeItem: String
});

//RoomList
var RoomSchema = new Schema({
	RoomName: String,
    ImageUrl: String,
    RoomDetail: String,
    BedDetail:{
        BedNum: Number,
        BeadDetail: String
    }
});

UserSchema.add({
    UsefulFacilities:[UsefulSchema],
    SafeFacilities:[SafeSchema],
    RoomList:[RoomSchema]
});

module.exports = mongoose.model('Hotels', UserSchema);
