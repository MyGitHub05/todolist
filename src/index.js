import "./styles/main.css";
import "./styles/sidedashboard.css";
import "./images/userProfile.jpg";
import { UI } from "./ui/UICLASS";
import { listOfTodo } from "./util/ListClass";

const ui = new UI();

ui.renderList(listOfTodo.thingsTodo);

const addListBtn = document.querySelector(".addListBtn");
addListBtn.addEventListener("click", () => {
  ui.addNewList();
});
