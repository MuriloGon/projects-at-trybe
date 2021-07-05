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
  user: { email: '' },
  doneRecipes: [],
  favoriteRecipes: [],
  inProgressRecipes: {
    cocktails: [],
    meals: [],
  },
};

export function beginInitialStorage() {
  const mealsToken = getLocalStorage('mealsToken');
  const cocktailsToken = getLocalStorage('cocktailsToken');
  const doneRecipes = getLocalStorage('doneRecipes');
  const favoriteRecipes = getLocalStorage('favoriteRecipes');

  if (mealsToken === null) {
    saveLocalStorage('mealsToken', initialStorageState.mealsToken);
  }

  if (cocktailsToken === null) {
    saveLocalStorage('cocktailsToken', initialStorageState.cocktailsToken);
  }
  if (doneRecipes === null || Array(doneRecipes).length === 0) {
    saveLocalStorage('doneRecipes', initialStorageState.doneRecipes);
  }

  if (favoriteRecipes === null || Array(favoriteRecipes).length === 0) {
    saveLocalStorage('favoriteRecipes', initialStorageState.favoriteRecipes);
  }

  saveLocalStorage('user', initialStorageState.user);
  saveLocalStorage('inProgressRecipes', initialStorageState.inProgressRecipes);
}
