// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.querySelector('i').className =
    navLinks.classList.contains('open') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.querySelector('i').className = 'fa-solid fa-bars';
  })
);

// Reveal scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Hero: sin foto muestra hint
const heroImg  = document.getElementById('heroImg');
const heroWrap = document.getElementById('heroWrap');
const heroHint = document.getElementById('heroHint');
if (heroImg) {
  heroImg.addEventListener('error', () => {
    heroWrap.classList.add('no-img');
    if (heroHint) heroHint.style.display = 'flex';
  });
  heroImg.addEventListener('load', () => {
    if (heroHint) heroHint.style.display = 'none';
  });
}

// Galería: oculta img si no carga, muestra placeholder
['g1','g2','g3','g4'].forEach(id => {
  const img = document.getElementById(id);
  if (img) img.addEventListener('error', () => { img.style.display = 'none'; });
});

// Equipo: oculta img si no carga
const equipoImg = document.getElementById('equipoImg');
if (equipoImg) equipoImg.addEventListener('error', () => { equipoImg.style.display = 'none'; });

// Posts: oculta img si no carga
document.querySelectorAll('.post-item img').forEach(img => {
  img.addEventListener('error', () => { img.style.display = 'none'; });
});