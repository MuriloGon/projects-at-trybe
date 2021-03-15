function addRandomClasses(classesObject, spanElement) {
  const groupsKeys = Object.keys(classesObject);
  const groupsLen = groupsKeys.length;

  for (let i = 0; i < groupsLen; i += 1) {
    const groupClasses = classesObject[groupsKeys[i]];
    const groupClassesLen = groupClasses.length; // (+num) increase the none style probability
    const randomClassIndex = Math.round(Math.random() * groupClassesLen);

    if (groupClasses[randomClassIndex] !== undefined) {
      spanElement.classList.add(groupClasses[randomClassIndex]);
    }
  }
}

function addLetter(inpuElement, pLetterElement, groupsClasses) {
  const letterWords = inpuElement.value.split(' ');
  const pEl = pLetterElement;
  pEl.innerText = '';

  for (let i = 0; i < letterWords.length; i += 1) {
    const spanEl = document.createElement('span');
    const word = letterWords[i];

    if (word !== '') {
      spanEl.innerText = letterWords[i];
      addRandomClasses(groupsClasses, spanEl);
      pEl.appendChild(spanEl);
    }
  }
}

function nullLetter(pLetterElement) {
  const pEl = pLetterElement;
  pEl.innerText = 'Por favor, digite o conteúdo da carta.';
}

function isNull(inputElement) {
  const inputEl = inputElement;
  let letters = 0;
  for (let i = 0; i < inputEl.value.length; i += 1) {
    if (inputEl.value[i] !== ' ') letters += 1;
  }
  if (letters > 0) return false;
  return true;
}

function countWords(pWordCountElement, pLetteElement) {
  const pCountEl = pWordCountElement;
  const words = pLetteElement.children.length;
  pCountEl.innerText = `${words}`;
}

function inputUpdateWord(inputElement, pWordCountElement) {
  inputElement.addEventListener('input', () => {
    const pCountEl = pWordCountElement;
    const words = inputElement.value.split(' ').filter((x) => x !== '');
    pCountEl.innerText = words.length;
  });
}

function generateLetter(btnGenerateLetter, inputElement, groupClasses, pElObjs) {
  btnGenerateLetter.addEventListener('click', () => {
    const inputEl = inputElement;
    const pLetterEl = pElObjs.pLetterElement;
    const pCountEl = pElObjs.pCountElement;
    if (inputEl.value !== '' && !isNull(inputEl)) {
      addLetter(inputEl, pLetterEl, groupClasses);
    } else nullLetter(pLetterEl);
    countWords(pCountEl, pLetterEl);
  });
}

const letterGroups = {
  style: ['newspaper', 'magazine1', 'magazine2'],
  size: ['medium', 'big', 'reallybig'],
  rotate: ['rotateleft', 'rotateright'],
  skew: ['skewleft', 'skewright'],
};

const pElementsObj = {
  pLetterElement: document.getElementById('carta-gerada'),
  pCountElement: document.getElementById('carta-contador'),
};

const btnGenLetter = document.getElementById('criar-carta');
const inputElement = document.getElementById('carta-texto');
generateLetter(btnGenLetter, inputElement, letterGroups, pElementsObj);
inputUpdateWord(inputElement, pElementsObj.pCountElement);
