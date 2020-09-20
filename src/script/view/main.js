import '../components/bilboard.js';
import '../components/interior.js';

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
// const close = document.querySelector(".close");
menu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

AOS.init({
  duration: 500
});