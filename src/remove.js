import Project from "./project.js";
import Task from "./task.js";

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

export default Remove;