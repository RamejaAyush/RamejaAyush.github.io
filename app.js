// all variables
const themeSwitch = document.querySelector('#theme');
const body = document.body;

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

// event listerns
themeSwitch.addEventListener('click', changeTheme);
themeSwitch.addEventListener('click', changeIcon);
