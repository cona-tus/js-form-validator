const container = document.getElementById('container');
const title = document.getElementById('title');
const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const userContainer = document.getElementById('user-container');

let isValid = false;
let passwordMatch = false;
let user = {};

function getUserData() {
  if (localStorage.getItem('user')) {
    user = JSON.parse(localStorage.getItem('user'));
    form.classList.add('hidden');
    userContainer.classList.remove('hidden');
    title.textContent = 'Good day!';
  } else {
    user = {};
    userContainer.classList.add('hidden');
    form.classList.remove('hidden');
    title.textContent = 'Sign Up Today!';
  }

  populateUserData();
}

function populateUserData() {
  userContainer.innerHTML = `
      <div class="user-image">
          <i class="fa-solid fa-user-large"></i>
          <h2 class="username">${user.name}</h2>
      </div>
          <ul class="user-info">
              <li class="info-item"><i class="fa-solid fa-phone"></i>${user.phone}</li>
              <li class="info-item"><i class="fa-solid fa-envelope"></i>${user.email}</li>
              <li class="info-item"><i class="fa-solid fa-house"></i>${user.website}</li>
          </ul>
          <button onclick="signOut()">Sign Out</button>
        `;

  container.appendChild(userContainer);
}

function signOut() {
  localStorage.removeItem('user');

  getUserData();
}

function storeFormData() {
  user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };

  localStorage.setItem('user', JSON.stringify(user));

  getUserData();
}

function validateForm() {
  isValid = form.checkValidity();

  if (password1El.value === password2El.value) {
    passwordMatch = true;
    password1El.nextElementSibling.style.color = 'var(--sucess-color)';
    password2El.nextElementSibling.style.color = 'var(--sucess-color)';
    return;
  } else {
    passwordMatch = false;
    password1El.nextElementSibling.style.color = 'var(--error-color)';
    password2El.nextElementSibling.style.color = 'var(--error-color)';
    return;
  }
}

function submitForm(event) {
  event.preventDefault();

  validateForm();

  if (isValid && passwordMatch) {
    storeFormData();
    form.reset();
    password1El.nextElementSibling.style.color = '';
    password2El.nextElementSibling.style.color = '';
  }
}

form.addEventListener('submit', submitForm);

getUserData();
