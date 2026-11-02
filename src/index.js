import "./css/styles.css"
import Project from "./project.js";
import Task from "./task.js";



class Main {
  constructor() {
    this.projects = [];
  }

  createProject(projectTitle) {
    const newProject = new Project(projectTitle)
    this.projects.push(newProject);
  }
  
  addTaskToProject(projectTitle, title, desc, date, prio) {
    const stringToDate = new Date(date)
    const project = this.projects.filter(project => project.title === projectTitle);
    project[0].addTask(title, desc, stringToDate, prio);
  }

  deleteTaskFromProject(projectTitle, taskTitle) {
    const project = this.projects.filter(project => project.title === projectTitle);
    const task = project[0].tasks.filter(task => task.title !== taskTitle)
    project[0].tasks = task
    console.log(project[0].tasks)
  }
}

const gameOne = new Main;

// gameOne.createProject('Personal');
// gameOne.createProject('Work');
// gameOne.addTaskToProject('Personal', 'Drink water', '8oz water', "2026, 8, 22", 1)
// gameOne.addTaskToProject('Personal', 'Drink beer', '8oz beer', "2026, 8, 22", 1)
// gameOne.deleteTaskFromProject('Personal', 'Drink water')