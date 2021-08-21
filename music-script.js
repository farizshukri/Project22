// frontend/script.js
document.addEventListener('DOMContentLoaded', () => {
    fetchMusic();

    const form = document.getElementById('music-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const artist = document.getElementById('artist').value;
        const file = document.getElementById('file').value;

        fetch('http://localhost:5000/api/music', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, artist, file })
        })
        .then(response => response.json())
        .then(() => {
            fetchMusic();
            form.reset();
        });
    });
});

function fetchMusic() {
    fetch('http://localhost:5000/api/music')
        .then(response => response.json())
        .then(musicList => {
            const musicListDiv = document.getElementById('music-list');
            musicListDiv.innerHTML = '';
            musicList.forEach(song => {
                const songDiv = document.createElement('div');
                songDiv.innerHTML = `
                    <h3>${song.title}</h3>
                    <p>${song.artist}</p>
                    <button onclick="playSong('${song.file}')">Play</button>
                `;
                musicListDiv.appendChild(songDiv);
            });
        });
}

function playSong(file) {
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = file;
    audioPlayer.play();
}
