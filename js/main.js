// Sweet Crumbs Bakery – Main JS

// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const nav       = document.getElementById('main-nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Mark current page link as active
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});
