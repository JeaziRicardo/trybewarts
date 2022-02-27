// Constantes globais
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const buttonLogin = document.querySelector('#button-login');
const buttonForm = document.querySelector('#submit-btn');
const checkbox = document.querySelector('#agreement');
const counter = document.querySelector('#counter');
const textArea = document.querySelector('#textarea');
const form = document.querySelector('#evaluation-form');
const house = document.querySelector('#house');
const family = document.querySelectorAll('input[name="family"]');
const rate = document.querySelectorAll('input[name="rate"]');
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const subjects = document.querySelectorAll('.subject');
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

// requisito 21
function familyValue() {
  let stringFamily = '';
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked) {
      stringFamily = family[index].value;
    }
  }
  return stringFamily;
}

function subjectsValue() {
  let stringSubjects = '';
  for (let index = 0; index < subjects.length; index += 1) {
    if (subjects[index].checked) {
      stringSubjects += `${subjects[index].value} `;
    }
  }
  return stringSubjects;
}

function rateValue() {
  let stringRate = '';
  for (let index = 0; index < rate.length; index += 1) {
    if (rate[index].checked) {
      stringRate = rate[index].value;
    }
  }
  return stringRate;
}

function values() {
  const array = [];
  array.push(`${'Nome'}: ${inputName.value} ${inputLastName.value}`);
  array.push(`${'Email'}: ${inputEmail.value}`);
  array.push(`${'Casa'}: ${house.value}`);
  array.push(`${'Família'}: ${familyValue()}`);
  array.push(`${'Matérias'}: ${subjectsValue()}`); // No navegador o retorno está correto, mas não passa no teste.
  array.push(`${'Avaliação'}: ${rateValue()}`);
  array.push(`${'Observações'}: ${textArea.value}`);
  return array;
}

function createParagraph() {
  form.innerHTML = '';
  for (let index = 0; index < values().length; index += 1) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = values()[index];
    form.appendChild(paragraph);
  }
}
buttonForm.addEventListener('click', createParagraph);
