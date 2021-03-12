function changeMemeText(inputElementTarget, textImgElement) {
  document.getElementById('text-input');
  inputElementTarget.addEventListener('input', () => {
    const textElement = textImgElement;
    textElement.innerText = inputElementTarget.value;
  });
}

function imageSelection(inputElement, imageElement) {
  inputElement.addEventListener('change', () => {
    const path = inputElement.files[0];
    const imgEl = imageElement;
    imgEl.src = URL.createObjectURL(path);
    imgEl.onload = function () { URL.revokeObjectURL(this.src); };
  });
}

const inputElement = document.getElementById('text-input');
const textImageElement = document.getElementById('meme-text');
const imageSelectionElement = document.getElementById('meme-insert');
const imageElement = document.getElementById('meme-image');
changeMemeText(inputElement, textImageElement);
imageSelection(imageSelectionElement, imageElement);
