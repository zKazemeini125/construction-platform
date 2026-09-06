export const locales = ["fa", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fa";

const dictionaries = {
  fa: () => import("@/messages/fa.json").then((m) => m.default),
  en: () => import("@/messages/en.json").then((m) => m.default),
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
