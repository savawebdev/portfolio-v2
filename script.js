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

// Socials hover effects

// const socialBoxes = document.querySelectorAll(".hero__social-box");

// socialBoxes.forEach((box) => {
//   if (window.innerWidth >= 1025) {
//     box.addEventListener("mouseenter", () => {
//       box.style.width = "100px";
//     });

//     box.addEventListener("mouseleave", () => {
//       box.style.width = "60px";
//     });
//   }
// });
