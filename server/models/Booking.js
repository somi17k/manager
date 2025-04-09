const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    preferredDate: Date,
    serviceType: String, // "call" or "visit"
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Booking', bookingSchema);
