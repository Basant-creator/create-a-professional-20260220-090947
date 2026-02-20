// js/navigation.js - Navigation specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');

    // Hamburger menu toggle
    if (hamburger && mainNav && navList) {
        hamburger.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            hamburger.classList.toggle('is-active');
            
            // Toggle aria-expanded attribute for accessibility
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
            hamburger.setAttribute('aria-expanded', !isExpanded);
        });

        // Close menu when a link is clicked (for mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    hamburger.classList.remove('is-active');
                    hamburger.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Close menu if clicking outside (optional, but good for UX)
        document.addEventListener('click', (event) => {
            if (!mainNav.contains(event.target) && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                hamburger.classList.remove('is-active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Highlight current page in navigation
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        // Remove 'current-page' from all links first to ensure only one is active
        link.classList.remove('current-page');

        // Check if the link's href matches the current page path
        // Adjust logic for 'index.html' to correctly highlight 'Home'
        const linkPath = link.getAttribute('href');
        
        if (currentPath.endsWith(linkPath) || 
           (currentPath === '/' && linkPath === 'index.html') ||
           (currentPath.endsWith('/index.html') && linkPath === 'index.html')) {
            link.classList.add('current-page');
        }
    });
});