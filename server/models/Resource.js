const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dateAdded: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Resource', resourceSchema);
