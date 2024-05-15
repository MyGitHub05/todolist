import { listOfTodo } from "../util/ListClass";
export class UI {
  constructor() {
    // Declare ListInput as a property of the class
    this.ListInput = document.createElement("input");
    this.div = null;
  }
  addNewList() {
    const addNewListDiv = document.querySelector(".addlistDiv");
    if (
      !addNewListDiv.querySelector("input") &&
      !addNewListDiv.querySelector(".addBtn")
    ) {
      this.div = document.createElement("div");
      const addBtn = document.createElement("button");
      addBtn.className = "addBtn";
      addBtn.textContent = "Add";

      this.div.appendChild(addBtn);
      this.div.appendChild(this.ListInput);
      addNewListDiv.appendChild(this.div);
    }
    const add = document.querySelector(".addBtn");
    add.addEventListener("click", () => {
      let valueOfInput = this.ListInput.value;
      listOfTodo.add(valueOfInput);
      this.renderList(listOfTodo.thingsTodo);
      this.ListInput.value = "";
      this.div.remove();
    });
  }

  renderList(list) {
    const ListDiv = document.getElementById("list");
    ListDiv.innerHTML = "";
    list.forEach((e) => {
      const divEachList = document.createElement("div");
      divEachList.classList = "divEacList";
      const nameOfList = document.createElement("h1");
      nameOfList.textContent = e;
      divEachList.appendChild(nameOfList);
      ListDiv.appendChild(divEachList);
    });
  }
}
