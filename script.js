const navBtn = document.querySelector(".masthead__nav-btn");
const navMenu = document.querySelector(".masthead__nav");

navBtn.addEventListener("click", () => {
  navMenu.classList.toggle("masthead__nav--show");
});
