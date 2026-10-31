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

  sortByDate() {
    const newList = this.tasks.sort((a, b) => a.date - b.date);
    this.tasks = newList;
  }

  sortByPrio() {
    const newList = this.tasks.sort((a, b) => a.prio - b.prio);
    this.tasks = newList;
  }
}


const projectOne = new Project("personal");
const taskOne = {
  taskId: 67,
  title: 'Drink Water',
  desc: 'Drink some water',
  date: new Date(2026, 8, 20),
  prio: 2
}

const taskTwo = {
  taskId: 68,
  title: 'Eat Food',
  desc: 'Eat some food',
  date: new Date(2026, 8, 21),
  prio: 3
}

const taskThree = {
  taskId: 69,
  title: 'Drink Water',
  desc: 'Drink some water',
  date: new Date(2026, 8, 22),
  prio: 1
}

projectOne.addTask(taskOne)
projectOne.addTask(taskTwo)
projectOne.addTask(taskThree)
console.log(projectOne.tasks);

export default Project 