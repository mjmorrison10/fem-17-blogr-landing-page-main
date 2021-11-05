const menuButtons = document.querySelectorAll(".hover-menu");

menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // button.classList.add('hover-menu-active');
    button.children[0].classList.toggle("menu-button");
    button.children[1].classList.toggle("show");
    console.log(button.children[1]);
  });
  //   button.addEventListener("mouseout", () => {
  // button.classList.remove("hover-menu-active");
  // button.children[1].classList.remove("show");
  // button.children[0].classList.remove("menu-button");
  //   });
});

const menuBar = document.querySelector(".menu-bars");

const dropDownMenu = document.querySelectorAll(".menu-model");
// const navButtons = document.querySelector(".nav-buttons");


menuBar.addEventListener("click", () => {
  menuBar.children[0].classList.toggle("fa-bars");
  menuBar.children[0].classList.toggle("fa-times");
  dropDownMenu.forEach((menu) => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  });
});
