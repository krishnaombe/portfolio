// Set correct LinkedIn URL
const linkedIn = document.getElementById('linkedin-link');
linkedIn.href = 'https://www.linkedin.com/in/shrikrushnabombe/'; // Replace if you have a different username

// Smooth scrolling for navbar links
const navbarLinks = document.querySelectorAll('nav ul li a');
navbarLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const section = document.querySelector(href);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 32,
          behavior: 'smooth'
        });
      }
    }
  });
});
