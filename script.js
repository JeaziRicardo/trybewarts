// Constantes globais
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const buttonLogin = document.querySelector('#button-login');
const buttonForm = document.querySelector('#submit-btn');
let checkbox = document.querySelector('#agreement');

function loginEnter() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
buttonLogin.addEventListener('click', loginEnter);

buttonForm.disabled = true;
function submitButton() {
  const verifyCheckbox = checkbox.checked; 
  if(verifyCheckbox === true){
    buttonForm.disabled = false;
  }
}
checkbox.addEventListener('change', submitButton);


  

