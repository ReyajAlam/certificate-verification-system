const express = require('express');
const router = express.Router();
const Certificate = require('../models/certificateModel');

// Add Certificate
router.post('/add', async (req, res) => {
  const { certificateId, name, course, issuedDate } = req.body;
  
  try {
    const certificate = new Certificate({
      certificateId,
      name,
      course,
      issuedDate
    });

    await certificate.save();
    res.status(201).json({ message: 'Certificate added successfully', certificate });
  } catch (error) {
    res.status(500).json({ message: 'Error adding certificate', error });
  }
});

// Get All Certificates
router.get('/', async (req, res) => {
  try {
    const certificates = await Certificate.find();
    res.status(200).json(certificates);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching certificates', error });
  }
});

module.exports = router;
