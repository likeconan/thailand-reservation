var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ApplySchema = new Schema({
    applyEmail: { type: String },
    roomId: { type: String },
    status: { type: String }, //applying,approved,rejected
    modifiedBy: { type: String },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    },
});

module.exports = mongoose.model('applies', ApplySchema);
