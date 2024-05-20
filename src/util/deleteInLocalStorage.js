export function deleteTodoList(category) {
  localStorage.removeItem(category);
}
export function makeAnArraySaveInLocalStorage() {
  const categories = JSON.parse(localStorage.getItem("categories")) || [];

  categories.forEach((element) => {
    const key = `category_${element}`;

    const newArray = [];

    localStorage.setItem(key, JSON.stringify(newArray));
  });
}

export function getArrayFromLocalStorage(category) {
  const key = `category_${category}`;
  try {
    const array = JSON.parse(localStorage.getItem(key));
    if (array === null) {
      console.warn(`No data found for key: ${key}`);
    }
    return array;
  } catch (e) {
    console.error(`Error retrieving data for key: ${key}`, e);
    return null;
  }
}
