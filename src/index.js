import "./css/styles.css"
import "./css/dom.css"
import { dom } from "./dom.js"
import Add from "./add.js"
import Edit from "./edit.js"
import Remove from "./remove.js"
import Sort from "./sort.js"

class Main {
#projects;

  constructor() {
    this.#projects = [];
  }

  get projects() {
    return this.#projects;
  }

  set projects(project) {
    this.#projects = project;
  }
}

Object.assign(Main.prototype, Add);
Object.assign(Main.prototype, Edit);
Object.assign(Main.prototype, Remove);
Object.assign(Main.prototype, Sort)

dom()
const mainOne = new Main;
mainOne.addProject('Default');


