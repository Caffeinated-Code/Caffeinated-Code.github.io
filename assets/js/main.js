const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const themeToggle = document.getElementById("theme-toggle");
const header = document.getElementById("header");
const sections = document.querySelectorAll("section[id]");

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  themeToggle.innerHTML = '<i class="ri-sun-line" aria-hidden="true"></i>';
}

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => navMenu.classList.remove("show"));
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  themeToggle.innerHTML = isDark
    ? '<i class="ri-sun-line" aria-hidden="true"></i>'
    : '<i class="ri-moon-line" aria-hidden="true"></i>';
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);

  const scrollY = window.scrollY;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    const link = document.querySelector(`.nav__link[href="#${sectionId}"]`);
    if (!link) return;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
