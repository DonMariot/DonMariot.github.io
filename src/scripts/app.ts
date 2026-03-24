import { initBaseLayout } from "./baseLayout"
import { initSmoothScroll } from "../animations/scrollManager"
import { heroAnimation } from "../animations/hero"
import { revealSections } from "../animations/reveal"
import { initI18n } from "./i18n.client";

initI18n();

import "./sideBarMobile"
import "./sidebar"
import "./aboutModal"
import "./languageMenu"
import "./profilePopup"
import "./navigationObserver"

import { initForm } from "./formHandler"

function initApp() {

  initBaseLayout()
  initSmoothScroll()
  heroAnimation()
  revealSections()
  initForm() 
  
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp)
} else {
  initApp()
}