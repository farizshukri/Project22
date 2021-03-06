// frontend/script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form');
    const resumeOutput = document.getElementById('resume-output');
    const resumeContent = document.getElementById('resume-content');
    const printButton = document.getElementById('print-button');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const education = document.getElementById('education').value;
        const experience = document.getElementById('experience').value;

        fetch('http://localhost:5000/api/resume/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                education,
                experience
            })
        })
        .then(response => response.json())
        .then(data => {
            const resumeText = `
                Name: ${data.name}
                Email: ${data.email}
                Phone: ${data.phone}

                Education:
                ${data.education}

                Experience:
                ${data.experience}
            `;
            resumeContent.textContent = resumeText;
            resumeOutput.style.display = 'block';
        });
    });

    printButton.addEventListener('click', () => {
        window.print();
    });
});
