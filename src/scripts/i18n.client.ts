import { setLang, subscribe, getLang } from "./i18n.store";
import { updateDOM } from "./i18n.dom";

function updateCurrentLanguage() {
  const el = document.getElementById("current-language");
  if (!el) return;

  el.textContent = getLang().toUpperCase();
}

export function initI18n() {
  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang")?.toLowerCase();
      if (!lang) return;

      setLang(lang);
    });
  });

  updateDOM();
  updateCurrentLanguage();

  subscribe(() => {
    updateDOM();
    updateCurrentLanguage();
  });

  document.documentElement.lang = getLang();
}