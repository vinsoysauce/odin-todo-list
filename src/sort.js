import Project from "./project.js";
import Task from "./task.js";

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

export default Sort;