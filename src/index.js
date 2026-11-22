// import "./css/style.css";
import Project from "./project.js";
import Task from "./task.js";



class Main {
#projects;

  constructor() {
    this.#projects = [];
  }

  get projects() {
    return this.#projects;
  }

  set projects(project) {
    this.#projects = project;
  }
}

const Add = {
  addProject(projectTitle) {
    const project = new Project(projectTitle);
    this.projects.push(project);
  },

  addTaskToProject(projectTitle, title, desc, date, prio) {
    const project = this.projects.filter(project => project.title === projectTitle);
    const task = new Task(title, desc, date, prio)
    project[0].tasks.push(task);
  }
}

const Edit = {
  renameProject(projectTitle, newProjectTitle) {
    const project = this.projects.filter(project => project.title === projectTitle)
    project[0].title = newProjectTitle
  },

  editTaskFromProject(projectTitle, taskTitle, newTitle, newDesc, newDate, newPrio) {
    const project = this.projects.filter(project => project.title === projectTitle);
    const task = project[0].tasks.filter(task => task.title === taskTitle);
    task[0].title = newTitle;
    task[0].desc = newDesc;
    task[0].date = newDate;
    task[0].prio = newPrio;
  }
}

const Remove = {
  deleteProject(projectTitle) {
    const newList = this.projects.filter(project => project.title !== projectTitle);
    this.projects = newList;
  },

  deleteTaskFromProject(projectTitle, taskTitle) {
    const project = this.projects.filter(project => project.title === projectTitle);
    const task = project[0].tasks.filter(task => task.title !== taskTitle);
    project[0].tasks = task;
  }
}

const Sort = {
  sortTaskFromProjectByDate(projectTitle) {
    const project = this.projects.filter(project => project.title === projectTitle);
    const newList = project[0].tasks.sort((a, b) => a.date - b.date);
    project[0].tasks = newList;
  },

  sortTaskFromProjectByPrio(projectTitle) {
    const project = this.projects.filter(project => project.title === projectTitle);
    const newList = project[0].tasks.sort((a, b) => b.prio - a.prio);
    project[0].tasks = newList;
  }
}


Object.assign(Main.prototype, Add);
Object.assign(Main.prototype, Edit);
Object.assign(Main.prototype, Remove);
Object.assign(Main.prototype, Sort)

// const mainOne = new Main;
// mainOne.addProject('Personal');
// mainOne.addTaskToProject('Personal', 'Wash face', 'Cerave facial', '3/1/2026', 1);
// mainOne.addTaskToProject('Personal', 'Brush teeth', '5mins brushing', '4/4/2026', 2);
// mainOne.addTaskToProject('Personal', 'Drink Water', '8oz water', '3/4/2026', 0);
// mainOne.sortTaskFromProjectByPrio('Personal')
// console.log(mainOne.projects[0].tasks[0].prio);
// console.log(mainOne.projects[0].tasks[1].prio);
// console.log(mainOne.projects[0].tasks[2].prio);


