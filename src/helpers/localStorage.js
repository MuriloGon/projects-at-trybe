export default function getLocalStorage(key) {
  const localStoData = JSON.parse(localStorage.getItem(key));

  if (localStoData === null) return [];
  return localStoData;
}
