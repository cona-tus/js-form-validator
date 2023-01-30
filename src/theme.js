const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');

const currentTheme = localStorage.getItem('theme');

function loadTheme() {
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleMode(true);
  }
}

function toggleMode(isDark) {
  isDark
    ? toggleIcon.children[0].classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.children[0].classList.replace('fa-moon', 'fa-sun');
}

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleMode(true);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleMode(false);
  }
}

toggleSwitch.addEventListener('change', switchTheme);

loadTheme();
