import { cookies } from "next/headers";
import { locales, defaultLocale, LOCALE_COOKIE_NAME, type Locale } from "./locales";

export async function getLocaleFromCookie(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(LOCALE_COOKIE_NAME)?.value;
  if (value && (locales as readonly string[]).includes(value)) {
    return value as Locale;
  }
  return defaultLocale;
}