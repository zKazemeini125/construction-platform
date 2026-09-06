"use client";

import { Bell, UserRound } from "lucide-react";
import { useDictionary } from "@/lib/i18n-client";
import DateDisplay from "./dateDisplay";
import LanguageSwitcher from "./languageSwitcher";

export default function Header() {
  const { header } = useDictionary();

  return (
    <header className="bg-(--background) shadow-(--shadow-header) p-(--pa-1rem) z-100" id="app-header">
      <div className="max-w-[1400px] my-[0]  flex items-center justify-between">
        <div className="flex items-center gap-[.5rem]">
          <div className="text-(--primary) cursor-pointer text-3xl font-bold px-1">{header.title}</div>
          <div className="flex bg-(--muted) rounded-lg overflow-hidden w-[300px]">
            <input
              type="text"
              placeholder={header.searchPlaceholder}
              className="border-none p-2 flex-1"
              id="global-search"
            />
            <button type="button" className=" bg-(--primary) text-(--primary-foreground) border-none py-0 px-3 cursor-pointer">
              {header.searchButton}
            </button>
          </div>
        </div>
        <div className="flex items-center gap-[.5rem]">
          <DateDisplay />
          <LanguageSwitcher />
          <button className="bg-transparent border-none text-lg cursor-pointer p-1 text-(--primary)" title={header.notificationsLabel}>
            <Bell />
          </button>
          <div>
            <span id="user-role" className="bg-(--primary) text-(--primary-foreground) p-2 rounded-2xl text-sm inline-block my-0 mx-1 role-badge">
              پیمانکار
            </span>
            <span id="user-name" className="text-(--primary)">
              زهرا کاظمینی
            </span>
          </div>
          <button className="bg-transparent border-none text-lg cursor-pointer p-1 text-(--primary)">
            <UserRound />
          </button>
        </div>
      </div>
    </header>
  );
}
