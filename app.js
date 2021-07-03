// all variables
const themeSwitch = document.querySelector('#theme');
const body = document.body;

// functions
function changeTheme() {
 body.classList.toggle('dark');
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
