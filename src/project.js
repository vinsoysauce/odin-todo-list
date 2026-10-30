class Project {
  constructor(title) {
    this.projectId = crypto.randomUUID();
    this.title = title;
    this.tasks = [];
  }

  addTask(task) {
    const taskList = this.tasks;
    taskList.push(task);
    this.tasks = taskList;
  }

  deleteTask(taskID) {

  }
}


// const projectOne = new Project("personal");
// const taskOne = {
//   taskId: 67,
//   title: 'Drink Water',
//   desc: 'Drink some water',
//   date: '08/19/2026',
//   prio: 'Urgent'
// }

// const taskTwo = {
//   taskId: 68,
//   title: 'Drink Water',
//   desc: 'Drink some water',
//   date: '08/19/2026',
//   prio: 'Urgent'
// }

// const taskThree = {
//   taskId: 68,
//   title: 'Drink Water',
//   desc: 'Drink some water',
//   date: '08/19/2026',
//   prio: 'Urgent'
// }

// console.log(projectOne.title);
// projectOne.addTask(taskOne)
// console.log(projectOne.tasks);

export default Project 