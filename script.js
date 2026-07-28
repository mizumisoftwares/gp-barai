// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('nav ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('show');
        });
    }

    // Active page highlighter in Navbar
    const currentLocation = window.location.pathname.split("/").pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if(link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });
});

// Simple Grievance Form Handling
function sendToWhatsApp(event) {
    // Prevent the form from refreshing the page
    event.preventDefault();

    // 1. Get all the values from the form
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const category = document.getElementById('category').value;
    const message = document.getElementById('message').value;

    // 2. Format the message for WhatsApp (using * for bold text)
    const whatsappText = `*New Grievance / Contact Request*%0A%0A*Name:* ${name}%0A*Mobile:* ${phone}%0A*Subject:* ${category}%0A*Message:* ${message}`;

    // 3. Your WhatsApp Number (no '+' or leading zeros)
    const whatsappNumber = "918115749248";

    // 4. Create the final WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

    // 5. Open WhatsApp in a new tab/window
    window.open(whatsappURL, '_blank');
}
