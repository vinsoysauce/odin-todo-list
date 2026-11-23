import Project from "./project.js";
import Task from "./task.js";

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

export default Add;