const toggle = document.querySelector(".header_toggle");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const nav = document.getElementById("nav-bar");
const bodypd = document.getElementById("body-pd");
const headerpd = document.getElementById("header");

toggle.addEventListener("click", () => {
  const isMenuOpen = nav.classList.contains("show");

  if (!isMenuOpen) {
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
  nav.classList.toggle("show");
  bodypd.classList.toggle("body-pd");
  headerpd.classList.toggle("body-pd");
});



const linkColor = document.querySelectorAll('.nav_link')

function colorLink() {
  if (linkColor) {
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
  }
}
linkColor.forEach(l => l.addEventListener('click', colorLink))