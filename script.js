let clickCount = 0;
let score = 0;
const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');
const gameContainer = document.getElementById('game');

// Function to toggle the sidebar visibility
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');

  // Track clicks
  clickCount++;
  if (clickCount >= 5) {
    gameContainer.style.display = 'block'; // Show the mini-game after 5 clicks
    document.querySelector('.open-btn').disabled = true; // Disable the sidebar button to prevent further clicks
  }
}

// Ball click event to increase score
ball.addEventListener('click', function () {
  score++;
  scoreDisplay.textContent = score;
  moveBall(); // Move the ball to a random position after each click
});

// Generate a random position for the ball
function moveBall() {
  ball.style.top = `${Math.random() * 80}%`;
  ball.style.left = `${Math.random() * 80}%`;
}

setInterval(moveBall, 1000); // Move the ball every second
