const saveLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const savePlayer = ({
  login: { userName: name, avatar: gravatarEmail },
  game: { score, assertions },
}) => {
  saveLocalStorage('state', {
    player: {
      name,
      gravatarEmail,
      score,
      assertions,
    } });
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

export const addPlayerScore = (playerScore) => {
  let ranking = JSON.parse(localStorage.getItem('ranking'));
  if (ranking === null) ranking = [];
  ranking.push(playerScore);
  localStorage.setItem('ranking', JSON.stringify(ranking));
};
