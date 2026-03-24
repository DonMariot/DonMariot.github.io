const mobileSidebar = document.getElementById("mobile-sidebar")!;
const overlay = document.getElementById("sidebar-overlay")!;
const menuButton = document.getElementById("menu-button")!;
const header = document.querySelector("header")!;

let lastScroll = 0;

menuButton?.addEventListener("click", () => {
  mobileSidebar.classList.toggle("-translate-x-full");
  overlay.classList.toggle("hidden");
});

overlay?.addEventListener("click", () => {
  mobileSidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add("-translate-y-full");
    header.classList.remove("shadow-md");
  } else {
    header.classList.remove("-translate-y-full");
    header.classList.add("shadow-md");
  }
  lastScroll = currentScroll;
});