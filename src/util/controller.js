export function CategoriesController() {
  const saveCategory = (categoryName) => {
    const categories = JSON.parse(localStorage.getItem("categories")) || [];
    categories.push(categoryName);
    localStorage.setItem("categories", JSON.stringify(categories));
  };
  const loadCategory = () => {
    const categories = JSON.parse(localStorage.getItem("categories")) || [];
    return categories;
  };
  const deleteCategory = (categoryName) => {
    const categories = JSON.parse(localStorage.getItem("categories")) || [];
    const updatedCategories = categories.filter(
      (category) => category !== categoryName
    );
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
  };

  return { saveCategory, loadCategory, loadCategory, deleteCategory };
}

export function TodoListController() {
  const saveTodoListInThereArray = () => {
    const todo = document.getElementById("todo").value.trim();
    const dateTime = document.getElementById("dateTime").value;
    const priority = document.getElementById("priority").value;

    if (todo && dateTime && priority) {
      const todo = {};
    }
  };

  return { saveTodoListInThereArray };
}
