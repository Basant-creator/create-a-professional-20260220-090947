// js/script.js - General purpose JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links (if any exist)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') { // Prevent error if href is just '#'
                return;
            }
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Basic form submission handler for contact page (client-side only)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission

            // Simple validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !subject || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            if (!/\S+@\S+\.\S+/.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Simulate form submission
            console.log('Form Submitted:', { name, email, phone: document.getElementById('phone').value.trim(), subject, message });
            alert('Thank you for your message! We will get back to you shortly.');

            // Reset form
            contactForm.reset();
        });
    }
});