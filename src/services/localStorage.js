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
    return JSON.parse(localStorageData);
  }
  return defaultValue;
}
