const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.post('/', async (req, res) => {
    const { name, phone, address, preferredDate, serviceType } = req.body;
    const booking = new Booking({ name, phone, address, preferredDate, serviceType });
    await booking.save();
    res.json({ message: 'Booking successful!', booking });
});

module.exports = router;
