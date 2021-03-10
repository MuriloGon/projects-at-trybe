/* Utils */
function isWrongInput(logicTest) {
  if (logicTest) return true;

  return false;
}

/* List Behaviour */
// Add Item Behaviour
function addListItem(parentElement, inputElement) {
  const liElement = document.createElement('li');

  if (isWrongInput(inputElement.value === '')) {
    alert('Insira um valor válido');
    return null;
  }
  liElement.innerHTML = inputElement.value;

  parentElement.appendChild(liElement);
  return liElement;
}

function buttonListenerAddItem(buttonTarget, ulElement, inputElement) {
  const inputEl = inputElement;
  buttonTarget.addEventListener('click', () => {
    addListItem(ulElement, inputEl);
    inputEl.value = '';
  });
}

// Click Item Behavior
function colorListItemBehaviourEventListener(ulElement) {
  ulElement.addEventListener('click', (e) => {
    const { target } = e;
    const { localName } = target;
    if (localName === 'li') target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}

/* Requirement 05 */
const buttonElement = document.getElementById('criar-tarefa');
const ulElement = document.getElementById('lista-tarefas');
const inputElement = document.getElementById('texto-tarefa');
buttonListenerAddItem(buttonElement, ulElement, inputElement);
colorListItemBehaviourEventListener(ulElement);

// teste items
addListItem(ulElement, 'Linha1');
addListItem(ulElement, 'Linha1');
addListItem(ulElement, 'Linha1');
