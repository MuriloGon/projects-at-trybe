function alertUserEmail(buttonElement, text) {
  const button = buttonElement;
  button.addEventListener('click', () => {
    if (text.value !== '') {
      alert(text.value);
    }
  });
}
const button = document.querySelector('#button-login');
const valueEmail = document.querySelector('#user-email-phone');
alertUserEmail(button, valueEmail);

function validateInputsRegister(inputElements) {
  const inputs = inputElements;
  let validate = true;
  const validateFalse = false;
  for (let index = 0; index < inputs.length; index += 1) {
    if (inputs[index].value === '') {
      validate = validate && validateFalse;
    }
  }
  return validate;
}
function validateRadioButton(radioButtonElement) {
  const radioButton = radioButtonElement;
  let validate = false;
  for (let index = 0; index < radioButton.length; index += 1) {
    if (radioButton[index].checked) {
      validate = validate || true;
    }
  }
  return validate;
}

function validateRegister(buttonValidate, inputElements, radioElements) {
  const buttonRegister = buttonValidate;
  buttonRegister.addEventListener('click', (e) => {
    const validateInputs = validateInputsRegister(inputElements);
    const validateRadios = validateRadioButton(radioElements);
    if ((validateInputs && validateRadios) === false) {
      document.querySelector('.error').classList.add('open');
      e.preventDefault();
    }
    console.log(validateInputs, validateRadios);
  });
}

const buttonValidate = document.querySelector('#facebook-register');
const inputsRegister = document.querySelectorAll(
  '.right-content input[type="text"]',
);
const radiosRegister = document.querySelectorAll('.gender input');
validateRegister(buttonValidate, inputsRegister, radiosRegister);
