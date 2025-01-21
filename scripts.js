// Get elements
const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');

// Add event listener for the button
menuToggle.addEventListener('click', () => {
    sideMenu.classList.toggle('active'); // Toggle the "active" class
});
