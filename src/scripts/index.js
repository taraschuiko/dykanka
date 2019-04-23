import '../styles/index.scss';

var mobileMenuIcon = document.querySelector(".nav__mobile-icon img");
var mobileMenu = document.querySelector(".nav__menu");

var menuOpenIcon = "./assets/svg/menu_1.svg";
var menuCloseIcon = "./assets/svg/close_1.svg";

mobileMenuIcon.addEventListener("click", () => {
  if (!mobileMenu.classList.contains("nav__menu_active")) {
    mobileMenu.classList.add("nav__menu_active");
    mobileMenuIcon.attributes[0].value = menuCloseIcon;
  } else {
    mobileMenu.classList.remove("nav__menu_active");
    mobileMenuIcon.attributes[0].value = menuOpenIcon;
  }
});