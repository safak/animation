const lineContainer = document.querySelector(".line-container");
const menuContainer = document.querySelector(".menu-container");

lineContainer.addEventListener("click", () => {
  lineContainer.classList.toggle("active");
  menuContainer.style.left="0px"
});
