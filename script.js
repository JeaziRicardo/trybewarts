// Constantes globais
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const buttonLogin = document.querySelector('#button-login');
const buttonForm = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');
const counter = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');
buttonForm.disabled = true;

function loginEnter() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', loginEnter);

function submitButton() {
  const verifyCheckbox = checkbox.checked;
  if (verifyCheckbox === true) {
    buttonForm.disabled = false;
  }
}
checkbox.addEventListener('change', submitButton);

function counterCharacter() {
  const qtdCharacter = textArea.value.length;
  counter.innerText = 500 - qtdCharacter;
}
textArea.addEventListener('keyup', counterCharacter);
