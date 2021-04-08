// backend/app.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('./music.db');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Initialize SQLite database
db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS music (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, artist TEXT, file TEXT)');
});

app.use('/api/music', require('./routes/music'));

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
