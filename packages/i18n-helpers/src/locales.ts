export const locales = ["fa", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fa";
export const LOCALE_COOKIE_NAME = "NEXT_LOCALE";