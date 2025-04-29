// Smooth scroll function
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Initialize EmailJS once
(function() {
    emailjs.init("OR4CUClLKYuNH9P1F");  // Your public key here
})();

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Basic form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert("Please fill all fields.");
        return; // Stop submission if fields are empty
    }

    // Send email via EmailJS
    emailjs.send("service_1cmg6fo", "template_rd99dzg", {
        from_name: name,
        from_email: email,
        message: message
    }).then(function(response) {
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset();  // Reset form after successful submission
    }, function(error) {
        alert('Failed to send message. Please try again!');
        console.error('FAILED...', error);
    });
});

document.getElementById('downloadCV').addEventListener('click', function() {
    const link = document.createElement('a');
    // link.href = 'temp-resume.pdf'; // path to your resume
    link.download = 'temp-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});