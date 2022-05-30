// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixednav = header.offsetTop;
  const top = document.querySelector("#top");

  if (window.pageYOffset > fixednav) {
    header.classList.add("navbar-fixed");
    top.classList.remove("hidden");
    top.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    top.classList.remove("flex");
    top.classList.add("hidden");
  }
};

// Hamburger
const humberger = document.querySelector("#humberger");
const navmenu = document.querySelector("#nav-menu");

humberger.addEventListener("click", function () {
  humberger.classList.toggle("humberger-active");
  navmenu.classList.toggle("hidden");
});

// klik humberger
window.addEventListener("click", function (e) {
  if (e.target != humberger && e.target != navmenu) {
    humberger.classList.remove("humberger-active");
    navmenu.classList.add("hidden");
  }
});

// dark mode
const checkbox = document.querySelector("#dark-toggle");
const htnl = document.querySelector("html");

checkbox.addEventListener("click", function () {
  if (checkbox.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }

  // pindah posisi toggle sesuai mode
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }