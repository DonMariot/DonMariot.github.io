export {}

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');

function openSidebar() {
  sidebar?.classList.remove('-translate-x-full');
  overlay?.classList.remove('opacity-0','pointer-events-none');
}

function closeSidebar() {
  sidebar?.classList.add('-translate-x-full');
  overlay?.classList.add('opacity-0','pointer-events-none');
}

mobileMenuBtn?.addEventListener('click', () => {
  const isOpen = !sidebar?.classList.contains('-translate-x-full');

  if (isOpen) {
    closeSidebar();
  } else {
    openSidebar();
  }
});

overlay?.addEventListener('click', closeSidebar);