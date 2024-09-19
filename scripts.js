document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    
    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    stopBtn.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;
        playPauseBtn.textContent = 'Play';
    });
});

function changeBackground(gif) {
    document.getElementById('background-image').src = gif;
}

// To Do:
// - Create a function that changes the color of the selected background
// - Add pixel icons
// - Add animated soundwave
// - Add station picker (add 2 more stations)
// - Add an option to play a game of Pong in a popup window