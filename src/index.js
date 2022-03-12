const lowerLetters = "abcdefghijklmopqrstuvwxyz";
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()=+";

const pwEl = document.getElementById("generated-password");
const lengthEl = document.getElementById("password-length");
const lowerEl = document.getElementById("lower-checkbox");
const upperEl = document.getElementById("upper-checkbox");
const symbolEl = document.getElementById("symbol-checkbox");
const numberEl = document.getElementById("number-checkbox");
const buttonEl = document.getElementById("generate-btn");

function getLowerLetter() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUpperLetter() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function generatePassword() {
  let passwordLenght = lengthEl.value;
  let generatedPassword = "";
  let tempPassword = "";

  if (lowerEl.checked) {
    generatedPassword += getLowerLetter();
    tempPassword += lowerLetters;
  }
  if (upperEl.checked) {
    generatedPassword += getUpperLetter();
    tempPassword += upperLetters;
  }
  if (symbolEl.checked) {
    generatedPassword += getSymbol();
    tempPassword += symbols;
  }
  if (numberEl.checked) {
    generatedPassword += getNumber();
    tempPassword += numbers;
  }

  while (generatedPassword.length < passwordLenght) {
    generatedPassword +=
      tempPassword[Math.floor(Math.random() * tempPassword.length)];
  }

  pwEl.value = generatedPassword;
}

buttonEl.addEventListener("click", () => {
  if (
    lowerEl.checked ||
    upperEl.checked ||
    symbolEl.checked ||
    numberEl.checked
  )
    generatePassword();
  else pwEl.value = "zaznacz jakąś opcję";
});
