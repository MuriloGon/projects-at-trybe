function setRandomNumber(targetElement, colorRgb) {
  const tEl = targetElement;
  tEl.innerText = colorRgb;
}
function addCircles(parentElement, quantity) {
  const n = quantity;
  for (let i = 0; i < n; i += 1) {
    const div = document.createElement('div');
    div.classList.add('ball');
    div.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}deg, 100%, 50%)`;
    parentElement.appendChild(div);
  }
}

const mainColorElement = document.getElementById('rgb-color');
const colorCirclesElement = document.getElementById('color-circles');

setRandomNumber(mainColorElement, 'rgb(120, 120, 120)');
addCircles(colorCirclesElement, 6);
