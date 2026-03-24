export function initBaseLayout() {

  const sidebar = document.getElementById("mobile-sidebar")
  const overlay = document.getElementById("sidebar-overlay")

  if (!sidebar || !overlay) return

  const openSidebar = () => {
    sidebar.classList.remove("-translate-x-full")
    overlay.classList.remove("hidden")
    document.body.classList.add("overflow-hidden")
  }

  const closeSidebar = () => {
    sidebar.classList.add("-translate-x-full")
    overlay.classList.add("hidden")
    document.body.classList.remove("overflow-hidden")
  }

  ;(window as any).toggleSidebar = () => {
    if (sidebar.classList.contains("-translate-x-full")) {
      openSidebar()
    } else {
      closeSidebar()
    }
  }

  overlay.addEventListener("click", closeSidebar)

}