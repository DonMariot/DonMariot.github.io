export {}

const profileButton = document.getElementById("profile-button")
const aboutPopup = document.getElementById("about-popup")

profileButton?.addEventListener("click",(e)=>{
  e.stopPropagation()
  aboutPopup?.classList.toggle("hidden")
})

document.addEventListener("click",()=>{
  aboutPopup?.classList.add("hidden")
})