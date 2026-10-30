class Project {
  constructor(title) {
    this.projectId = crypto.randomUUID();
    this.title = title;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(id) {
    const newList = this.tasks.filter(task => task.taskId !== id);
    this.tasks = newList;
  }
}


const projectOne = new Project("personal");
const taskOne = {
  taskId: 67,
  title: 'Drink Water',
  desc: 'Drink some water',
  date: '08/19/2026',
  prio: 'Urgent'
}

const taskTwo = {
  taskId: 68,
  title: 'Drink Water',
  desc: 'Drink some water',
  date: '08/19/2026',
  prio: 'Urgent'
}

const taskThree = {
  taskId: 69,
  title: 'Drink Water',
  desc: 'Drink some water',
  date: '08/19/2026',
  prio: 'Urgent'
}

projectOne.addTask(taskOne)
projectOne.addTask(taskTwo)
projectOne.addTask(taskThree)

projectOne.deleteTask(68)
console.log(projectOne.tasks);

export default Project 