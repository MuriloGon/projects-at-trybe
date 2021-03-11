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

function buttonListenerAddItem(buttonTarget, olElement, inputElement) {
  const inputEl = inputElement;
  buttonTarget.addEventListener('click', () => {
    addListItem(olElement, inputEl);
    inputEl.value = '';
  });
}

// Click Item Behavior
function applyStyles(selector, styleObject) {
  const queryElements = document.querySelectorAll(selector);
  const queryKeys = Object.keys(queryElements);
  const styleKeys = Object.keys(styleObject);

  for (let queryIndex = 0; queryIndex < queryKeys.length; queryIndex += 1) {
    const queryElement = queryElements[queryIndex];
    for (let styIndex = 0; styIndex < styleKeys.length; styIndex += 1) {
      const styleKey = styleKeys[styIndex];
      queryElement.style[styleKey] = styleObject[styleKey];
    }
  }
}
function manageSelected(elementTarget) {
  const selectedElement = document.querySelector('.selected');

  if (selectedElement === null) {
    elementTarget.classList.add('selected');
  } else selectedElement.classList.remove('selected');

  elementTarget.classList.add('selected');
}
function colorListItemBehaviourEventListener(olElement) {
  olElement.addEventListener('click', (e) => {
    const { target } = e;
    const { localName } = target;
    const bgColor = e.target.style.backgroundColor;
    const defaultColor = 'rgb(128, 128, 128)';
    const isCompleted = e.target.classList.contains('completed');
    if (localName === 'li' && bgColor === defaultColor && !isCompleted) {
      e.target.classList.add('completed');
    } else {
      e.target.classList.remove('completed');
    }
    applyStyles('#lista-tarefas li', { backgroundColor: '' });
    if (localName === 'li') {
      target.style.backgroundColor = defaultColor;
      manageSelected(e.target);
    }
  });
}

/* Remove All List Items */
function clearList(buttonElement, olElement) {
  buttonElement.addEventListener('click', () => {
    const ulEl = olElement;
    ulEl.innerHTML = '';
  });
}

/* Remove Completed Tasks */
function removeDoneEvnLst(buttonElement, olElement) {
  buttonElement.addEventListener('click', () => {
    const doneEl = document.querySelectorAll('.completed');
    const doneElemKeys = Object.keys(doneEl);
    console.log(doneElemKeys);
    for (let i = 0; i < doneElemKeys.length; i += 1) {
      olElement.removeChild(doneEl[i]);
    }
  });
}

/* Save List */
function saveElements(buttonElement, olElement) {
  buttonElement.addEventListener('click', () => {
    const currentList = olElement.innerHTML;
    localStorage.listSaved = currentList;
  });
}
function getSavedList(olElement) {
  const listSaved = localStorage.getItem('listSaved');

  if (listSaved !== null) {
    const olEl = olElement;
    olEl.innerHTML = localStorage.listSaved;
  }
}

/* Move List Items */
function moveItemUp(buttonUpElement, olElement) {
  buttonUpElement.addEventListener('click', () => {
    const listElement = olElement;
    const itemSelected = document.querySelector('.selected');
    if (itemSelected === null) return console.log('Nada selecionado /\\');

    const previousLi = itemSelected.previousElementSibling;
    if (previousLi !== null) {
      listElement.insertBefore(itemSelected, previousLi);
    }
  });
}
function moveItemDown(buttonUpElement, olElement) {
  buttonUpElement.addEventListener('click', () => {
    const listElement = olElement;
    const itemSelected = document.querySelector('.selected');
    if (itemSelected === null) return console.log('Nada selecionado \\/');
    const nextLi = itemSelected.nextElementSibling;
    if (nextLi !== null && nextLi !== undefined) {
      listElement.insertBefore(nextLi, itemSelected);
    }
  });
}

/* Remove Selected Button */
function removeSelected(buttonRemoveElement, olElement) {
  buttonRemoveElement.addEventListener('click', () => {
    const selectedItem = document.querySelector('.selected');
    const olList = olElement;
    olList.removeChild(selectedItem);
  });
}

/* Requirement 05 */
const buttonAddElement = document.getElementById('criar-tarefa');
const buttonClearElement = document.getElementById('apaga-tudo');
const buttonRemoveDoneElement = document.getElementById('remover-finalizados');
const buttonSaveList = document.getElementById('salvar-tarefas');
const buttonMoveUp = document.getElementById('mover-cima');
const buttonMoveDown = document.getElementById('mover-baixo');
const buttonRemoveSelected = document.getElementById('remover-selecionado');

const olElement = document.getElementById('lista-tarefas');
const inputElement = document.getElementById('texto-tarefa');

getSavedList(olElement);

buttonListenerAddItem(buttonAddElement, olElement, inputElement);
colorListItemBehaviourEventListener(olElement);
clearList(buttonClearElement, olElement);
removeDoneEvnLst(buttonRemoveDoneElement, olElement);
saveElements(buttonSaveList, olElement);
moveItemUp(buttonMoveUp, olElement);
moveItemDown(buttonMoveDown, olElement);
removeSelected(buttonRemoveSelected, olElement);
// teste items
// addListItem(olElement, 'Linha1');
// addListItem(olElement, 'Linha1');
// addListItem(olElement, 'Linha1');
