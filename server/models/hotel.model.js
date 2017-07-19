var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var HotelSchema = new Schema({
    HotelName: String,
    OpenData: String,
    EndData:String,
    HotelAddress: String,
    HotelRemark: String,
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
    BedDetail: {
        BedNum: Number,
        BeadDetail: String
    }
});

//ImageList
var ImageSchema=new Schema({
    Path:String
});

HotelSchema.add({
    UsefulFacilities: [UsefulSchema],
    SafeFacilities: [SafeSchema],
    RoomList: [RoomSchema],
    ImageUrlList:[ImageSchema]
});

module.exports = mongoose.model('Hotels', HotelSchema);
