// Toggle show mobile nav menu
const navBtn = document.querySelector(".masthead__nav-btn");
const navMenu = document.querySelector(".masthead__nav");

navBtn.addEventListener("click", () => {
  navMenu.classList.toggle("masthead__nav--show");
});

// Event for the Explore button
const exploreBtn = document.querySelector(".hero__btn");

exploreBtn.addEventListener("click", () => {
  window.location = "#aboutme";
});
