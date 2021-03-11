function changeMemeText(inputElementTarget, textImgElement) {
  inputElementTarget.addEventListener('input', () => {
    const textElement = textImgElement;
    textElement.innerText = inputElementTarget.value;
  });
}

const inputElement = document.getElementById('text-input');
const textImageElement = document.getElementById('meme-text');
changeMemeText(inputElement, textImageElement);
