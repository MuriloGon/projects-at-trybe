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
  console.log('validate', inputs);
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

function validateRegister(buttonValidate, selector, radioElements) {
  const buttonRegister = buttonValidate;

  buttonRegister.addEventListener('click', (e) => {
    const inputElements = document.querySelectorAll(selector);
    const validateInputs = validateInputsRegister(inputElements);
    const validateRadios = validateRadioButton(radioElements);
    if ((validateInputs && validateRadios) === false) {
      document.querySelector('.error').classList.add('open');
      e.preventDefault();
    }
    console.log(validateInputs, validateRadios);
  });
}

function createCustomGender(parentForm, submitButton) {
  const form = parentForm;
  const input = document.createElement('input');
  const gCustomName = 'gender-custom';
  input.type = 'text';
  input.id = gCustomName;
  input.name = gCustomName;
  input.placeholder = 'Gênero (opcional)';

  form.insertBefore(input, submitButton);
}

function customGender(GenderRadiosElement, submitButton, parentForm) {
  const radios = GenderRadiosElement;
  radios.addEventListener('click', (e) => {
    const { target } = e;
    const { localName, id } = target;
    if (localName === 'input' && id === 'Personalizado') {
      createCustomGender(parentForm, submitButton);
    } else {
      const child = document.getElementById('gender-custom');
      if (child) parentForm.removeChild(child);
    }
  });
}

const buttonValidate = document.querySelector('#facebook-register');

const radiosRegister = document.querySelectorAll('.gender input');
const custoGender = document.querySelector('.gender__radios');
const registerForm = document.querySelector('.right-content form');
const inputsSelector = '.right-content input[type="text"]';
validateRegister(buttonValidate, inputsSelector, radiosRegister);
customGender(custoGender, buttonValidate, registerForm);
