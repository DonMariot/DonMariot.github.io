const button = document.getElementById("language-button")
const menu = document.getElementById("language-menu")
const current = document.getElementById("current-language")

function openMenu() {
  if(!menu) return
  menu.classList.remove("hidden")
  requestAnimationFrame(() => {
    menu.classList.remove("scale-95","opacity-0")
    menu.classList.add("scale-100","opacity-100")
  })
}

function closeMenu() {
  if(!menu) return
  menu.classList.remove("scale-100","opacity-100")
  menu.classList.add("scale-95","opacity-0")
  setTimeout(()=>menu.classList.add("hidden"),200)
}

button?.addEventListener("click",(e)=>{
  e.stopPropagation()
  if(menu?.classList.contains("hidden")){
    openMenu()
  }else{
    closeMenu()
  }
})

document.querySelectorAll(".language-option").forEach((el)=>{
  el.addEventListener("click",(e)=>{
    const lang = (e.currentTarget as HTMLElement).dataset.lang
    if(current && lang){
      current.textContent = lang
      localStorage.setItem("lang",lang)
    }
    closeMenu()
  })
})

document.addEventListener("click",(e)=>{
  if(!button?.contains(e.target as Node) && !menu?.contains(e.target as Node)){
    closeMenu()
  }
})
