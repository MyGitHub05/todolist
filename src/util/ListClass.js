export class List {
  #thingsTodo;
  constructor() {
    this.#thingsTodo = [];
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
}

export const listOfTodo = new List();
