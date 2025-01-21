// Get the toggle button and side menu
const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');

// Add event listener for button click
menuToggle.addEventListener('click', () => {
    // Toggle the "active" class on the side menu
    sideMenu.classList.toggle('active');
});
