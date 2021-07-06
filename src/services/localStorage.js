/**
 *
 * @param {string} key "key to save on localStorage"
 * @param {object} data "data to be stored"
 */
export function saveLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

/**
 *
 * @param {string} key "key on localStorage"
 * @returns {any} "data collected from local storage"
 */
export function getLocalStorage(key, defaultValue = null) {
  const localStorageData = localStorage.getItem(key);
  if (localStorageData !== null) {
    let data;
    try {
      data = JSON.parse(localStorageData);
    } catch (erro) {
      data = defaultValue;
    }
    return data;
  }
  return defaultValue;
}

const initialStorageState = {
  mealsToken: null,
  cocktailsToken: null,
  user: { email: null },
  doneRecipes: null,
  favoriteRecipes: null,
  inProgressRecipes: null,
};

export function clearLocalStorage() {
  saveLocalStorage('mealsToken', initialStorageState.mealsToken);
  saveLocalStorage('cocktailsToken', initialStorageState.cocktailsToken);
  saveLocalStorage('doneRecipes', initialStorageState.doneRecipes);

  saveLocalStorage('favoriteRecipes', initialStorageState.favoriteRecipes);

  saveLocalStorage('user', initialStorageState.user);
  saveLocalStorage('inProgressRecipes', initialStorageState.inProgressRecipes);
}
