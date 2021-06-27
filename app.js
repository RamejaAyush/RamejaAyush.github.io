// all variables
const themeSwitch = document.querySelector('#switch');
const body = document.body;

// functions
function changeTheme() {
 body.classList.toggle('black');
}

function changeIcon() {
 if (body.classList.contains('black')) {
  themeSwitch.classList.replace('fa-sun', 'fa-moon');
 } else {
  themeSwitch.classList.replace('fa-moon', 'fa-sun');
 }
}

// event listerns
themeSwitch.addEventListener('click', changeTheme);
themeSwitch.addEventListener('click', changeIcon);
