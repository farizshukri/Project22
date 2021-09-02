// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend')));

app.use('/api/quiz', require('./routes/quiz'));

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
