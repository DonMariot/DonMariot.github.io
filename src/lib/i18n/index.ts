import { en } from "./en";
import { fr } from "./fr";
import type { Translations } from "./schema";

export const languages = {
  en,
  fr
};

export type Lang = keyof typeof languages;

const DEFAULT_LANG: Lang = "en";

export function resolveLang(input?: string): Lang {
  if (!input) return DEFAULT_LANG;
  return input.toLowerCase().startsWith("fr") ? "fr" : "en";
}

export function getTranslations(lang: Lang): Translations {
  return languages[lang] || languages[DEFAULT_LANG];
}