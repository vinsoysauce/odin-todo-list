import Task from "./task.js";

class Project {
#id
#title;
#tasks;

  constructor(title) {
    this.#id = crypto.randomUUID();
    this.#title = title;
    this.#tasks = [];
  }

  get id() {
    return this.#id;
  }

  set title(title) {
    this.#title = title;
  }

  get title() {
    return this.#title;
  }

  set tasks(tasks){
    this.#tasks = tasks;
  }

  get tasks() {
    return this.#tasks;
  }
}

const TitleChanger = {
  changeTitle(title) {
    this.title = title
  }
}

const TaskAdder = {
  addTask(title, desc, date, prio) {
    const task = new Task(title, desc, date, prio);
    this.tasks.push(task)
  }
}

Object.assign(Project.prototype, TitleChanger);
Object.assign(Project.prototype, TaskAdder);

const projectOne = new Project('Personal');
projectOne.addTask('Drink Water', '8oz', '3/21/2026', 'Urgent');
projectOne.changeTitle('Work');
console.log(projectOne.tasks)

export default Project 