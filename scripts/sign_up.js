let users;
let isName = false;
let isEmail = false;
let isPass = false;
let isConfirm = false;

let name = document.getElementById('name');
let email = document.getElementById('email');
let pass = document.getElementById('pass');
let confirmPass = document.getElementById('confirm__pass');
let btnSubmit = document.querySelector('.btn-submit');
let btnReset = document.querySelector('.btn-reset')

let errName = document.querySelector('.span-name');
let errEmail = document.querySelector('.span-email');
let errPass = document.querySelector('.span-pass');
let errConfirm = document.querySelector('.span-confirm-pass');

function right(element) {
  element.textContent = 'Right';
  element.style.color = 'green';
}

function wrong(element, err) {
  element.textContent = err;
  element.style.color = 'red';
}

function checkValidateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function getData() {
  let users = JSON.parse(localStorage.getItem('users'));
  if(!users){
    return [];
  }
  return users;
}

function setData() {
  let user = {
    name: name.value,
    email: email.value,
    pass: pass.value
  }
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
}

function checkDuplicateEmail(email) {
  let user = users.find(value => value.email == email);
  console.log(user);
  if(user) return true;
  return false;
}

function checkName() {
  let nameValue = name.value.trim();
  if(nameValue) {
    right(errName);
    isName = true;
  } else {
    isName = false;
    wrong(errName, 'Please enter the correct format');
  }
}

function checkEmail() {
  let emailValue = email.value.trim();
  const isDuplicated = checkDuplicateEmail(emailValue);
  const isValid = checkValidateEmail(emailValue)
  isEmail = !isDuplicated && isValid;
  if(isDuplicated) {
    wrong(errEmail, 'Email already exists');
  }

  if(!isValid) {
    wrong(errEmail, 'Please enter the correct format');
  }

  if(isEmail) {
    right(errEmail);
  }
}

function checkPass() {
  let passValue = pass.value.trim();
  if(passValue.length >= 8 && passValue.length <= 16) {
    right(errPass);
    isPass = true;
  } else {
    isPass = false;
    wrong(errPass, 'Please enter the correct format');
  }
}

function checkConfirm() {
  let confirmValue = confirmPass.value.trim();
  if(confirmValue === pass.value.trim()) {
    right(errConfirm);
    isConfirm = true;
  } else {
    isConfirm = false;
    wrong(errConfirm, 'Please enter the correct format');
  }
}

function submitForm() {
  if(isEmail && isName && isPass && isConfirm) {
    setData();
    alert('You sign up successfully');
    resetForm();
  } else {
    if(!isName) wrong(errName, 'Please enter the correct format');
    if(!isEmail) wrong(errEmail, 'Please enter the correct format');
    if(!isPass) wrong(errPass, 'Please enter the correct format');
    if(!isConfirm) wrong(errConfirm, 'Please enter the correct format');
  }
}

function resetForm() {
  name.value = '';
  email.value = '';
  pass.value = '';
  confirmPass.value = '';
  errEmail.textContent = '';
  errName.textContent = '';
  errPass.textContent = '';
  errConfirm.textContent = '';
  isName = false;
  isEmail = false;
  isPass = false;
  isConfirm = false;
}

users = getData();
name.addEventListener('input', checkName);
email.addEventListener('input', checkEmail);
pass.addEventListener('input', checkPass);
confirmPass.addEventListener('input', checkConfirm);
btnSubmit.addEventListener('click', submitForm);
btnReset.addEventListener('click', resetForm);
