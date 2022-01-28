// program for hamburger menu
const bar_icon = document.getElementById("bar-icon");
const menu = document.getElementById("hamburger-menu");
const nav_register_page = document.getElementById("nav-register-page");
const cross_icon = document.getElementById("cross-icon");

const navbar_container = document.getElementById("navbar-container");

bar_icon.addEventListener("click", onclick);

function onclick() {
  menu.classList.add("hamburger-menu2");
  if (nav_register_page != null) {
    nav_register_page.classList.add("navbar-container-registerpage2");
  }
  cross_icon.style.display = "inline";
  bar_icon.style.display = "none";
  if (navbar_container != null) {
    navbar_container.classList.add("navbar-container2");
  }

  cross_icon.addEventListener("click", onclick2);
  function onclick2() {
    cross_icon.style.display = "none";
    bar_icon.style.display = "inline";
    menu.classList.remove("hamburger-menu2");
    if (nav_register_page != null) {
      nav_register_page.classList.remove("navbar-container-registerpage2");
    }
    if (navbar_container != null) {
      navbar_container.classList.remove("navbar-container2");
    }
  }
}
