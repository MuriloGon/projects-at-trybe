/* Utils */
function isWrongInput(logicTest) {
  if (logicTest) return true;

  return false;
}

/* List Behaviour */
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

function buttonListener(buttonTarget, ulElement, inputElement) {
  const inputEl = inputElement;
  buttonTarget.addEventListener('click', () => {
    addListItem(ulElement, inputEl);
    inputEl.value = '';
  });
}

/* Requirement 05 */
const buttonElement = document.getElementById('criar-tarefa');
const ulElement = document.getElementById('lista-tarefas');
const inputElement = document.getElementById('texto-tarefa');
buttonListener(buttonElement, ulElement, inputElement);
