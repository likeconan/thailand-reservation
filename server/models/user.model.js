var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    path = require('path');

var UserSchema = new Schema({
    username: { type: String },
    email: { type: String },
    password: { type: String },
    role: { type: Number }
});

module.exports = mongoose.model('Users', UserSchema);
