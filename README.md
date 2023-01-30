# 🪪 유효성 검사 앱, 'Form Validator' 토이프로젝트

![validator-light-thumb](https://user-images.githubusercontent.com/90844424/215409271-be40eed5-8654-4283-b806-aaa3ad5619a4.jpg)
![validator-dark-thumb](https://user-images.githubusercontent.com/90844424/215397726-3afb1676-d128-4bf8-a262-614a179ced10.jpg)

<br />

[![Netlify Status](https://api.netlify.com/api/v1/badges/f2fe495e-9fb3-4b7e-b424-b5d841c8c2db/deploy-status)](https://app.netlify.com/sites/conatus-js-form-validator/deploys) | [Live Demo](https://conatus-js-form-validator.netlify.app/)

<br/>
<br/>

# 1. Project

## 1.1. Project Information

> 본 프로젝트는 **유효성 검사 애플리케이션** 입니다. 사용자가 입력한 값에 대해 유효성 검사를 진행합니다. 유효하지 않은 값은 빨간색으로, 유효한 값은 초록색으로 label 색상을 표기함으로써 직관적으로 정보를 전달합니다. 사용자 정보를 등록하고 화면에 표시하며, Sign Out 버튼을 눌러 정보를 초기화할 수 있습니다. 사용자의 편의에 따라 두 가지 테마(<u>Light or Dark Mode</u>)가 지원되며, <u>반응형 웹</u>으로 작동합니다.

<br/>

## 1.2. Project Duration & Participants

- 2023-1-29 ~ 2023-1-29
- 개인 프로젝트 (1인)

<br/>
<br/>

# 2. Skills

![HTML](https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS](https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JAVASCRIPT](https://img.shields.io/badge/JavaScript-f6e158?style=for-the-badge&logo=JavaScript&logoColor=ffffff) ![Git](https://img.shields.io/badge/Git-f05032?style=for-the-badge&logo=git&logoColor=ffffff)

<br/>
<br/>

# 3. Main Features

## 3.1. Validation Check

![validator-check](https://user-images.githubusercontent.com/90844424/215418922-647c65b9-0c78-4876-af5d-2657ec92aff5.gif)

input 태그의 `pattern` 속성에 정규식(regex)을 명시하여 폼 제출 시 값을 검증할 수 있도록 합니다. 이때 전역 속성인 `title`에 부연 설명을 추가하여 스크린리더 이용자를 포함, 사용자가 정확한 값을 입력하도록 도와줍니다. tel, email, password 타입에 적용하였으며 예시는 아래와 같습니다.

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

`checkValidity()` 메서드를 사용하여 사용자 입력 정보가 유효한지 확인합니다. 두 비밀번호가 일치하지 않을 경우 label의 color가 빨갛게 표시됩니다.

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

폼 제출 시 입력값이 유효하고 두 비밀번호가 일치하다면 `storeFormData()` 함수를 호출합니다. input 요소의 `name` 속성으로 값을 참조하여 사용자 정보를 로컬스토리지에 저장합니다.

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

폼 제출에 성공하면 페이지가 전환되고, `form.reset()` 메서드로 값을 초기화합니다. 비밀번호 input 요소의 label 색상이 초기화되지 않는 문제가 있어 location.reload() 메서드로 새로고침을 해주었으나, 리소스를 다시 불러오는 것은 불필요하다 생각하여 CSS style을 초기화하여 해결했습니다.

```js
function submitForm(event) {
  event.preventDefault();

  validateForm();

  if (isValid && passwordMatch) {
    storeFormData();
    form.reset();

    // 스타일 초기화
    password1El.nextElementSibling.style.color = '';
    password2El.nextElementSibling.style.color = '';
  }
}

form.addEventListener('submit', submitForm);
```

```js
function signOut() {
  localStorage.removeItem('user');
  // location.reload(); 삭제

  getUserData();
}
```

<br/>

## 3.4. Get User Data from Local Storage

![validator-parse](https://user-images.githubusercontent.com/90844424/215409298-9c4c80eb-ac17-4670-8c36-f6b6660fbd64.jpg)

로컬스토리지에 JSON.stringify()로 저장된 데이터가 있다면, 그것을 다시 JSON.parse()를 통해 파싱하여 보여줍니다. 정보가 없다면 빈 객체를 반환합니다.

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

userContainer의 innerHTML을 변경하여 li 요소에 사용자 정보값을 채웁니다. 그 다음 appendChild() 메서드를 통해 전체 container에 userContainer를 자식 요소로 추가합니다.

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

CSS `box-shadow` 속성 값을 활용하여 두 가지 테마의 뉴모피즘(Neumorphism) 디자인을 적용했습니다. 사용자는 스위치를 클릭해 <u>Light 또는 Dark 모드</u>로 테마를 바꿀 수 있습니다.

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

최상위 html 요소에 해당하는 document.documentElement에 `data-theme` 속성을 'dark' 또는 'light'로 부여하여 작성된 CSS style(`[data-theme='dark']`)로 테마를 변경합니다. 또한 현재 테마를 로컬스토리지에 저장하여 페이지 새로고침 시에도 모드가 바뀌지 않도록 합니다.

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

화면 크기에 따라 유동적으로 사이즈가 조절되는 반응형 웹으로 코드를 작성하였습니다.

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

<sub>본 애플리케이션은 인터넷 강의를 참고하여 만들었습니다. 필요하다 생각되는 부분에서 원본 코드를 수정하고, 기능을 보완했습니다. 또한 새롭게 디자인했습니다.</sub>
