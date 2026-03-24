type Listener = (lang: string) => void;

const STORAGE_KEY = "lang";
let currentLang =
  localStorage.getItem(STORAGE_KEY)?.toLowerCase() || "en";

const listeners: Listener[] = [];

export function getLang() {
  return currentLang.toLowerCase();
}

export function setLang(lang: string) {
  lang = lang.toLowerCase();

  if (lang === currentLang) return;

  currentLang = lang;

  localStorage.setItem(STORAGE_KEY, lang);

  document.cookie = `lang=${lang}; path=/; max-age=31536000`;

  document.documentElement.lang = lang;

  listeners.forEach((l) => l(lang));
}

export function subscribe(listener: Listener) {
  listeners.push(listener);

  return () => {
    const index = listeners.indexOf(listener);
    if (index > -1) listeners.splice(index, 1);
  };
}