import "./css/styles.css"

const content = document.querySelector("#content");
const sidebar = document.createElement("div");
const projectButtonDiv = document.createElement("div")

const appendToContainer = (obj) => {
  content.appendChild(obj);
}

const appendToSidebar = ([...obj]) => {
  sidebar.classList.add("sidebar");
  for (const item of obj) {
    sidebar.appendChild(item)
  }
  appendToContainer(sidebar)
}

const appendToMain = (obj) => {
  const main = document.createElement("div");
  main.classList.add("main");
  main.appendChild(obj)
  appendToContainer(main)
}

const apprendToProjectButtonDiv = ([...obj]) => {
  projectButtonDiv.classList.add("projectButtonDiv");
  for (const item of obj) {
    projectButtonDiv.appendChild(item)
  }
  appendToSidebar([projectButtonDiv]);
}

const dom = (() => {
  const title = document.createElement("h1");
  title.textContent = "Todo App";
  appendToSidebar([title]);

  const projectText = document.createElement("h2");
  projectText.textContent = "Projects";
  const addProject = document.createElement("button");
  addProject.textContent = "+"
  apprendToProjectButtonDiv([projectText, addProject]);
})




export { dom }