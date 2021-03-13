function setRandomNumber(targetElement, colorRgb) {
  const tEl = targetElement;
  tEl.innerText = colorRgb;
}

const mainColorElement = document.getElementById('rgb-color');

setRandomNumber(mainColorElement, 'rgb(120, 120, 120)');
