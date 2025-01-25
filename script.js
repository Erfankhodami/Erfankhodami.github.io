let clickCount = 0;
let score = 0;
const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');
const gameContainer = document.getElementById('game');
let lastClickTime = 0;
const timeLimit = 3000; // 3 seconds (3,000 milliseconds) time limit between clicks

// Function to toggle the sidebar visibility
function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');

  const currentTime = new Date().getTime();

  // Check if the time between the current click and the last click is within the time limit
  if (currentTime - lastClickTime <= timeLimit) {
    clickCount++;
  } else {
    clickCount = 1; // Reset click count if time limit is exceeded
  }

  lastClickTime = currentTime; // Update last click time

  if (clickCount >= 5) {
    gameContainer.style.display = 'block'; // Show the mini-game after 5 continuous clicks
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
