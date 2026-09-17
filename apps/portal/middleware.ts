import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, LOCALE_COOKIE_NAME } from "@myorg/i18n-helpers";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // اگه مسیر از قبل شامل locale هست (نباید باشه چون از URL حذفش کردیم) رد شو
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return NextResponse.next();

  // locale رو از کوکی بخون، وگرنه پیش‌فرض
  const cookieLocale = request.cookies.get(LOCALE_COOKIE_NAME)?.value;
  const locale = locales.includes(cookieLocale as any) ? cookieLocale! : defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  // rewrite: کاربر همون /dashboard رو می‌بینه، ولی پشت صحنه /fa/dashboard serve می‌شه
  const response = NextResponse.rewrite(url);

  // اگه کوکی هنوز ست نشده، پیش‌فرض رو ست کن
  if (!cookieLocale) {
    response.cookies.set(LOCALE_COOKIE_NAME, defaultLocale, { path: "/" });
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};