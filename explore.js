// Smooth scrolling
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');

    if(href.startsWith('#')) {
      e.preventDefault();

      const target = document.querySelector(href);

      if(target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});

// Welcome message
window.addEventListener('load', () => {
  console.log('Explore School Page Loaded Successfully');
});