import { getTranslations } from "../lib/i18n";
import { getLang } from "./i18n.store";
import { createT } from "../utils/i18n";

function parseParams(el: Element) {
  const raw = el.getAttribute("data-i18n-params");
  if (!raw) return undefined;

  try {
    return JSON.parse(raw);
  } catch {
    return undefined;
  }
}

export function updateDOM() {
  const lang = getLang().toLowerCase();
  const translations = getTranslations(lang as any);
  const t = createT(translations);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (el.children.length > 0) return;

    const key = el.getAttribute("data-i18n");
    if (!key) return;

    const params = parseParams(el);
    const value = t(key, params);

    el.textContent = value;
  });

  document.querySelectorAll("[data-i18n]").forEach((el) => {
  const key = el.getAttribute("data-i18n");
  if (!key) return;

  const params = parseParams(el);
  const value = t(key, params);

  if (el.children.length === 0) {
    el.textContent = value;
    return;
  }

  const firstChild = el.firstChild;

  if (firstChild && firstChild.nodeType === Node.TEXT_NODE) {
    firstChild.textContent = value;
  } else {
    el.insertBefore(document.createTextNode(value), el.firstChild);
  }
});
}