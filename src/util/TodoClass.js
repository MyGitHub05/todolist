export class Todo {
  #todo;
  #description;
  #dueDate;
  #priority;
  #notes;
  #checklist;

  constructor(todo, dueDate, priority) {
    this.#todo = todo;
    this.#description = "";
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#notes = "";
    this.#checklist = [];
  }

  get todo() {
    return this.#todo;
  }

  set todo(todo) {
    this.#todo = todo;
  }

  get description() {
    return this.#description;
  }

  set description(description) {
    this.#description = description;
  }

  get dueDate() {
    return this.#dueDate;
  }

  set dueDate(dueDate) {
    this.#dueDate = dueDate;
  }

  get priority() {
    return this.#priority;
  }

  set priority(priority) {
    this.#priority = priority;
  }

  get notes() {
    return this.#notes;
  }

  addNotes(notes) {
    this.#notes = notes;
  }

  get checklist() {
    return this.#checklist;
  }

  addChecklistItem(item) {
    this.#checklist.push({ item, completed: false });
  }
  removeChecklistItem(item) {
    this.#checklist = this.#checklist.filter((check) => check.item !== item);
  }

  markChecklistItemComplete(item) {
    const checklistItem = this.#checklist.find((check) => check.item === item);
    if (checklistItem) {
      checklistItem.completed = true;
    }
  }
}
