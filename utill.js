const navEl = document.getElementById("nav");
const headerEl = document.getElementById("header");
const menuBtn = document.getElementById("menu-icon");
const closeMenuBtn = document.getElementById("close-menu-icon");
const bodyEl = document.querySelector("body");

menuBtn.addEventListener("click", () => toggleMenu(true));
closeMenuBtn.addEventListener("click", () => toggleMenu(false));

const toggleMenu = (isClosed) => {
  if (isClosed) {
    navEl.style.right = "-20px";
    headerEl.setAttribute("toggle", "1");
    bodyEl.style.position = "fixed";
  } else {
    navEl.style.right = "-100vw";
    headerEl.removeAttribute("toggle");
    bodyEl.style.position = "initial";
  }
};
