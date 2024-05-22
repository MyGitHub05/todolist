import "./styles/main.css";
import "./styles/sidedashboard.css";
import "./styles/content.css";
import "./styles/editForm.css";
import "./images/userProfile.jpg";
import "./images/menu.png";
import "./images/trashbin.png";
import { UI } from "./ui/UICLASS";
import { localStorageController } from "./util/localStorageController";

// DOMContentLoaded to ensure the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {
  const ui = UI();
  const LSController = localStorageController();
  const formDiv = document.querySelector(".formDiv");
  const addCategoriesBtn = document.querySelector(".addCatergoriesBtn");
  const content = document.getElementById("content");
  const mainContent = document.getElementById("mainContent");

  //this is the green button in sidedashboard
  addCategoriesBtn.addEventListener("click", (event) => {
    event.preventDefault();

    //sideboard form
    formDiv.innerHTML = "";

    //this is the form that will pop out when you click the addCategoriesBtn
    const newCategoryForm = ui.addNewCategoryForm(); // i created this to make sure it loaded first before we add an eventlistner submitCreate the form
    formDiv.appendChild(newCategoryForm); // Append the form

    // getting the value of the category form and save it to localStorage
    newCategoryForm.addEventListener("submit", (event) => {
      event.preventDefault();
      let categoryNameInput = newCategoryForm.querySelector("#categoryTitle");
      let categoryName = categoryNameInput.value.trim(); //we use trim to avoid passing a space in out categories

      if (!categoryName) {
        console.warn("Category name cannot be empty.");
        return;
      }

      const value = []; // Initialize the category with an empty array; //we make it an array and save it to localStorage
      LSController.saveToLocalStorage(categoryName, value);
      categoryNameInput.value = "";
      ui.renderCategory();
      ui.renderNav();
    });
  });

  ui.renderCategory(); // rendered category
  ui.renderNav(); // render nav before main content

  ui.renderTodoForm("todays");
  ui.renderTodoList("todays");
});
