// frontend/script.js
document.addEventListener('DOMContentLoaded', () => {
    fetchCourses();

    const form = document.getElementById('course-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;

        fetch('http://localhost:5000/api/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, description })
        })
        .then(response => response.json())
        .then(() => {
            fetchCourses();
            form.reset();
        });
    });
});

function fetchCourses() {
    fetch('http://localhost:5000/api/courses')
        .then(response => response.json())
        .then(courses => {
            const courseList = document.getElementById('course-list');
            courseList.innerHTML = '';
            courses.forEach(course => {
                const courseDiv = document.createElement('div');
                courseDiv.innerHTML = `<h3>${course.title}</h3><p>${course.description}</p>`;
                courseList.appendChild(courseDiv);
            });
        });
}
