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

function managaScore(scoreElement) {
  const scoreEl = scoreElement;
  let currentScore = parseInt(scoreElement.innerText, 10);
  currentScore += 3;
  scoreEl.innerText = currentScore.toString();
}

function verifyAnswear(parentElement, answearElement, mainColor) {
  parentElement.addEventListener('click', (e) => {
    const mColor = mainColor.innerText.toLowerCase();
    const ansEl = answearElement;
    const { target } = e;
    const colorClicked = target.style.backgroundColor;

    if (target.classList.contains('ball')) {
      if (colorClicked === mColor) {
        const scoreEl = document.getElementById('pontos');
        ansEl.innerText = 'Acertou!';
        managaScore(scoreEl);
        target.classList.add('correct');
      } else {
        ansEl.innerText = 'Errou! Tente novamente!';
        target.classList.add('wrong');
      }
    }
  });
}

function resetGame() {
  const mainColorElement = document.getElementById('rgb-color');
  const colorCirclesElement = document.getElementById('color-circles');
  const colorsBallsElements = document.getElementsByClassName('ball');
  const answearElement = document.getElementById('answer');
  const colorEl = colorCirclesElement;
  const ansEl = answearElement;

  colorEl.innerHTML = '';
  ansEl.innerText = 'Escolha uma cor';
  addCircles(colorCirclesElement, 6);
  setRandomNumber(mainColorElement, colorsBallsElements);
}

function resetGameButton(resetButtonElement) {
  resetButtonElement.addEventListener('click', () => {
    resetGame();
  });
}

const mainColorElement = document.getElementById('rgb-color');
const colorCirclesElement = document.getElementById('color-circles');
const colorsBallsElements = document.getElementsByClassName('ball');
const answearElement = document.getElementById('answer');
const resetButtonElement = document.getElementById('reset-game');

addCircles(colorCirclesElement, 6);
setRandomNumber(mainColorElement, colorsBallsElements);
verifyAnswear(colorCirclesElement, answearElement, mainColorElement);
resetGameButton(resetButtonElement);
