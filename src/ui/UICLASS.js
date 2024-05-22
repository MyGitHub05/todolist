import { localStorageController } from "../util/localStorageController";
const lSControllers = localStorageController();
export function UI() {
  const addNewCategoryForm = () => {
    const categoryFormDiv = document.createElement("div");
    categoryFormDiv.innerHTML = `
       <form id="newCategoryForm" action="category-form">
        <input type="text" name="categoryTitle" id="categoryTitle" />
        <button type="submit" class="submitCategoryBtn">Add</button>
      </form>
    `;
    return categoryFormDiv;
  };

  const renderCategory = () => {
    const forAllCategoriesDiv = document.querySelector(".forAllCategories");
    forAllCategoriesDiv.innerHTML = "";

    const categoriesDiv = document.createElement("div");
    categoriesDiv.className = "categoriesDiv";

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      //console.log(`Key: ${key}, Value: ${value}`);

      const div = document.createElement("div");
      const categoryName = document.createElement("h1");
      const deleteCategoryBtn = document.createElement("button");
      const trashCanImg = document.createElement("img");
      trashCanImg.src = "./images/trashbin.png";

      deleteCategoryBtn.classList.add("trashbinBtn");

      categoryName.textContent = key;

      deleteCategoryBtn.addEventListener("click", () => {
        lSControllers.deleteInLocalStorage(key);
        renderCategory();
        renderNav();
      });

      deleteCategoryBtn.appendChild(trashCanImg);
      div.appendChild(categoryName);
      categoryName.appendChild(deleteCategoryBtn);
      categoriesDiv.appendChild(div);
    }
    forAllCategoriesDiv.appendChild(categoriesDiv);
  };

  const renderNav = () => {
    // Create a <nav> element and set its ID
    const listNavigation = document.getElementById("navigation");
    listNavigation.innerHTML = "";

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      //console.log(`Key: ${key}, Value: ${value}`);

      const navBtn = document.createElement("button");
      navBtn.classList.add("navBtn");
      navBtn.id = value;
      navBtn.textContent = key;

      //add Click function in nav
      navBtn.addEventListener("click", () => {
        renderTodoForm(key);
        renderTodoList(key);
      });

      listNavigation.appendChild(navBtn);
    }
  };

  const renderTodoForm = (key) => {
    const todolistFormDiv = document.getElementById("todolistFormDiv");
    todolistFormDiv.innerHTML = "";
    const form = `
      <form action="todoList-form" id="todoListForm">
            <div>
              <label for="todo">Todo</label>
              <input type="text" name="todo" id="todo" />
            </div>

            <div>
              <label for="dateTime">Duedate </label>
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
        const todoValue = document.getElementById("todo").value.trim();
        const dateTime = document.getElementById("dateTime").value;
        const priority = document.getElementById("priority").value;

        if (todoValue && dateTime && priority) {
          const todoItem = {
            todo: todoValue,
            dateTime: dateTime,
            priority: priority,
            description: "",
            notes: "",
          };
          const todoArray = lSControllers.getToLocalStorage(key);
          todoArray.push(todoItem);
          lSControllers.saveToLocalStorage(key, todoArray);
          renderTodoList(key);
        } else {
          console.warn(`you need to put some data`);
        }
      });
  };

  const renderTodoList = (key) => {
    const ul = document.getElementById("todoList");
    ul.innerHTML = "";
    const todoList = lSControllers.getToLocalStorage(key);
    todoList.forEach((todo) => {
      const li = document.createElement("li");
      li.innerHTML = `
      <li>
            <div class="todoInfoDiv">
              <p>Title: <span>${todo.todo}</span></p>
              <p>Duedate: <span>${todo.dateTime}</span></p>
              <p>Priority: <span>${todo.priority}</span></p>
              <div>
                <button class="TodoBtn edit">edit</button>
                <button class="TodoBtn delete">Delete</button>
              </div>
            </div>
            <div>
              <p class="metadata">Description:</p>
              <p>
                ${todo.description}
              </p>
              <p class="metadata">Notes:</p>
              <p>
                ${todo.notes}
              </p>
            </div>
          </li>
      `;
      const editBtn = li.querySelector(".edit");
      const deleteBtn = li.querySelector(".delete");

      editBtn.addEventListener("click", () => {
        renderEditForm();
      });

      deleteBtn.addEventListener("click", () => {
        const category = lSControllers.getToLocalStorage(key);
        const updatedCategory = category.filter(
          (list) => list.todo !== todo.todo
        );

        localStorage.setItem(key, JSON.stringify(updatedCategory));
        renderTodoList(key);
      });
      ul.appendChild(li);
    });
  };

  const renderEditForm = () => {
    const editInfoDiv = document.createElement("div");

    editInfoDiv.classList.add("editInfoDiv");
    editInfoDiv.innerHTML = `
       <h1>Edit todo</h1>
      <form class="editForm" action="submit-newInfo">
        <div class="leftSide">
          <div>
            <label for="todo">todo</label>
            <input type="text" name="todo" id="todo" />
          </div>
          <div>
            <label for="duedate">duedate</label>
            <input type="datetime-local" name="duedate" id="duedate" />
          </div>
          <div>
            <label for="todo">priority</label>
            <select name="priority" id="priority">
              <option value="low">low</option>
              <option value="high">high</option>
            </select>
          </div>
        </div>

        <div class="rightSide">
          <div>
            <label for="description">description</label>
            <textarea name="description" id="description"></textarea>
          </div>
          <div>
            <label for="notes">notes</label>
            <textarea name="notes" id="notes"></textarea>
          </div>
        </div>

        <button type="button" class="exit">X</button>
      </form>
    `;
    const exitBtn = editInfoDiv.querySelector(".exit");
    exitBtn.addEventListener("click", () => {
      editInfoDiv.remove();
    });

    document.body.appendChild(editInfoDiv);
  };

  return {
    addNewCategoryForm,
    renderCategory,
    renderNav,
    renderTodoForm,
    renderTodoList,
    renderEditForm,
  };
}
