import Task from "./task.js";

class Project {
  constructor(title) {
    this.projectId = crypto.randomUUID();
    this.title = title;
    this.tasks = [];
  }

  editProjectName(title) {
    this.title = title;
  }

  addTask(title, desc, date, prio) {
    const task = new Task(title, desc, date, prio)
    this.tasks.push(task);
  }

  editTask(taskTitle, newTitle, newDesc, newDate, newPrio) {
    const task = this.tasks.filter(task => task.title === taskTitle);
    task[0].editTaskDetails(newTitle, newDesc, newDate, newPrio);
  }

  deleteTask(title) {
    const newList = this.tasks.filter(task => task.title !== title);
    this.tasks = newList;
  }

  sortByDate() {
    const newList = this.tasks.sort((a, b) => a.date - b.date);
    this.tasks = newList;
  }

  sortByPrio() {
    const newList = this.tasks.sort((a, b) => b.prio - a.prio);
    this.tasks = newList;
  }
}


export default Project 