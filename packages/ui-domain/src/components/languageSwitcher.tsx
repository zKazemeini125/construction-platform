"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown, Globe } from "lucide-react";
import {
  locales,
  defaultLocale,
  LOCALE_COOKIE_NAME,
  type Locale,
} from "@myorg/i18n-helpers";

const localeLabels: Partial<Record<Locale, string>> = {
  fa: "فارسی",
  en: "English",
};

function getLabel(locale: Locale) {
  return localeLabels[locale] ?? locale.toUpperCase();
}

function readLocaleFromCookie(): Locale {
  if (typeof document === "undefined") return defaultLocale;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${LOCALE_COOKIE_NAME}=([^;]+)`),
  );
  const value = match?.[1] as Locale | undefined;
  return value && locales.includes(value) ? value : defaultLocale;
}

function writeLocaleToCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE_NAME}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
}

export default function LanguageSwitcher() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState<Locale>(defaultLocale);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentLocale(readLocaleFromCookie());
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(locale: Locale) {
    setOpen(false);
    if (locale === currentLocale) return;
    writeLocaleToCookie(locale);
    setCurrentLocale(locale);
    router.refresh(); // نه push — فقط رفرش، چون URL نباید عوض بشه
  }

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1.5 rounded-lg bg-transparent px-2 py-1.5 text-sm text-(--primary) transition-colors hover:bg-(--muted)"
        title="تغییر زبان"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe size={18} strokeWidth={1.8} />
        <span>{getLabel(currentLocale)}</span>
        <ChevronDown
          size={14}
          strokeWidth={2}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute end-0 z-50 mt-1.5 w-36 overflow-hidden rounded-lg bg-(--background) py-1 shadow-(--shadow-header)"
        >
          {locales.map((locale) => {
            const isActive = locale === currentLocale;
            return (
              <li key={locale}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  onClick={() => handleSelect(locale)}
                  className={`flex w-full items-center px-3 py-2 text-start text-sm transition-colors ${
                    isActive
                      ? "bg-(--accent-opacity) font-medium text-(--primary)"
                      : "text-(--primary) hover:bg-(--muted)"
                  }`}
                >
                  {getLabel(locale)}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
