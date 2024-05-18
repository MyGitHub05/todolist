import { listOfTodo, List } from "../util/ListClass";
export class UI {
  constructor() {
    // Declare ListInput as a property of the class
    this.ListInput = document.createElement("input");
    this.div = null;
  }
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
  saveCategory(categoryName) {
    const categories = JSON.parse(localStorage.getItem("categories")) || [];
    categories.push(categoryName);
    localStorage.setItem("categories", JSON.stringify(categories));
  }
  loadCategory() {
    const categories = JSON.parse(localStorage.getItem("categories")) || [];
    return categories;
  }
  deleteCategory(categoryName) {
    const categories = JSON.parse(localStorage.getItem("categories")) || [];
    const updatedCategories = categories.filter(
      (category) => category !== categoryName
    );
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
  }
  renderCategory() {
    const categories = this.loadCategory();
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
        this.deleteCategory(element);
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
    const listNavigation = document.createElement("nav");
    listNavigation.id = "listNavigation";
    let categories = this.loadCategory();
    categories.forEach((category) => {
      const navBtn = document.createElement("button");
      navBtn.classList.add("navBtn");
      navBtn.textContent = category;
      listNavigation.appendChild(navBtn);
    });
    return listNavigation;
  }
  // addNewCategory() {
  //   const addNewListDiv = document.querySelector(".addlistDiv");
  //   if (
  //     !addNewListDiv.querySelector("input") &&
  //     !addNewListDiv.querySelector(".addBtn")
  //   ) {
  //     this.div = document.createElement("div");
  //     const addBtn = document.createElement("button");
  //     addBtn.className = "addBtn";
  //     addBtn.textContent = "Add";

  //     this.div.appendChild(addBtn);
  //     this.div.appendChild(this.ListInput);
  //     addNewListDiv.appendChild(this.div);
  //   }
  //   const add = document.querySelector(".addBtn");
  //   add.addEventListener("click", () => {
  //     let valueOfInput = this.ListInput.value;
  //     listOfTodo.add(new List(valueOfInput));
  //     this.renderList(listOfTodo.thingsTodo);
  //     this.renderNav(listOfTodo.thingsTodo);
  //     this.renderForm();
  //     this.ListInput.value = "";
  //     this.div.remove();
  //   });
  // }

  // renderNav(list) {
  //   const nav = document.getElementById("listNavigation");
  //   nav.innerHTML = "";

  //   list.forEach((e) => {
  //     const li = document.createElement("li");
  //     li.classList = "listOfNav";
  //     li.textContent = e.title;
  //     nav.appendChild(li);
  //   });
  // }
  // renderForm() {
  //   const content = document.getElementById("content");
  //   const form = document.createElement("form");
  //   form.innerHTML = `
  //     <form action="task-form">
  //       <div>
  //         <label for="title">To do</label>
  //         <input type="text" name="title" id="title" />
  //       </div>

  //       <div>
  //         <label for="duedate">Duedate</label>
  //         <input type="datetime-local" name="duedate" id="duedate" />
  //       </div>

  //       <div>
  //         <label for="priority">Priority</label>
  //         <select id="priority">
  //           <option value="low">low</option>
  //           <option value="high">high</option>
  //         </select>
  //       </div>
  //     </form>
  //   `;
  //   content.appendChild(form);
  // }

  // renderList(list) {
  //   const ListDiv = document.getElementById("list");
  //   ListDiv.innerHTML = "";
  //   list.forEach((e) => {
  //     const divEachList = document.createElement("div");
  //     divEachList.classList = "divEacList";
  //     const nameOfList = document.createElement("h1");
  //     nameOfList.textContent = e.title;
  //     divEachList.appendChild(nameOfList);
  //     ListDiv.appendChild(divEachList);
  //   });
  // }

  // renderTodo() {
  //   const mainContent = document.getElementById("mainContent");
  //   mainContent.innerHTML = "";
  //   mainContent.innerHTML = `
  //     <ul>
  //         <li>
  //           <span>dish washing</span> <span>09/15/2000 2:00pm</span
  //           ><span>low</span>
  //           <button><img src="./images/menu.png" alt="menu" /></button>
  //         </li>
  //       </ul>
  //   `;
  // }
}
