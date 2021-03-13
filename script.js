function addCircles(parentElement, quantity) {
  const n = quantity;
  for (let i = 0; i < n; i += 1) {
    const div = document.createElement('div');
    div.classList.add('ball');
    div.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}deg, 100%, 50%)`;
    parentElement.appendChild(div);
  }
}

function setRandomNumber(targetElement, ballsElements) {
  const balls = ballsElements;
  const tEl = targetElement;
  tEl.innerText = balls[Math.floor(Math.random() * balls.length)].style.backgroundColor;
}

function verifyAnswear(parentElement, answearElement, mainColor) {
  parentElement.addEventListener('click', (e) => {
    const mColor = mainColor.innerText;
    const ansEl = answearElement;
    const { target } = e;
    const colorClicked = target.style.backgroundColor;

    if (target.classList.contains('ball')) {
      if (colorClicked === mColor) ansEl.innerText = 'Acertou!';
      else ansEl.innerText = 'Errou! Tente novamente!';
    }
  });
}

const mainColorElement = document.getElementById('rgb-color');
const colorCirclesElement = document.getElementById('color-circles');
const colorsBallsElements = document.getElementsByClassName('ball');
const answearElement = document.getElementById('answer');

addCircles(colorCirclesElement, 6);
setRandomNumber(mainColorElement, colorsBallsElements);
verifyAnswear(colorCirclesElement, answearElement, mainColorElement);
