const product = document.querySelector(".product");
const productButton = document.querySelector(".product-button");
const company = document.querySelector(".company");
const connect = document.querySelector(".connect");

product.addEventListener("click", function () {
  product.children[1].classList.toggle("show");
  product.children[0].classList.toggle("menu-button");
  console.log(product.children[1]);
  console.log("product");
});

company.addEventListener("click", function () {
  company.children[1].classList.toggle("show");
  company.children[0].classList.toggle("menu-button");

  console.log(company.children[1]);
  console.log("company");
});

connect.addEventListener("click", function () {
  connect.children[1].classList.toggle("show");
  connect.children[0].classList.toggle("menu-button");

  console.log(connect.children[1]);
  console.log("connect");
});

