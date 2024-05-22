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
        const todoValue = document.getElementById("todo").value.trim();
        const dateTime = document.getElementById("dateTime").value;
        const priority = document.getElementById("priority").value;

        if (todoValue && dateTime && priority) {
          const todoItem = {
            todo: todoValue,
            dateTime: dateTime,
            priority: priority,
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
              <p>Date&Time: <span>${todo.dateTime}</span></p>
              <p>Priority: <span>${todo.priority}</span></p>
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
      const editBtn = li.querySelector(".edit");
      const deleteBtn = li.querySelector(".delete");

      editBtn.addEventListener("click", () => {
        console.log("edit working");
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

  return {
    addNewCategoryForm,
    renderCategory,
    renderNav,
    renderTodoForm,
    renderTodoList,
  };
}
