// frontend/script.js
document.addEventListener('DOMContentLoaded', () => {
    const questionContainer = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('next-button');
    const resultContainer = document.getElementById('result-container');
    const scoreElement = document.getElementById('score');

    let currentQuestionIndex = 0;
    let score = 0;
    let questions = [];

    // Fetch quiz questions from the backend
    fetch('http://localhost:5000/api/quiz/questions')
        .then(response => response.json())
        .then(data => {
            questions = data;
            showQuestion();
        });

    function showQuestion() {
        const question = questions[currentQuestionIndex];
        questionElement.textContent = question.question;
        optionsElement.innerHTML = '';

        question.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => checkAnswer(option));
            optionsElement.appendChild(button);
        });
    }

    function checkAnswer(selectedOption) {
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (selectedOption === correctAnswer) {
            score++;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        questionContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        scoreElement.textContent = `You scored ${score} out of ${questions.length}!`;
    }

    nextButton.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    });
});
