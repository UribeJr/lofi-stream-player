document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const soundWave = document.getElementById('soundWave');
    const volumeControl = document.getElementById('volume');
    const stationListItems = document.querySelectorAll('.station-list li');
    const streamTitle = document.getElementById('audio-title'); // Audio Title Element
    
    let player1, player2;
    let currentSource = 'radio'; // Current Audio Source Tracker

    window.onYouTubeIframeAPIReady = function() {
        player1 = new YT.Player('player1', {
            height: '0',
            width: '0',
            videoId: 'Vg13S-zzol0', // YouTube video ID for Calm Studying
            events: {
                'onReady': onPlayerReady,
                'onError': onPlayerError // Add error handling
            }
        });

        player2 = new YT.Player('player2', {
            height: '0',
            width: '0',
            videoId: '4khIPP--FDU', // YouTube video ID for Raining in Japan
            events: {
                'onReady': onPlayerReady,
                'onError': onPlayerError // Add error handling
            }
        });
    };

    function onPlayerReady() {
        // No need to add event listener here
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

    function toggleYouTube(player) {
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

    playPauseBtn.addEventListener('click', function() {
        if (currentSource === 'radio') {
            toggleRadio();
        } else if (currentSource === 'youtube1') {
            toggleYouTube(player1);
        } else if (currentSource === 'youtube2') {
            toggleYouTube(player2);
        }
    });

    stationListItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.textContent;
            streamTitle.textContent = title;

            if (title === 'Lofi Beats') {
                if (currentSource !== 'radio') {
                    if (currentSource === 'youtube1') {
                        player1.pauseVideo();
                    } else if (currentSource === 'youtube2') {
                        player2.pauseVideo();
                    }
                    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
                }
                currentSource = 'radio';
                audio.play();
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
                soundWave.classList.add('playing');
            } else if (title === 'Raining in Japan 🌧️') {
                if (currentSource === 'radio') {
                    audio.pause();
                } else if (currentSource === 'youtube2') {
                    player2.pauseVideo();
                }
                currentSource = 'youtube1';
                player1.playVideo();
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
                soundWave.classList.add('playing');
            } else if (title === 'Piano - Studying, Relaxing 🎹') {
                if (currentSource === 'radio') {
                    audio.pause();
                } else if (currentSource === 'youtube1') {
                    player1.pauseVideo();
                }
                currentSource = 'youtube2';
                player2.playVideo();
                playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
                soundWave.classList.add('playing');
            }
        });
    });

    // Stop the animation if the audio ends
    audio.addEventListener('ended', () => {
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>'; // Change to play icon
        soundWave.classList.remove('playing');
    });

    // Update audio volume based on volume control input
    volumeControl.addEventListener('input', (event) => {
        audio.volume = event.target.value / 100;
        player1.setVolume(event.target.value); // Update YouTube player volume
        player2.setVolume(event.target.value); // Update YouTube player volume
    });

    // Fetch and display local weather
    function fetchWeather(lat, lon) {
        const apiKey = 'f2d44bbcd88c7bde400d387c24076417';
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('Weather data:', data); // Log weather data to console
                const weatherIcon = document.getElementById('weather-icon');
                const weatherDescription = document.getElementById('weather-description');
                const temperature = document.getElementById('temperature');
                const highLow = document.getElementById('high-low');
                
                let icon = data.weather[0].icon;
                console.log(icon);
                
                weatherIcon.style.backgroundImage = `url(http://openweathermap.org/img/wn/${icon}@2x.png)`;
                weatherDescription.textContent = data.weather[0].description;
                temperature.textContent = `${data.main.temp}°F`;
                highLow.textContent = `H: ${data.main.temp_max}°F | L: ${data.main.temp_min}°F`;
            })
            .catch(error => console.error('Error fetching weather data:', error));
    }

    function getLocationAndFetchWeather() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                fetchWeather(lat, lon);
            }, error => {
                console.error('Error getting location:', error);
                // Fallback to a default location if geolocation fails
                fetchWeather(40.7128, -74.0060); // New York City coordinates
            });
        } else {
            console.error('Geolocation is not supported by this browser.');
            // Fallback to a default location if geolocation is not supported
            fetchWeather(40.7128, -74.0060); // New York City coordinates
        }
    }

    getLocationAndFetchWeather();

    // Set default station to "Lofi Beats"
    const defaultStation = 'Lofi Beats 👾';
    streamTitle.textContent = defaultStation;
    audio.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    soundWave.classList.add('playing');
    currentSource = 'radio';

    // Handle name input
    const nameInputContainer = document.getElementById('name-input-container');
    const nameInput = document.getElementById('name-input');
    const submitNameBtn = document.getElementById('submit-name-btn');
    const userNameDisplay = document.getElementById('user-name-display');
    // const playerInfoContainer = document.getElementById('player-info-container');

    submitNameBtn.addEventListener('click', () => {
        const userName = nameInput.value;
        if (userName) {
            userNameDisplay.textContent = `Hello, ${userName}!`;
            // playerInfoContainer.style.display = 'block';
            nameInputContainer.style.display = 'none';

        }
    });

    const backgrounds = [
        'backgrounds/hakusho.gif',
        'backgrounds/bg.gif',
        'backgrounds/space.gif',
        'backgrounds/night-shift.gif'
    ];
    let currentBackgroundIndex = 0;

    function switchBackground() {
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
        document.getElementById('background-image').src = backgrounds[currentBackgroundIndex];
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 's' || event.key === 'S') {
            switchBackground();
        }
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