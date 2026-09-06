import Header from "../components/header";
import MainSidebar from "../components/mainSidebar";
import { Vazirmatn } from "next/font/google";
import { locales, type Locale } from "@/i18n-config";
import "../globals.css";
import { notFound } from "next/navigation";
import LocalizedNumbers from "../components/LocalizedNumbers";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) notFound();

  const dir = locale === "en" ? "ltr" : "rtl";

  return (
    <html dir={dir} lang={locale} className={vazirmatn.className}>
      <body>
        <LocalizedNumbers>
          <div className="flex h-screen flex-col">
            {/* Header */}
            <div className="shrink-0">
              <Header />
            </div>

            {/* Sidebar + Content */}
            <div className="flex min-h-0 flex-1">
              <MainSidebar />

              <main className="min-w-0 flex-1 overflow-y-auto">{children}</main>
            </div>
          </div>
        </LocalizedNumbers>
      </body>
    </html>
  );
}
