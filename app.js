// all variables
const themeSwitch = document.querySelector('#theme');
const body = document.body;
const nav = document.querySelector('#nav');

// functions
function changeTheme() {
 if (body.classList.contains('dark')) {
  body.classList.replace('dark', 'light');
 } else {
  body.classList.replace('light', 'dark');
 }
}

function changeIcon() {
 if (body.classList.contains('dark')) {
  themeSwitch.classList.replace('fa-sun', 'fa-moon');
 } else {
  themeSwitch.classList.replace('fa-moon', 'fa-sun');
 }
}

//applying styles on nav
window.addEventListener('scroll', () => {
 if (window.pageYOffset > 50) {
  nav.classList.add('scrolled');
 } else {
  nav.classList.remove('scrolled');
 }
});

// event listerns
themeSwitch.addEventListener('click', changeTheme);
themeSwitch.addEventListener('click', changeIcon);
