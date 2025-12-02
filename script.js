document.addEventListener('DOMContentLoaded', () => {
    // Get the hamburger icon element (the clickable button)
    const mobileMenu = document.getElementById('mobile-menu');
    // Get the list of navigation links (the element that slides out)
    const navbarMenu = document.querySelector('.navbar__menu');
    // Get the icon wrapper for the X-animation toggle
    const navbarToggle = document.querySelector('.navbar__toggle');

    function toggleMobileMenu() {
        // Toggle the 'active' class on both the menu links container and the icon itself
        navbarMenu.classList.toggle('active');
        navbarToggle.classList.toggle('active');
    }

    // 1. Event listener for the hamburger icon click
    if (mobileMenu) {
        mobileMenu.addEventListener('click', toggleMobileMenu);
    }

    // 2. Event listener to close the menu when a navigation link is clicked
    if (navbarMenu) {
        navbarMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Check if the menu is open before closing it
                if (navbarMenu.classList.contains('active')) {
                    toggleMobileMenu(); // Close the menu by toggling the classes back
                }
            });
        });
    }
});