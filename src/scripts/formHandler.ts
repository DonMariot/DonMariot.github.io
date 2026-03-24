export function initForm() {
  const form = document.getElementById("contactForm") as HTMLFormElement
  const btn = document.getElementById("submitBtn") as HTMLButtonElement
  const text = document.getElementById("btnText") as HTMLElement
  const spinner = document.getElementById("spinner") as HTMLElement
  const icon = document.getElementById("startIcon") as HTMLElement
  const emailInput = document.getElementById("email") as HTMLInputElement
  const replytoField = document.getElementById("replytoField") as HTMLInputElement

  if (!form || !btn || !text || !spinner || !icon || !emailInput || !replytoField) return

  emailInput.addEventListener("input", () => {
    replytoField.value = emailInput.value
  })

  const defaultKey = text.getAttribute("data-i18n")

  const setLoading = (loading: boolean) => {
    btn.disabled = loading
    if (loading) {
      text.setAttribute("data-i18n", "contact.form.sending")
      document.dispatchEvent(new Event("i18n:update"))
      spinner.classList.remove("hidden")
      icon.classList.add("hidden")
    } else {
      if (defaultKey) {
        text.setAttribute("data-i18n", defaultKey)
        document.dispatchEvent(new Event("i18n:update"))
      }
      spinner.classList.add("hidden")
      icon.classList.remove("hidden")
    }
  }

  form.addEventListener("submit", (e) => {
    setLoading(true)

    e.preventDefault()
    const formData = new FormData(form)

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then((response) => {
      setLoading(false)
      if (response.ok) {
        alert("Merci ! Votre message a été envoyé.")
        form.reset()
      } else {
        alert("Oups, une erreur est survenue. Veuillez réessayer.")
      }
    }).catch(() => {
      setLoading(false)
      alert("Oups, une erreur est survenue. Veuillez réessayer.")
    })
  })

  document.querySelectorAll(".group").forEach((group) => {
    group.addEventListener("click", () => {
      const input = group.querySelector("input, textarea") as HTMLInputElement | HTMLTextAreaElement | null
      input?.focus()
    })
  })
}