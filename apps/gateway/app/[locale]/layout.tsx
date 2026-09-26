import { getLocaleFromCookie } from "@myorg/i18n-helpers";
import { irYekan } from "@myorg/ui";   // نام پکیجت را درست بگذار

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocaleFromCookie();
  const dir = locale === "fa" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className={irYekan.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}