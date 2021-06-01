// backend/routes/music.js
const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./music.db');

router.get('/', (req, res) => {
    db.all('SELECT * FROM music', [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

router.post('/', (req, res) => {
    const { title, artist, file } = req.body;
    db.run('INSERT INTO music (title, artist, file) VALUES (?, ?, ?)', [title, artist, file], function (err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.status(201).json({ id: this.lastID });
    });
});

module.exports = router;
