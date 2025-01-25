let tapCount = 0;
let timeout;

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');

  // Increment tap count for Pac-Man Easter egg
  tapCount++;
  clearTimeout(timeout);
  timeout = setTimeout(() => (tapCount = 0), 1000);

  if (tapCount === 5) {
    displayPacMan();
  }
}

function displayPacMan() {
  const pacmanContainer = document.getElementById('pacman-container');
  pacmanContainer.classList.remove('hidden');
}
