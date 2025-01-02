document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const soundWave = document.getElementById('soundWave');
    const volumeControl = document.getElementById('volume');
    const lofiBeatsBtn = document.querySelector('.station-list li:nth-child(1)');
    const calmStudyingBtn = document.querySelector('.station-list li:nth-child(2)');
    const streamTitle = document.getElementById('audio-title'); // Audio Title Element
    
    let videoData;
    let title;
    let player;
    let currentSource = 'radio'; // Current Audio Source Tracker

    if (currentSource === 'radio') {
        title = 'Lofi Beats Radio';
        streamTitle.textContent = title;
    }

    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('player', {
            height: '0',
            width: '0',
            videoId: 'Vg13S-zzol0', // YouTube video ID
            events: {
                'onReady': onPlayerReady,
                'onError': onPlayerError // Add error handling
            }
        });
    };

    function onPlayerReady() {
        playPauseBtn.addEventListener('click', function() {
            if (currentSource === 'radio') {
                toggleRadio();
            } else {
                toggleYouTube();
            }
        });
        videoData = player.getVideoData();
    }

    function onPlayerError(event) {
        console.error('Error occurred in YouTube player:', event.data); // Error handling
    }

    function toggleRadio() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>'; // Change to pause icon
            soundWave.classList.add('playing'); // Add animation when playing
        } else {
            audio.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>'; // Change to play icon
            soundWave.classList.remove('playing'); // Remove animation when paused
        }
    }

    function toggleYouTube() {
        if (player.getPlayerState() === YT.PlayerState.PLAYING) {
            player.pauseVideo();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            soundWave.classList.remove('playing');
        } else {
            player.playVideo();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            soundWave.classList.add('playing');
        }
    }

    lofiBeatsBtn.addEventListener('click', () => {
        if (currentSource === 'youtube') {
            player.pauseVideo();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
        currentSource = 'radio';
        audio.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        soundWave.classList.add('playing');
        title = title = 'Lofi Beats Radio';
        streamTitle.textContent = title;
    });

    calmStudyingBtn.addEventListener('click', () => {
        if (currentSource === 'radio') {
            audio.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
        currentSource = 'youtube';
        player.playVideo();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        soundWave.classList.add('playing');
        title = videoData.title;
        streamTitle.textContent = title;
        
    });

    // Stop the animation if the audio ends
    audio.addEventListener('ended', () => {
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>'; // Change to play icon
        soundWave.classList.remove('playing');
    });

    // Update audio volume based on volume control input
    volumeControl.addEventListener('input', (event) => {
        audio.volume = event.target.value / 100;
        player.setVolume(event.target.value); // Update YouTube player volume
    });

    // const canvas = document.getElementById('pong');
    // const context = canvas.getContext('2d');
    // const scoreElement = document.getElementById('score');

    // const paddleWidth = 10, paddleHeight = 100, ballSize = 10;
    // let playerY = canvas.height / 2 - paddleHeight / 2;
    // let aiY = canvas.height / 2 - paddleHeight / 2;
    // let ballX = canvas.width / 2 - ballSize / 2;
    // let ballY = canvas.height / 2 - ballSize / 2;
    // let ballSpeedX = 5, ballSpeedY = 5;
    // let playerScore = 0, aiScore = 0;
    // let hitCount = 0;
    // let animationFrameId;

    // function drawRect(x, y, width, height, color) {
    //     context.fillStyle = color;
    //     context.fillRect(x, y, width, height);
    // }

    // function drawBall(x, y, size, color) {
    //     context.fillStyle = color;
    //     context.fillRect(x, y, size, size);
    // }

    // function movePlayer(event) {
    //     const rect = canvas.getBoundingClientRect();
    //     playerY = event.clientY - rect.top - paddleHeight / 2;
    // }

    // function moveBall() {
    //     ballX += ballSpeedX;
    //     ballY += ballSpeedY;

    //     if (ballY <= 0 || ballY + ballSize >= canvas.height) {
    //         ballSpeedY = -ballSpeedY;
    //     }

    //     if (ballX <= paddleWidth) {
    //         if (ballY > playerY && ballY < playerY + paddleHeight) {
    //             ballSpeedX = -ballSpeedX;
    //             hitCount++;
    //             increaseBallSpeed();
    //         } else {
    //             aiScore++;
    //             updateScore();
    //             resetBall();
    //         }
    //     }

    //     if (ballX + ballSize >= canvas.width - paddleWidth) {
    //         if (ballY > aiY && ballY < aiY + paddleHeight) {
    //             ballSpeedX = -ballSpeedX;
    //             hitCount++;
    //             increaseBallSpeed();
    //         } else {
    //             playerScore++;
    //             updateScore();
    //             resetBall();
    //         }
    //     }

    //     aiY += (ballY - (aiY + paddleHeight / 2)) * 0.1;
    // }

    // function resetBall() {
    //     ballX = canvas.width / 2 - ballSize / 2;
    //     ballY = canvas.height / 2 - ballSize / 2;
    //     ballSpeedX = 5;
    //     ballSpeedY = 5;
    //     hitCount = 0;
    // }

    // function increaseBallSpeed() {
    //     if (hitCount % 5 === 0) {
    //         ballSpeedX += (ballSpeedX > 0 ? 1 : -1);
    //         ballSpeedY += (ballSpeedY > 0 ? 1 : -1);
    //     }
    // }

    // function draw() {
    //     drawRect(0, 0, canvas.width, canvas.height, '#000');
    //     drawRect(0, playerY, paddleWidth, paddleHeight, '#fff');
    //     drawRect(canvas.width - paddleWidth, aiY, paddleWidth, paddleHeight, '#fff');
    //     drawBall(ballX, ballY, ballSize, '#fff');
    // }

    // function gameLoop() {
    //     moveBall();
    //     draw();
    //     animationFrameId = requestAnimationFrame(gameLoop);
    // }

    // function updateScore() {
    //     scoreElement.textContent = `Player: ${playerScore} | AI: ${aiScore}`;
    // }

    // canvas.addEventListener('mousemove', movePlayer);

    // function openPong() {
    //     document.getElementById('pong').style.display = 'block';
    //     document.getElementById('score').style.display = 'block';
    //     document.getElementById('closePongBtn').style.display = 'block';
    //     document.getElementById('playPongBtn').style.display = 'none';
    //     gameLoop();
    // }

    // function closePong() {
    //     document.getElementById('pong').style.display = 'none';
    //     document.getElementById('score').style.display = 'none';
    //     document.getElementById('closePongBtn').style.display = 'none';
    //     document.getElementById('playPongBtn').style.display = 'block';
    //     cancelAnimationFrame(animationFrameId);
    //     resetGame();
    // }

    // function resetGame() {
    //     playerScore = 0;
    //     aiScore = 0;
    //     updateScore();
    //     resetBall();
    // }

    // window.openPong = openPong;
    // window.closePong = closePong;

    // function setClock() {
    //     const now = new Date();
    //     const hours = now.getHours();
    //     const minutes = String(now.getMinutes()).padStart(2, '0');
    //     const seconds = String(now.getSeconds()).padStart(2, '0');
    //     const ampm = hours >= 12 ? 'PM' : 'AM';
    //     const formattedHours = hours % 12 || 12;

    //     const clockElement = document.getElementById('clock');
    //     if (clockElement) {
    //         clockElement.textContent = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
    //     }
    // }

    // setInterval(setClock, 1000);
    // setClock(); // Initial call to set the clock immediately
});

function changeBackground(gif, element) {
    document.getElementById('background-image').src = gif;
    
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.bg-options button');
    buttons.forEach(button => button.classList.remove('active'));

    // Add active class to the clicked button
    element.classList.add('active');
}

function downloadText(element){
    var data = element.value; // Use value instead of textContent
    var downloadbtn = document.getElementById('text-download');
    downloadbtn.href = "data:text/plain;charset=UTF-8,"  + encodeURIComponent(data);
    console.log(data);
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}