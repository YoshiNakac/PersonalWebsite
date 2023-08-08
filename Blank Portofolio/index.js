// Toggle Icon Navbar
let menuIcon = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");

menuIcon.addEventListener = () => {
  menuIcon.classList.toggle("bx-x");
};
// Scroll Section
let sections = document.querySelector("sections");
let navLinks = document.querySelector("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // Active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector(`header nav a[href="#${id}"]`).classList.add("active");
      });
    }
  });

  // Sticky Header
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);
};
