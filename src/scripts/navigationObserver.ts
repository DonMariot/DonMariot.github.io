export {}

const links = document.querySelectorAll(".nav-link")

const sections = Array.from(links)
  .map(l => document.querySelector(l.getAttribute("href")!))
  .filter(Boolean)

const activeColors: Record<string,string> = {
  "#hero": "text-white",
  "#problem": "text-white",
  "#solutions": "text-white",
  "#proof": "text-white",
  "#architecture": "text-white",
  "#method": "text-white",
  "#principles": "text-white",
  "#capabilities": "text-white",
  "#contact": "text-white"
}

function setActiveLink(link: Element | null) {

  links.forEach(l => {

    l.classList.remove("font-semiBold", "text-white", "font-medium")
    l.classList.add("font-normal")

    const icon = l.querySelector("svg")

    if(icon){

      icon.classList.remove("scale-110")

      Object.values(activeColors).forEach(c=>icon.classList.remove(c))

      icon.classList.add("text-gray-500")
    }

  })

  if(!link) return

  link.classList.remove("font-normal")
  link.classList.add("font-semiBold", "text-white")

  const icon = link.querySelector("svg")

  if(icon){

    icon.classList.add("scale-110")

    const colorClass = activeColors[link.getAttribute("href")!]

    if(colorClass) icon.classList.add(colorClass)

  }

}

const observer = new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    const link = document.querySelector(`.nav-link[href="#${entry.target.id}"]`)

    if(entry.isIntersecting && link){
      setActiveLink(link)
    }

  })

},{
  root:null,
  rootMargin:"-30% 0px -70% 0px",
  threshold:0
})

sections.forEach(section => observer.observe(section as Element))

links.forEach(link=>{
  link.addEventListener("click",()=>setActiveLink(link))
})