export function getToLocalStorage(key) {
  JSON.parse(localStorage.getItem(key));
}
