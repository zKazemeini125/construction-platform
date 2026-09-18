import { NotFoundPage } from "@myorg/ui";
import { getLocaleFromCookie } from "@myorg/i18n-helpers";

export default async function NotFound() {
  const locale = await getLocaleFromCookie();
  const dir = locale === "fa" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body>
        <NotFoundPage />
      </body>
    </html>
  );
}