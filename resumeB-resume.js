// backend/routes/resume.js
const express = require('express');
const router = express.Router();

router.post('/generate', (req, res) => {
    const { name, email, phone, education, experience } = req.body;

    // Here you would normally handle the resume generation logic,
    // such as saving to a file or creating a PDF.

    // For simplicity, we're just returning the data as a JSON object.
    res.json({
        name,
        email,
        phone,
        education,
        experience
    });
});

module.exports = router;
