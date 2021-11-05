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
