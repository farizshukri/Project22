// backend/routes/courses.js
const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

router.get('/', async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
});

router.post('/', async (req, res) => {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.status(201).json(newCourse);
});

module.exports = router;
