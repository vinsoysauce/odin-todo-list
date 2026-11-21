class Task {
#id;
#title;
#desc;
#date;
#prio;

  constructor(title, desc, date, prio) {
    this.#id = crypto.randomUUID();
    this.#title = title;
    this.#desc = desc;
    this.#date = new Date(date);
    this.#prio = prio;
  }

  get id() {
    return this.#id;
  }

  set title(title) {
    this.#title = title;
  }

  get title() {
    return this.#title;
  }
  
  set desc(desc) {
    this.#desc = desc;
  }

  get desc() {
    return this.#desc;
  }

  set date(date) {
    this.#date = date;
  }

  get date() {
    return this.#date;
  }
}

export default Task