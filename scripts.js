document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const soundWave = document.getElementById('soundWave');

    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = 'Pause';
            soundWave.classList.add('playing'); // Add animation when playing
        } else {
            audio.pause();
            playPauseBtn.textContent = 'Play';
            soundWave.classList.remove('playing'); // Remove animation when paused
        }
    });

    // Stop the animation if the audio ends
    audio.addEventListener('ended', () => {
        playPauseBtn.textContent = 'Play';
        soundWave.classList.remove('playing');
    });
});


function changeBackground(gif, element) {
    document.getElementById('background-image').src = gif;
    
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.bg-options button');
    buttons.forEach(button => button.classList.remove('active'));

    // Add active class to the clicked button
    element.classList.add('active');
}



// To Do:
// - Create a function that changes the color of the selected background
// - Add pixel icons
// - Add animated soundwave
// - Add station picker (add 2 more stations)
// - Add an option to play a game of Pong in a popup window