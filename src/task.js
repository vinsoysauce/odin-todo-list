class Task {
  constructor(title, desc, date, prio) {
    this.taskId = crypto.randomUUID();
    this.title = title;
    this.desc = desc;
    this.date = new Date(date);
    this.prio = 0;
  }

  editTaskDetails(title, desc, date, prio) {
    this.title = title;
    this.desc = desc;
    this.date = date;
    this.prio = prio;
  }
}

export default Task