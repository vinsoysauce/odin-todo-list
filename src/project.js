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

// const TitleChanger = {
//   changeTitle(title) {
//     this.title = title
//   }
// }

// const TaskAdder = {
//   addTask(title, desc, date, prio) {
//     const task = new Task(title, desc, date, prio);
//     this.tasks.push(task)
//   }
// }

// const TaskEditor = {
//   editTask(title, newTitle, newDesc, newDate, newPrio) {
//     const task = this.tasks.filter(task => task.title === title);
//     task[0].title = newTitle;
//     task[0].desc = newDesc;
//     task[0].date = newDate;
//     task[0].prio = newPrio;
//   }
// }

// const TaskDeleter = {
//   deleteTask(title) {
//     const newList = this.tasks.filter(task => task.title !== title);
//     this.tasks = newList;
//   }
// }

// const TaskSorter = {
//   sortByDate() {
//     const newList = this.tasks.sort((a, b) => a.date - b.date);
//     this.tasks = newList;
//   },

//   sortByPrio() {
//     const newList = this.tasks.sort((a, b) => b.prio - a.prio);
//     this.tasks = newList;
//   }
// }

// Object.assign(Project.prototype, TitleChanger);
// Object.assign(Project.prototype, TaskAdder);
// Object.assign(Project.prototype, TaskEditor);
// Object.assign(Project.prototype, TaskDeleter);
// Object.assign(Project.prototype, TaskSorter);

export default Project 