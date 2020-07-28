const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tinyUrlSchema = new Schema({
    url: String,
    tinyurl: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('TinyUrl', tinyUrlSchema);