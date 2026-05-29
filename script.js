// Footer year
const footerYear = new Date().getFullYear();
console.log("Website loaded successfully - " + footerYear);

// Smooth scrolling
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if(targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Buttons interaction
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (!button.id) {
      alert('Welcome to Bright Future Academy!');
    }
  });
});

// Explore School button
const exploreBtn = document.getElementById('exploreBtn');

if (exploreBtn) {
  exploreBtn.addEventListener('click', () => {
    const importantSection = document.querySelector('#programs');

    if (importantSection) {
      importantSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
}
});



