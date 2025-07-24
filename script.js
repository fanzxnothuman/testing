document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS
    AOS.init({
        duration: 1000, // Durasi animasi dalam ms
        once: true,    // Animasi hanya sekali saat di-scroll ke elemen
        mirror: false, // Animasi tidak akan terulang saat scroll ke atas
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('dark-mode-checkbox');
    const body = document.body;

    // Check for saved dark mode preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-mode') {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            // Check if the target is an internal section link
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - document.querySelector('.navbar').offsetHeight, // Adjust for sticky navbar height
                        behavior: 'smooth'
                    });
                }
            } else {
                // If it's an external link or not a hash, just navigate
                window.location.href = targetId;
            }
        });
    });

    // Handle Contact Form Submission (Frontend only)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission

            // You can add client-side validation here
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert('Terima kasih atas pesan Anda! Saya akan segera menghubungi Anda.');
                contactForm.reset(); // Clear the form
            } else {
                alert('Mohon lengkapi semua kolom formulir.');
            }

            // In a real application, you would send this data to a backend server.
            // For a frontend-only portfolio, this alert is sufficient.
        });
    }
});