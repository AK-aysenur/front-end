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


// footer toggle menu 1 // 
const klapSectionInduvidu = document.querySelector("footer section:nth-of-type(1)");
const klapButtonInduvidu = document.querySelector("footer section:nth-of-type(1) button");

klapButtonInduvidu.onclick = toggleLijstjeContact;

function toggleLijstjeContact() {
  klapSectionInduvidu.classList.toggle("is-open");
}

// fotter toggle menu 2 //
const klapSectionMiddel = document.querySelector("footer section:nth-of-type(2)");
const klapButtonMiddel = document.querySelector("footer section:nth-of-type(2) button");

klapButtonMiddel.onclick = toggleLijstjeContact2;

function toggleLijstjeContact2() {
  klapSectionMiddel.classList.toggle("is-open");
}

// fotter toggle menu 3 //
const klapSectionOrganisatie = document.querySelector("footer section:nth-of-type(3)");
const klapButtonOrganisatie = document.querySelector("footer section:nth-of-type(3) button");

klapButtonOrganisatie.onclick = toggleLijstjeContact3;

function toggleLijstjeContact3() {
  klapSectionOrganisatie.classList.toggle("is-open");
}

// fotter toggle menu 4 //
const klapSectionOndersteuning = document.querySelector("footer section:nth-of-type(4)");
const klapButtonOndersteuning = document.querySelector("footer section:nth-of-type(4) button");

klapButtonOndersteuning.onclick = toggleLijstjeContact4;

function toggleLijstjeContact4() {
  klapSectionOndersteuning.classList.toggle("is-open");
}