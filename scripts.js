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

var clockElement = document.getElementById('clock');

function clock() {
    // Get the current date and time
    var now = new Date();
    
    // Format hours, minutes, and seconds
    var hours = now.getHours();
    var minutes = String(now.getMinutes()).padStart(2, '0'); // Pad with zero if needed
    // var seconds = String(now.getSeconds()).padStart(2, '0'); // Pad with zero if needed
    
    // Convert to 12-hour format
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12; // Convert to 12-hour format
    hours = hours ? String(hours).padStart(2, '0') : '12'; // Adjust for '0' hour

    // Set the clock text
    clockElement.textContent = `${hours}:${minutes}${ampm}`;
}

// Update the clock every second
setInterval(clock, 1000);

// Initial call to display clock immediately on load
clock();




// To Do:
// - Add pixel icons
// - Add station picker (add 2 more stations)
// - Add an option to play a game of Pong in a popup window