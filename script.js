const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const footerCopy = document.querySelector('.footer-copy');
const search = document.querySelector('.search-box');



search.addEventListener('click', () => {
  search.classList.toggle('open');
});

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

footerCopy.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

