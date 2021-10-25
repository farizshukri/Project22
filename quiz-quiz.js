// backend/routes/quiz.js
const express = require('express');
const router = express.Router();

// Sample quiz questions
const questions = [
    {
        id: 1,
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        answer: 'Paris'
    },
    {
        id: 2,
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Jupiter', 'Mars', 'Saturn'],
        answer: 'Mars'
    },
    {
        id: 3,
        question: 'Who wrote "To Kill a Mockingbird"?',
        options: ['Harper Lee', 'Mark Twain', 'Ernest Hemingway', 'F. Scott Fitzgerald'],
        answer: 'Harper Lee'
    }
];

router.get('/questions', (req, res) => {
    res.json(questions);
});

module.exports = router;
