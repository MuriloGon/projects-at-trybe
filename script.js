function addLetter(inpuElement, pElement) {
  const letterWords = inpuElement.value.split(' ');
  const pEl = pElement;
  pEl.innerText = '';

  for (let i = 0; i < letterWords.length; i += 1) {
    const spanEl = document.createElement('span');
    const word = letterWords[i];

    if (word !== '') {
      spanEl.innerText = letterWords[i];
      pEl.appendChild(spanEl);
    }
  }
}

function nullLetter(pElement) {
  const pEl = pElement;
  pEl.innerText = 'Por favor, digite o conteúdo da carta.';
}

function isNull(inputElement) {
  const inputEl = inputElement;
  let letters = 0;
  for (let i = 0; i < inputEl.value.length; i += 1) {
    if (inputEl.value[i] !== ' ') letters += 1;
    console.log(letters);
  }
  if (letters > 0) return false;
  return true;
}

function generateLetter(btnGenerateLetter, inputElement, pElement) {
  btnGenerateLetter.addEventListener('click', () => {
    const inputEl = inputElement;
    const pEl = pElement;
    if (inputEl.value !== '' && !isNull(inputEl)) addLetter(inputEl, pEl);
    else nullLetter(pEl);
  });
}

const btnGenLetter = document.getElementById('criar-carta');
const inputElement = document.getElementById('carta-texto');
const pElement = document.getElementById('carta-gerada');
generateLetter(btnGenLetter, inputElement, pElement);
