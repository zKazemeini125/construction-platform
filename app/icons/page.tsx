"use client";

import { useState, useMemo } from "react";
import { icons } from "lucide-react";
import { Icon } from "../components/Icon";

const allIconNames = Object.keys(icons).sort();

export default function IconsPage() {
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!search.trim()) return allIconNames;
    return allIconNames.filter((name) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const copyName = (name: string) => {
    navigator.clipboard.writeText(name);
    setCopied(name);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">گالری آیکون‌ها</h1>
        <p className="text-gray-600 mb-6">
          روی هر آیکون کلیک کن تا نامش کپی بشه. بعد در کامپوننت‌ها از{" "}
          <code className="bg-gray-200 px-1 rounded">icon="نام"</code> استفاده کن.
        </p>

        {/* سرچ */}
        <input
          type="text"
          placeholder="جستجوی آیکون... مثلاً bell یا home"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2.5 mb-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* تعداد نتایج */}
        <p className="text-sm text-gray-500 mb-4">
          {filtered.length} آیکون پیدا شد
        </p>

        {/* گرید آیکون‌ها */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
          {filtered.map((name) => (
            <button
              key={name}
              onClick={() => copyName(name)}
              className="flex flex-col items-center gap-2 p-3 bg-white border border-gray-200 rounded-xl hover:border-blue-400 hover:shadow-sm transition relative"
            >
              <Icon name={name} size={28} className="text-gray-700" />
              <span className="text-[11px] text-gray-500 truncate w-full text-center">
                {name}
              </span>

              {/* پیام کپی شدن */}
              {copied === name && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded">
                  کپی شد
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}