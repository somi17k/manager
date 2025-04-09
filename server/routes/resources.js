const express = require('express');
const router = express.Router();
const Resource = require('../models/Resource');

// GET all resources
router.get('/', async (req, res) => {
    const resources = await Resource.find();
    res.json(resources);
});

// POST new resource
router.post('/', async (req, res) => {
    const newResource = new Resource({ name: req.body.name });
    await newResource.save();
    res.json(newResource);
});

// DELETE a resource
router.delete('/:id', async (req, res) => {
    await Resource.findByIdAndDelete(req.params.id);
    res.json({ message: 'Resource deleted' });
});

module.exports = router;
