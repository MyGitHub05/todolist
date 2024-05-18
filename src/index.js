import "./styles/main.css";
import "./styles/sidedashboard.css";
import "./styles/content.css";
import "./images/userProfile.jpg";
import "./images/menu.png";
import { UI } from "./ui/UICLASS";

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const addNewCategoriesDiv = document.querySelector(".addCategoriesDiv");
  const addCategoriesBtn = document.querySelector(".addCatergoriesBtn");

  //this is the green button in sidedashboard
  addCategoriesBtn.addEventListener("click", (event) => {
    event.preventDefault();

    //this is the form that will pop out when you click the addCategoriesBtn
    const newCategoryForm = ui.addNewCategoryForm(); // Create the form
    addNewCategoriesDiv.appendChild(newCategoryForm); // Append the form

    // getting the value of the category form and save it to localStorage
    newCategoryForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const categoryName = newCategoryForm
        .querySelector("#categoryTitle")
        .value.trim();

      // if the value of categoryName is equal to empty string it will alert the user to "mag lagay ka naman"
      // else it will save the data to localStorage
      if (!categoryName) {
        alert("mag lagay ka naman");
      } else {
        ui.saveCategory(categoryName);
        console.log(categoryName);
      }
    });
  });
});

// ui.renderList(listOfTodo.thingsTodo);
// ui.renderNav(listOfTodo.thingsTodo);
// ui.renderTodo();

// const addListBtn = document.querySelector(".addCatergoriesBtn");
// addListBtn.addEventListener("click", () => {
//   ui.addNewList();
// });

// ui.renderNav(listOfTodo.thingsTodo);
