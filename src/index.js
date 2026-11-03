import "./css/styles.css"
import Project from "./project.js";



class Main {
  constructor() {
    this.projects = [];
  }

  createProject(projectTitle) {
    const project = new Project(projectTitle)
    this.projects.push(project)
  }

  renameProject(projectTitle, newProjectName) {
    const project = this.projects.filter(project => project.title === projectTitle)
    project[0].renameProject(newProjectName)
  }

  deleteProject(projectTitle) {
    const newList = this.projects.filter(project => project.title !== projectTitle)
    this.projects = newList;
  }
  
  addTaskToProject(projectTitle, title, desc, date, prio) {
    const project = this.projects.filter(project => project.title === projectTitle);
    project[0].addTask(title, desc, date, prio);
  }

  editTaskFromProject(projectTitle, taskTitle, newTitle, newDesc, newDate, newPrio) {
    const project = this.projects.filter(project => project.title === projectTitle);
    project[0].editTask(taskTitle, newTitle, newDesc, newDate, newPrio)
  }

  deleteTaskFromProject(projectTitle, taskTitle) {
    const project = this.projects.filter(project => project.title === projectTitle);
    const task = project[0].tasks.filter(task => task.title !== taskTitle)
    project[0].tasks = task
  }

  sortTaskFromProjectByPrio(projectTitle) {
    const project = this.projects.filter(project => project.title === projectTitle);
    project[0].sortByPrio()
  }

  sortTaskFromProjectByDate(projectTitle) {
    const project = this.projects.filter(project => project.title === projectTitle);
    project[0].sortByDate()
  }
}

