# πͺͺ μ ν¨μ± κ²μ¬ μ±, 'Form Validator' ν μ΄νλ‘μ νΈ

![validator-light-thumb](https://user-images.githubusercontent.com/90844424/215409271-be40eed5-8654-4283-b806-aaa3ad5619a4.jpg)
![validator-dark-thumb](https://user-images.githubusercontent.com/90844424/215397726-3afb1676-d128-4bf8-a262-614a179ced10.jpg)

<br />

[![Netlify Status](https://api.netlify.com/api/v1/badges/f2fe495e-9fb3-4b7e-b424-b5d841c8c2db/deploy-status)](https://app.netlify.com/sites/conatus-js-form-validator/deploys) | [Live Demo](https://conatus-js-form-validator.netlify.app/)

<br/>
<br/>

# 1. Project

## 1.1. Project Information

> λ³Έ νλ‘μ νΈλ **μ ν¨μ± κ²μ¬ μ νλ¦¬μΌμ΄μ** μλλ€. μ¬μ©μκ° μλ ₯ν κ°μ λν΄ μ ν¨μ± κ²μ¬λ₯Ό μ§νν©λλ€. μ ν¨νμ§ μμ κ°μ λΉ¨κ°μμΌλ‘, μ ν¨ν κ°μ μ΄λ‘μμΌλ‘ label μμμ νκΈ°ν¨μΌλ‘μ¨ μ§κ΄μ μΌλ‘ μ λ³΄λ₯Ό μ λ¬ν©λλ€. μ¬μ©μ μ λ³΄λ₯Ό λ±λ‘νκ³  νλ©΄μ νμνλ©°, Sign Out λ²νΌμ λλ¬ μ λ³΄λ₯Ό μ΄κΈ°νν  μ μμ΅λλ€. μ¬μ©μμ νΈμμ λ°λΌ λ κ°μ§ νλ§(<u>Light or Dark Mode</u>)κ° μ§μλλ©°, <u>λ°μν μΉ</u>μΌλ‘ μλν©λλ€.

<br/>

## 1.2. Project Duration & Participants

- 2023-1-29 ~ 2023-1-29
- κ°μΈ νλ‘μ νΈ (1μΈ)

<br/>
<br/>

# 2. Skills

![HTML](https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JAVASCRIPT](https://img.shields.io/badge/JavaScript-f6e158?style=for-the-badge&logo=JavaScript&logoColor=ffffff) ![Git](https://img.shields.io/badge/Git-f05032?style=for-the-badge&logo=git&logoColor=ffffff)

<br/>
<br/>

# 3. Main Features

## 3.1. Validation Check

![validator-check](https://user-images.githubusercontent.com/90844424/215418922-647c65b9-0c78-4876-af5d-2657ec92aff5.gif)

input νκ·Έμ `pattern` μμ±μ μ κ·μ(regex)μ λͺμνμ¬ νΌ μ μΆ μ κ°μ κ²μ¦ν  μ μλλ‘ ν©λλ€. μ΄λ μ μ­ μμ±μΈ `title`μ λΆμ° μ€λͺμ μΆκ°νμ¬ μ€ν¬λ¦°λ¦¬λ μ΄μ©μλ₯Ό ν¬ν¨, μ¬μ©μκ° μ νν κ°μ μλ ₯νλλ‘ λμμ€λλ€. tel, email, password νμμ μ μ©νμμΌλ©° μμλ μλμ κ°μ΅λλ€.

```html
<form id="form">
  <div class="form-group">
    <input
      id="password1"
      type="password"
      required
      placeholder="Create Password (Min. 8 characters)"
      pattern="((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})"
      title="Please include at least 1 uppercase character, 1 lowercase character, 1 special character, and 1 number."
    />
    <label class="label" for="password1">Password</label>
  </div>
  <button type="submit">Register</button>
</form>
```

`checkValidity()` λ©μλλ₯Ό μ¬μ©νμ¬ μ¬μ©μ μλ ₯ μ λ³΄κ° μ ν¨νμ§ νμΈν©λλ€. λ λΉλ°λ²νΈκ° μΌμΉνμ§ μμ κ²½μ° labelμ colorκ° λΉ¨κ°κ² νμλ©λλ€.

```js
let isValid = false;
let passwordMatch = false;

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
```

<br/>

## 3.2. Store User info in the Local Storage

![validator-store](https://user-images.githubusercontent.com/90844424/215411814-365614b7-957e-4cf8-b932-c12d30a4fc41.gif)

νΌ μ μΆ μ μλ ₯κ°μ΄ μ ν¨νκ³  λ λΉλ°λ²νΈκ° μΌμΉνλ€λ©΄ `storeFormData()` ν¨μλ₯Ό νΈμΆν©λλ€. input μμμ `name` μμ±μΌλ‘ κ°μ μ°Έμ‘°νμ¬ μ¬μ©μ μ λ³΄λ₯Ό λ‘μ»¬μ€ν λ¦¬μ§μ μ μ₯ν©λλ€.

```js
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
```

<br />

## 3.3. Reset Form Data

![validator-reset](https://user-images.githubusercontent.com/90844424/215415271-22a2e63f-a41c-40d0-8ee7-d774be98849e.gif)

νΌ μ μΆμ μ±κ³΅νλ©΄ νμ΄μ§κ° μ νλκ³ , `form.reset()` λ©μλλ‘ κ°μ μ΄κΈ°νν©λλ€. λΉλ°λ²νΈ input μμμ label μμμ΄ μ΄κΈ°νλμ§ μλ λ¬Έμ κ° μμ΄ location.reload() λ©μλλ‘ μλ‘κ³ μΉ¨μ ν΄μ£ΌμμΌλ, λ¦¬μμ€λ₯Ό λ€μ λΆλ¬μ€λ κ²μ λΆνμνλ€ μκ°νμ¬ CSS styleμ μ΄κΈ°ννμ¬ ν΄κ²°νμ΅λλ€.

```js
function submitForm(event) {
  event.preventDefault();

  validateForm();

  if (isValid && passwordMatch) {
    storeFormData();
    form.reset();

    // μ€νμΌ μ΄κΈ°ν
    password1El.nextElementSibling.style.color = '';
    password2El.nextElementSibling.style.color = '';
  }
}

form.addEventListener('submit', submitForm);
```

```js
function signOut() {
  localStorage.removeItem('user');
  // location.reload(); μ­μ 

  getUserData();
}
```

<br/>

## 3.4. Get User Data from Local Storage

![validator-parse](https://user-images.githubusercontent.com/90844424/215409298-9c4c80eb-ac17-4670-8c36-f6b6660fbd64.jpg)

λ‘μ»¬μ€ν λ¦¬μ§μ JSON.stringify()λ‘ μ μ₯λ λ°μ΄ν°κ° μλ€λ©΄, κ·Έκ²μ λ€μ JSON.parse()λ₯Ό ν΅ν΄ νμ±νμ¬ λ³΄μ¬μ€λλ€. μ λ³΄κ° μλ€λ©΄ λΉ κ°μ²΄λ₯Ό λ°νν©λλ€.

```js
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
```

<br/>
<br/>

## 3.5. Populate Data on DOM

userContainerμ innerHTMLμ λ³κ²½νμ¬ li μμμ μ¬μ©μ μ λ³΄κ°μ μ±μλλ€. κ·Έ λ€μ appendChild() λ©μλλ₯Ό ν΅ν΄ μ μ²΄ containerμ userContainerλ₯Ό μμ μμλ‘ μΆκ°ν©λλ€.

```js
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
```

<br/>
<br/>

# 4. UI/UX

## 4.1 Change Theme (Light or Dark Mode)

![validator-theme](https://user-images.githubusercontent.com/90844424/215414409-7da7056f-c6d8-4db0-a5d8-7901e072019b.gif)

CSS `box-shadow` μμ± κ°μ νμ©νμ¬ λ κ°μ§ νλ§μ λ΄λͺ¨νΌμ¦(Neumorphism) λμμΈμ μ μ©νμ΅λλ€. μ¬μ©μλ μ€μμΉλ₯Ό ν΄λ¦­ν΄ <u>Light λλ Dark λͺ¨λ</u>λ‘ νλ§λ₯Ό λ°κΏ μ μμ΅λλ€.

```css
:root {
  --box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.15), 10px 10px 70px rgba(0, 0, 0, 0.25),
    inset 5px 5px 10px rgba(255, 255, 255, 0.5), inset 5px 5px 20px rgba(255, 255, 255, 0.95),
    inset -5px -5px 15px rgba(0, 0, 0, 0.35);
}

[data-theme='dark'] {
  --box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.25), 10px 10px 70px rgba(0, 0, 0, 0.25),
    inset 5px 5px 10px rgba(0, 0, 0, 0.5), inset 5px 5px 20px rgba(255, 255, 255, 0.2),
    inset -5px -5px 15px rgba(0, 0, 0, 0.75);
}
```

<br/>

![validator-datatheme](https://user-images.githubusercontent.com/90844424/215415305-91e5cda5-b2f5-412d-9543-fb3712a5f5be.jpg)

μ΅μμ html μμμ ν΄λΉνλ document.documentElementμ `data-theme` μμ±μ 'dark' λλ 'light'λ‘ λΆμ¬νμ¬ μμ±λ CSS style(`[data-theme='dark']`)λ‘ νλ§λ₯Ό λ³κ²½ν©λλ€. λν νμ¬ νλ§λ₯Ό λ‘μ»¬μ€ν λ¦¬μ§μ μ μ₯νμ¬ νμ΄μ§ μλ‘κ³ μΉ¨ μμλ λͺ¨λκ° λ°λμ§ μλλ‘ ν©λλ€.

```js
const toggleSwitch = document.querySelector('input[type="checkbox"]');

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
```

<br/>

## 4.2 Responsive Web Design

![validator-responsive](https://user-images.githubusercontent.com/90844424/215417699-b926f0c7-315f-450f-9431-26e945108e7c.jpg)

νλ©΄ ν¬κΈ°μ λ°λΌ μ λμ μΌλ‘ μ¬μ΄μ¦κ° μ‘°μ λλ λ°μν μΉμΌλ‘ μ½λλ₯Ό μμ±νμμ΅λλ€.

```css
.container {
  width: 500px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  border-radius: 2rem;
  background-color: var(--bg-color);
  box-shadow: var(--box-shadow);
  color: var(--font-color);
}

@media screen and (max-width: 600px) {
  .container {
    width: 100%;
    padding: 2rem;
    border-radius: 0;
    box-shadow: none;
  }
}
```

<br/>
<br/>

<sub>λ³Έ μ νλ¦¬μΌμ΄μμ μΈν°λ· κ°μλ₯Ό μ°Έκ³ νμ¬ λ§λ€μμ΅λλ€. νμνλ€ μκ°λλ λΆλΆμμ μλ³Έ μ½λλ₯Ό μμ νκ³ , κΈ°λ₯μ λ³΄μνμ΅λλ€. λν μλ‘­κ² λμμΈνμ΅λλ€.</sub>
