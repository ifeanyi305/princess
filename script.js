const hambuger = document.querySelector(' .hambuger');
hambuger.addEventListener('click', () => {
  hambuger.classList.toggle('active');
});
const anchor = document.querySelectorAll('.nav-item');
for (let i = 0; i < anchor.length; i += 1) {
  anchor[i].addEventListener('click', () => {
    hambuger.classList.remove('active');
  });
}

/* javascript code for form validation */

const mail = document.getElementById('email');
const username = document.getElementById('user-name');
const textArea = document.getElementById('message');
const form = document.querySelector('form');
const errorMsg = document.querySelector('.div-span');

form.addEventListener('click', (event) => {
  if (mail.value !== mail.value.toLowerCase()) {
    errorMsg.textContent = 'Email address needs to be in lowercase';
    event.preventDefault();
  } else {
    errorMsg.textContent = '';
  }
});
const userInfo = {
  username: '',
  email: '',
  textArea: '',
};

/* javascript code for preserving data in the browser */
if (localStorage.getItem('userInfo')) {
  const json = JSON.parse(localStorage.getItem('userInfo'));
  userInfo.email = json.email;
  userInfo.username = json.username;
  userInfo.textArea = json.textArea;
  mail.value = userInfo.email;
  username.value = userInfo.username;
  textArea.value = userInfo.textArea;
}

username.addEventListener('input', () => {
  userInfo.username = username.value.trim();
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
});
mail.addEventListener('input', () => {
  userInfo.email = mail.value.trim();
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
});
textArea.addEventListener('input', () => {
  userInfo.textArea = textArea.value.trim();
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
});