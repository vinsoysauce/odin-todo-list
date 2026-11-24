
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

export default Edit;