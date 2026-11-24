import "./css/styles.css"


const contentContainer = ((obj) => {
  const content = document.querySelector("#content");
  const container = document.createElement("div");
  container.classList.add("container");
  container.appendChild(obj)
  content.appendChild(container);

  // const sidebar = document.createElement("div")
  // sidebar.classList.add("sidebar")
  // const title = document.createElement("h1");
  // title.textContent = "Todo App";
  // sidebar.appendChild(title)
  // container.appendChild(sidebar)
  // content.appendChild(container)
})

const sidebarContainer =((obj) => {
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");
  sidebar.appendChild(obj);
  contentContainer(sidebar);
})






export { contentContainer, sidebarContainer }