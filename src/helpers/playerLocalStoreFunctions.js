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
