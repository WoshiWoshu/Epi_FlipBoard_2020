const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    id: { type: Number, required: true },
    Tags: { type: Array, required: true },
    Title: { type: String, required: true },
    Link: { type: String, required: true },
    Image: { type: String, required: true},
    Desc: { type: String, required: true },
    Source: { type: String, required: true },
    Author: { type: String, required: true },
    Date: { type: String, required: true }
});

module.exports = mongoose.model('Article', articleSchema);
