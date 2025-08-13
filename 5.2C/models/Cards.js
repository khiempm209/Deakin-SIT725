const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
});

module.exports = mongoose.model('Card', CardSchema);