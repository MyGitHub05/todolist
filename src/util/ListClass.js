export class List {
  #thingsTodo;
  #title;
  constructor(title) {
    this.#thingsTodo = [];
    this.#title = title;
  }
  add(list) {
    this.#thingsTodo.push(list);
  }
  remove(index) {
    this.#thingsTodo.splice(index, 1);
  }
  toggleCompleted(index) {
    this.#thingsTodo[index].toggledCompleted();
  }
  get thingsTodo() {
    return this.#thingsTodo;
  }
  get title() {
    return this.#title;
  }
}

export const listOfTodo = new List("mainlist");
