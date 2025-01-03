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