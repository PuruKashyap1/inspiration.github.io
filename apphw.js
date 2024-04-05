
  document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Hamburger menu toggle
    const menuToggle = document.querySelector('.menu-toggle input');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function() {
      navList.classList.toggle('slide');
    });
  });
