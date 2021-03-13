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
    imgEl.onload = () => { URL.revokeObjectURL(this.src); };
  });
}

function changeBorderStatus(buttonElement, targetElement, statusString) {
  buttonElement.addEventListener('click', () => {
    const containString = targetElement.classList.contains(statusString);
    const targEl = targetElement;
    if (containString) {
      targEl.classList.remove('fire', 'water', 'earth');
    } else targEl.classList.add(statusString);
  });
}

function defaultImagesElement(parentElement) {
  const images = ['meme1.png', 'meme2.png', 'meme3.png', 'meme4.png'];
  for (let imgIndex = 0; imgIndex < images.length; imgIndex += 1) {
    const imgElement = document.createElement('img');
    const regex = images[imgIndex].match(/(\S{1,})(\d{1,}).png/);
    console.log(regex);
    imgElement.id = `${regex[1]}-${regex[2]}`;
    imgElement.src = `imgs/${regex[1]}${regex[2]}.png`;
    parentElement.appendChild(imgElement);
  }
}

function defaultImagesEvent(parentElement, memeImgElement) {
  parentElement.addEventListener('click', (e) => {
    const imgEl = memeImgElement;
    const { src } = e.target;
    const { localName } = e.target;
    if (localName === 'img') {
      imgEl.src = src;
    }
  });
}

function placeHolderEvent(memeImgElement) {
  document.body.addEventListener('click', (ev) => {
    const imgEl = memeImgElement;
    if (ev.target.localName === 'body') imgEl.src = 'placeholder-image.jpg';
  });
}

const inputElement = document.getElementById('text-input');
const textImageElement = document.getElementById('meme-text');
const imageSelectionElement = document.getElementById('meme-insert');
const imageElement = document.getElementById('meme-image');

const imageContainer = document.getElementById('meme-image-container');
const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');
const defaultElement = document.getElementById('default-images');

changeMemeText(inputElement, textImageElement);
imageSelection(imageSelectionElement, imageElement);
changeBorderStatus(fireButton, imageContainer, 'fire');
changeBorderStatus(waterButton, imageContainer, 'water');
changeBorderStatus(earthButton, imageContainer, 'earth');
defaultImagesElement(defaultElement);
defaultImagesEvent(defaultElement, imageElement);
placeHolderEvent(imageElement);
