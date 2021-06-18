const parseDifficulty = (difficulty) => {
  const difficultyObj = {
    hard: 3,
    medium: 2,
    easy: 1,
  };
  return difficultyObj[difficulty];
};

const saveLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

const BASE_SCORE = 10;
export const savePlayer = ({ answer, name,
  timer, gravatarEmail, difficulty, callback }) => {
  if (answer) {
    const localStorage = getLocalStorage('player');
    let storeScore = 0;
    let storeAssertions = 0;

    if (localStorage !== null) {
      storeScore = localStorage.score;
      storeAssertions = localStorage.assertions;
    }
    const computedScore = BASE_SCORE + storeScore + (timer * parseDifficulty(difficulty));

    saveLocalStorage('state', {
      player: {
        name,
        gravatarEmail,
        score: computedScore,
        assertions: storeAssertions + 1,
      } });
    callback(computedScore);
  }
};

export const resetPlayerState = (name, gravatarEmail) => {
  saveLocalStorage('state', {
    player: {
      name,
      gravatarEmail,
      score: 0,
      assertions: 0,
    } });
};
