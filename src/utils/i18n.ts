import type { Translations } from "../lib/i18n/schema";

type Params = Record<string, string | number>;

export function createT(translations: Translations) {
  function getValue(path: string): any {
    return path.split(".").reduce((obj: any, key) => obj?.[key], translations);
  }

  function interpolate(str: string, params?: Params) {
    if (!params) return str;

    return str.replace(/\{\{(.*?)\}\}/g, (_, key) => {
      return params[key.trim()]?.toString() ?? "";
    });
  }

  return function t(path: string, params?: Params,  join?: string): string {
    const value = getValue(path);

    if (!value) return path; 

      if (Array.isArray(value)) {
      return value.join(join ?? ",  ");
    }

    if (typeof value === "string") {
      return interpolate(value, params);
    }

    return value;
  };
}