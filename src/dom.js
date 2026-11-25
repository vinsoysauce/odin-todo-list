import "./css/styles.css"
import "./svg/check-circle.svg"

const content = document.querySelector("#content");

const sidebar = document.createElement("div");
sidebar.classList.add("sidebar");

const main = document.createElement("div");
main.classList.add("main");

const logoHeaderDiv = document.createElement("div");
logoHeaderDiv.classList.add("logo-header-div")

const projectButtonDiv = document.createElement("div");
projectButtonDiv.classList.add("project-button-div");

const projectListDiv = document.createElement("div");
projectListDiv.classList.add("project-list-div")

const appendToContainer = (obj) => {
  content.appendChild(obj);
}

const appendToSidebar = ([...obj]) => {
  for (const item of obj) {
    sidebar.appendChild(item)
  }
  appendToContainer(sidebar)
}

const appendToMain = (obj) => {
  main.appendChild(obj)
  appendToContainer(main)
}

const appendToLogoHeaderDiv = (obj) => {
  for (const item of obj) {
    logoHeaderDiv.appendChild(item)
  }
  appendToSidebar([logoHeaderDiv])
}

const apprendToProjectButtonDiv = ([...obj]) => {
  for (const item of obj) {
    projectButtonDiv.appendChild(item)
  }
  appendToSidebar([projectButtonDiv]);
}

const appendToProjectList = ([...obj]) => {
  const container = document.createElement("div");
  container.classList.add("project-container")
  const projectLogo = document.createElement("img");
  projectLogo.src = "./svg/circle-slice-8.svg"
  for (const item of obj) {
      container.appendChild(projectLogo)
      container.appendChild(item)
      projectListDiv.appendChild(container);
  }
  appendToSidebar([projectListDiv])
}

const dom = (() => {
  const appHeader = document.createElement("h1");
  appHeader.textContent = "Todo List";
  const appLogo = document.createElement("img");
  appLogo.src = "./svg/check-circle.svg"
  appendToLogoHeaderDiv([appLogo, appHeader]);

  const projectText = document.createElement("h2");
  projectText.textContent = "Projects";
  const addProject = document.createElement("button");
  addProject.textContent = "+"
  apprendToProjectButtonDiv([projectText, addProject]);

  const test = document.createElement("h2");
  test.textContent = "Default";
  appendToProjectList([test])

  const projectTitle = document.createElement("h1");
  projectTitle.textContent = "Default";
  appendToMain(projectTitle)
})




export { dom }