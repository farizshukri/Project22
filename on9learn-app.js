// backend/app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/online-learning', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Course = require('./models/Course');

app.use('/api/courses', require('./routes/courses'));

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
