// JavaScript Document
console.log("hi");


// dropdown-menu
let openMenuButton = document.querySelector("header > button");

openMenuButton.addEventListener("click", openMenu);

function openMenu() {
  let deNav = document.querySelector("header > nav");
  deNav.classList.add("is-open");
}


// 
let sluitMenuButton = document.querySelector("header nav button");

sluitMenuButton.addEventListener("click", sluitMenu);

function sluitMenu() {
  let deNav = document.querySelector("header nav");
  deNav.classList.remove("is-open");
}

