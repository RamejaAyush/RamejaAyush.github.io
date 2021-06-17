const nav = document.querySelector('#nav');

window.addEventListener('scroll', () => {
 if (window.pageYOffset > 50) {
  nav.classList.add('scrolled');
 } else {
  nav.classList.remove('scrolled');
 }
});
