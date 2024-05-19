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
