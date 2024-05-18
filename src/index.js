import "./styles/main.css";
import "./styles/sidedashboard.css";
import "./styles/content.css";
import "./images/userProfile.jpg";
import "./images/menu.png";
import "./images/trashbin.png";
import { UI } from "./ui/UICLASS";

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const addNewCategoriesDiv = document.querySelector(".addCategoriesDiv");
  const formDiv = document.querySelector(".formDiv");
  const addCategoriesBtn = document.querySelector(".addCatergoriesBtn");
  const forAllCategoriesDiv = document.querySelector(".forAllCategories");
  const content = document.getElementById("content");
  const mainContent = document.getElementById("mainContent");

  //this is the green button in sidedashboard
  addCategoriesBtn.addEventListener("click", (event) => {
    event.preventDefault();
    formDiv.innerHTML = "";

    //this is the form that will pop out when you click the addCategoriesBtn
    const newCategoryForm = ui.addNewCategoryForm(); // i created this to make sure it loaded first before we add an eventlistner submitCreate the form
    formDiv.appendChild(newCategoryForm); // Append the form

    // getting the value of the category form and save it to localStorage
    newCategoryForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const categoryName = newCategoryForm
        .querySelector("#categoryTitle")
        .value.trim(); //we use trim to avoid passing a space in out categories

      // if the value of categoryName is equal to empty string it will alert the user to "mag lagay ka naman"
      // else it will save the data to localStorage
      if (!categoryName) {
        alert("mag lagay ka naman");
      } else {
        ui.saveCategory(categoryName);
      }
      forAllCategoriesDiv.innerHTML = ""; // for not doubling the rendering of category
      forAllCategoriesDiv.appendChild(ui.renderCategory()); //rendered category
    });
  });

  addNewCategoriesDiv.appendChild(ui.renderCategory()); // rendered category
  content.insertBefore(ui.renderNav(), mainContent);
});
