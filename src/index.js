import "./css/styles.css"
import Project from "./project.js";
import Task from "./task.js";



class Main {
  constructor() {
    this.projects = [];
  }

  createProject(projectName) {
    const newProject = new Project(projectName)
    this.projects.push(newProject);
  }
  
  addTaskToProject(projectName) {
    const project = this.projects.filter(project => project.title === projectName);
    project[0].addTask('Drink Water', '8oz water', new Date(2026, 8, 22), 1);
    console.log(project[0])
  }
}

const gameOne = new Main;

gameOne.createProject('Personal');
gameOne.createProject('Work');
gameOne.addTaskToProject('Personal')