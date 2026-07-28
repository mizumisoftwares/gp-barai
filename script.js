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
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const alertBox = document.getElementById('form-alert');
    
    alertBox.style.display = 'block';
    alertBox.style.padding = '10px';
    alertBox.style.backgroundColor = '#d4edda';
    alertBox.style.color = '#155724';
    alertBox.style.borderRadius = '4px';
    alertBox.style.marginTop = '15px';
    alertBox.innerHTML = `Thank you, <strong>${name}</strong>! Your application/grievance has been registered successfully with Gram Panchayat Barai office.`;
    
    document.getElementById('grievanceForm').reset();
}