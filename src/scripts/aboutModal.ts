export {}

const modal = document.getElementById("about-modal")
const panel = document.getElementById("about-panel")
const overlay = document.getElementById("about-overlay")

const openBtn = document.getElementById("about-button")
const closeBtn = document.getElementById("about-close")
const requestBtn = document.getElementById("request-cv-btn")
const requestText = document.getElementById("request-cv-text")
const contactBtn = document.getElementById("contact-btn")

function openModal() {
  if (!modal || !panel || !overlay) return

  modal.classList.remove("hidden")
  modal.classList.add("flex")

  requestAnimationFrame(() => {
    overlay.classList.remove("opacity-0")
    panel.classList.remove("opacity-0", "scale-95")
  })
}

function closeModal() {
  if (!modal || !panel || !overlay) return

  overlay.classList.add("opacity-0")
  panel.classList.add("opacity-0", "scale-95")

  setTimeout(() => {
    modal.classList.add("hidden")
    modal.classList.remove("flex")
    if (requestText) {
      requestText.style.opacity = "0"
      requestText.classList.add("hidden")
    }
  }, 300)
}

openBtn?.addEventListener("click", openModal)
closeBtn?.addEventListener("click", closeModal)
overlay?.addEventListener("click", closeModal)

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal()
  }
})

if (requestBtn && requestText) {
  let timeoutId: number
  requestBtn.addEventListener("click", () => {
    if (timeoutId) clearTimeout(timeoutId)

    requestText.classList.remove("hidden")
    requestText.style.opacity = "1"
    requestText.scrollIntoView({ behavior: "smooth", block: "center" })

    timeoutId = window.setTimeout(() => {
      requestText.style.opacity = "0"
      setTimeout(() => requestText.classList.add("hidden"), 500)
    }, 5000)
  })
}

if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    closeModal()
    setTimeout(() => {
      const contactSection = document.querySelector("#contact")
      if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" })
    }, 300)
  })
}