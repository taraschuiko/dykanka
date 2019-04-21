import '../styles/index.scss';

var mobileMenuIcon = document.querySelector(".nav__mobile-icon img");
var mobileMenu = document.querySelector(".nav__menu");

mobileMenuIcon.addEventListener("click", () => {
  if (!mobileMenu.classList.contains("nav__menu_active")) {
    mobileMenu.classList.add("nav__menu_active");
  } else {
    mobileMenu.classList.remove("nav__menu_active");
  }
});