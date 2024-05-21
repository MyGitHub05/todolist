import { deleteInLocalStorage } from "./deleteInLocalStorage";
import { saveToLocalStorage } from "./saveToLocalStorage";
import { getToLocalStorage } from "./getToLocalStorage";
import { iterateLocalStorage } from "./iterateLocalStorage";
export function localStorageController() {
  return {
    deleteInLocalStorage,
    saveToLocalStorage,
    getToLocalStorage,
    iterateLocalStorage,
  };
}

// export function CategoriesController() {
//   const saveCategory = (categoryName) => {
//     const categories = JSON.parse(localStorage.getItem("categories")) || [];
//     categories.push(categoryName);
//     localStorage.setItem("categories", JSON.stringify(categories));
//   };
//   const loadCategory = () => {
//     const categories = JSON.parse(localStorage.getItem("categories")) || [];
//     return categories;
//   };
//   const deleteCategory = (categoryName) => {
//     const categories = JSON.parse(localStorage.getItem("categories")) || [];
//     const updatedCategories = categories.filter(
//       (category) => category !== categoryName
//     );
//     localStorage.setItem("categories", JSON.stringify(updatedCategories));
//   };

//   return { saveCategory, loadCategory, loadCategory, deleteCategory };
// }

// export function TodoListController() {
//   const saveTodoListInTheirArray = (key, todo) => {
//     const array = getArrayFromLocalStorage(key);
//     array.push(todo);
//     localStorage.setItem(key, JSON.stringify(array));
//   };

//   const getArrayFromLocalStorage = (key) => {
//     return JSON.parse(localStorage.getItem(key));
//     // try {
//     //   const array = JSON.parse(localStorage.getItem(key));
//     //   if (array === null) {
//     //     console.warn(`No data found for key: ${key}`);
//     //   }
//     //   return array;
//     // } catch (e) {
//     //   console.error(`Error retrieving data for key: ${key}`, e);
//     //   return null;
//     // }
//   };

//   return { saveTodoListInTheirArray, getArrayFromLocalStorage };
// }
