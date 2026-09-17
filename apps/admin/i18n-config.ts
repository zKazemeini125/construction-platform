import { mergeDictionary, type Locale } from "@myorg/i18n-helpers";

const localDictionaries = {
  fa: () => import("./messages/fa.json").then((m) => m.default),
  en: () => import("./messages/en.json").then((m) => m.default),
};

const sharedDictionaries = {
  fa: () => import("@myorg/ui/messages/fa.json").then((m) => m.default),
  en: () => import("@myorg/ui/messages/en.json").then((m) => m.default),
};

export async function getDictionary(locale: Locale) {
  const [shared, local] = await Promise.all([
    sharedDictionaries[locale](),
    localDictionaries[locale](),
  ]);
  return mergeDictionary(shared, local);
}

export { locales, defaultLocale, type Locale } from "@myorg/i18n-helpers";