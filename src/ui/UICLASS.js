import { CategoriesController } from "../util/controller";
import { getArrayFromLocalStorage } from "../util/deleteInLocalStorage";
const controller = CategoriesController();
export class UI {
  addNewCategoryForm() {
    const categoryFormDiv = document.createElement("div");
    categoryFormDiv.innerHTML = `
       <form id="newCategoryForm" action="category-form">
        <input type="text" name="categoryTitle" id="categoryTitle" />
        <button type="submit" class="submitCategoryBtn">Add</button>
      </form>
    `;
    return categoryFormDiv;
  }
  renderCategory() {
    const categories = controller.loadCategory();
    const categoriesDiv = document.createElement("div");
    categoriesDiv.className = "categoriesDiv";

    categories.forEach((element) => {
      const div = document.createElement("div");
      const categoryName = document.createElement("h1");
      const deleteCategoryBtn = document.createElement("button");
      const trashCanImg = document.createElement("img");
      trashCanImg.src = "./images/trashbin.png";

      deleteCategoryBtn.classList.add("trashbinBtn");

      categoryName.textContent = element;

      deleteCategoryBtn.addEventListener("click", () => {
        controller.deleteCategory(element);
        window.location.reload();
      });

      deleteCategoryBtn.appendChild(trashCanImg);
      div.appendChild(categoryName);
      categoryName.appendChild(deleteCategoryBtn);
      categoriesDiv.appendChild(div);
    });
    return categoriesDiv;
  }

  renderNav() {
    // Create a <nav> element and set its ID
    const listNavigation = document.createElement("nav");
    listNavigation.id = "listNavigation";

    // Load categories from the controller
    let categories = controller.loadCategory();

    // Check if categories is an array
    if (Array.isArray(categories)) {
      // Iterate through each category and create a button for it
      categories.forEach((category) => {
        const navBtn = document.createElement("button");
        navBtn.classList.add("navBtn");
        navBtn.id = category;
        navBtn.textContent = category;

        //add Click function in nav
        navBtn.addEventListener("click", () => {
          //this.renderTodoForm();
          this.renderTodoList(getArrayFromLocalStorage(category));
        });

        listNavigation.appendChild(navBtn);
      });
    } else {
      console.error("Categories should be an array");
    }

    // Return the constructed navigation element
    return listNavigation;
  }

  renderTodoForm(category) {
    const todolistFormDiv = document.getElementById("todolistFormDiv");
    todolistFormDiv.innerHTML = "";
    const form = `
      <form action="todoList-form" id="todoListForm">
            <div>
              <label for="todo">Todo</label>
              <input type="text" name="todo" id="todo" />
            </div>

            <div>
              <label for="dateTime">Date & Time </label>
              <input type="datetime-local" name="dateTime" id="dateTime" />
            </div>

            <div>
              <label for="priority">Priority</label>
              <select id="priority">
                <option value="low">low</option>
                <option value="high">high</option>
              </select>
            </div>

            <div>
              <button type="submit" id="todoSubmitBtn">add</button>
            </div>
          </form>
    `;

    todolistFormDiv.innerHTML = form;

    // Add event listener to handle form submission
    document
      .getElementById("todoListForm")
      .addEventListener("submit", (event) => {
        event.preventDefault();
        this.saveTodoInLocalStorage(category);
      });
  }

  renderTodoList(category) {
    const ul = document.getElementById("todoList");
    category.forEach((todo) => {
      const li = document.createElement("li");
      li.innerHTML = `
      <li>
            <div class="todoInfoDiv">
              <p>Title: <span>Dish washing</span></p>
              <p>Date&Time: <span>5/20/2024 11:36am</span></p>
              <p>Priority: <span>low</span></p>
              <div>
                <button class="TodoBtns edit">edit</button>
                <button class="TodoBtns delete">Delete</button>
              </div>
            </div>
            <div>
              <p class="metadata">Description:</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
                modi facere quam soluta nisi. Dolorem nesciunt iste suscipit sed
                vitae eum fuga ipsam ea! Doloremque minus totam ad natus esse!
              </p>
              <p class="metadata">Notes:</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
                non animi debitis officia tempore quasi sapiente, nulla autem
                quidem ex tempora velit veritatis aliquid incidunt repudiandae
                hic iste similique porro!
              </p>
            </div>
          </li>
    `;
      ul.appendChild(li);
    });
  }
}
