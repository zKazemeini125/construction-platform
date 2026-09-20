import { Noto_Naskh_Arabic, Vazirmatn } from "next/font/google";
import { Play, Users2 } from "lucide-react";

/**
 * فونت‌ها: سریف برای تیتر بزرگ (حس رفرنس)، Vazirmatn برای بقیه.
 * این دو رو یک‌بار در root layout پروژه هم می‌تونید تعریف کنید تا
 * در همه صفحات قابل استفاده باشن؛ اینجا برای سادگی محلی تعریف شده.
 */
const displaySerif = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-display",
});

const bodySans = Vazirmatn({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-body",
});

/* --- توکن‌های رنگی برگرفته از تصویر مرجع ---
  آسمون سرد بالا  : #9CA3AC
  آسمون گرم پایین : #EAD9CB
  اسپرسو/تیتر     : #2A2119
  متن ثانویه      : #5B5147
  کارت کرم        : #FAF7F3
  تراکوتا         : #B9835F
  تراکوتا تیره    : #8C5F3E
  خط ظریف         : #DAD2C8
  اورلی تیره پایین: #211C16
*/

const roles = [
  {
    title: "کارفرما",
    desc: "پروژه‌تان را تعریف کنید، پیشرفت کار را ببینید و مستقیم با پیمانکار در ارتباط باشید.",
    href: "/portal/login?role=owner",
  },
  {
    title: "پیمانکار",
    desc: "مصالح مورد نیاز را ثبت کنید، از چند تأمین‌کننده قیمت بگیرید و پروژه‌های در دست اجرا را پیگیری کنید.",
    href: "/portal/login?role=contractor",
  },
  {
    title: "تأمین‌کننده",
    desc: "درخواست‌های مصالح را ببینید، قیمت بدهید و سفارش‌ها را تا تحویل پیگیری کنید.",
    href: "/supplier/login",
  },
];

export default function LandingHero() {
  return (
    <div
      dir="rtl"
      className={`${displaySerif.variable} ${bodySans.variable} font-[var(--font-body)]`}
    >
      {/* ---------- هیرو با پس‌زمینه گرادیان آسمون ---------- */}
      <section
        className="relative overflow-hidden rounded-b-[2rem]"
        style={{
          background:
            "linear-gradient(180deg, #9CA3AC 0%, #C7B6AC 55%, #EAD9CB 100%)",
        }}
      >
        {/* نویگیشن */}
        <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-sm border border-[#2A2119]/70 text-sm font-bold text-[#2A2119]">
              ب
            </span>
            <span className="text-lg font-bold tracking-tight text-[#2A2119]">
              بنا
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-[#2A2119]/85 md:flex">
            <a href="#roles" className="hover:text-[#2A2119]">
              نقش‌ها
            </a>
            <a href="#how" className="hover:text-[#2A2119]">
              چطور کار می‌کند
            </a>
            <a href="#suppliers" className="hover:text-[#2A2119]">
              تأمین‌کننده‌ها
            </a>
          </nav>

          <div className="flex items-center gap-4 text-sm text-[#2A2119]">
            <span className="text-[#2A2119]/70">FA</span>
            <a
              href="#contact"
              className="underline decoration-[#2A2119]/40 underline-offset-4 hover:decoration-[#2A2119]"
            >
              تماس با ما
            </a>
          </div>
        </header>

        {/* بدنه هیرو: تیتر سمت راست + کارت شناور سمت چپ (در RTL خودکار جابه‌جا می‌شود) */}
        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pb-16 pt-6 md:grid-cols-2 md:gap-6 md:px-12 md:pt-10">
          {/* متن هیرو */}
          <div className="flex flex-col justify-center">
            <h1
              className="text-[2.75rem] leading-[1.15] text-[#2A2119] sm:text-[3.4rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              همه‌ی پروژه،
              <br />
              روی یک نقشه
            </h1>
            <p className="mt-5 max-w-[36ch] text-[#2A2119]/75">
              / کارفرما، پیمانکار و تأمین‌کننده در یک پلتفرم /
            </p>
            <a
              href="#roles"
              className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-[#2A2119] px-8 py-3.5 text-sm font-medium text-[#FAF7F3] transition-colors hover:bg-[#3A2E24]"
            >
              شروع کنید
            </a>
          </div>

          {/* کارت شناور معرفی محصول */}
          <div className="relative">
            <div className="rounded-3xl bg-[#FAF7F3] p-6 shadow-[0_20px_60px_-20px_rgba(42,33,25,0.35)] sm:p-8">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-[#DAD2C8] px-4 py-1.5 text-xs text-[#5B5147]">
                  درخواست مصالح
                </span>
                <span className="rounded-full border border-[#DAD2C8] px-4 py-1.5 text-xs text-[#5B5147]">
                  پیگیری پروژه
                </span>
                <span className="rounded-full bg-[#2A2119] px-4 py-1.5 text-xs text-[#FAF7F3]">
                  زنده
                </span>
              </div>

              <h2
                className="mt-6 text-2xl leading-snug text-[#2A2119]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                یک پلتفرم، سه نقش
              </h2>
              <p className="mt-2 text-sm text-[#5B5147]">
                از ثبت درخواست تا تحویل مصالح.
              </p>

              {/* گرافیک انتزاعی ساختمان به‌جای عکس واقعی */}
              <div className="relative mt-6 overflow-hidden rounded-2xl">
                <svg
                  viewBox="0 0 400 220"
                  className="h-auto w-full"
                  aria-hidden="true"
                >
                  <rect width="400" height="220" fill="#EAD9CB" />
                  <rect x="40" y="90" width="140" height="110" fill="#8C5F3E" />
                  <rect x="180" y="60" width="120" height="140" fill="#B9835F" />
                  <rect x="300" y="110" width="70" height="90" fill="#2A2119" opacity="0.85" />
                  <rect x="60" y="120" width="26" height="30" fill="#FAF7F3" opacity="0.85" />
                  <rect x="100" y="120" width="26" height="30" fill="#FAF7F3" opacity="0.85" />
                  <rect x="200" y="90" width="26" height="30" fill="#FAF7F3" opacity="0.85" />
                  <rect x="240" y="90" width="26" height="30" fill="#FAF7F3" opacity="0.85" />
                  <line x1="0" y1="200" x2="400" y2="200" stroke="#2A2119" strokeWidth="2" />
                </svg>
              </div>
            </div>

            {/* نشان شناور شبیه ROOMTOUR در رفرنس */}
            <div className="absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl bg-[#2A2119] px-4 py-3 shadow-lg sm:-right-8">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#B9835F]">
                <Play className="h-4 w-4 fill-[#FAF7F3] text-[#FAF7F3]" />
              </span>
              <div className="text-[#FAF7F3]">
                <p className="text-xs text-[#FAF7F3]/70">معرفی سریع</p>
                <p className="text-sm font-medium">۹۰ ثانیه</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- کارت‌های نقش ---------- */}
      <section id="roles" className="mx-auto max-w-6xl px-6 py-16 md:px-12">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {roles.map((role) => (
            <article
              key={role.title}
              className="flex flex-col gap-4 rounded-2xl border border-[#DAD2C8] bg-[#FAF7F3] p-6"
            >
              <h3
                className="text-xl text-[#2A2119]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {role.title}
              </h3>
              <p className="flex-grow text-sm leading-relaxed text-[#5B5147]">
                {role.desc}
              </p>
              <a
                href={role.href}
                className="mt-2 inline-flex items-center justify-center rounded-full border border-[#2A2119] px-5 py-2.5 text-sm font-medium text-[#2A2119] transition-colors hover:bg-[#2A2119] hover:text-[#FAF7F3]"
              >
                ورود {role.title}
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- نوار پایین: پنل تراکوتا + پنل تیره آماری ---------- */}
      <section id="suppliers" className="mx-auto max-w-6xl px-6 pb-20 md:px-12">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-[0.9fr_1.1fr]">
          {/* پنل تراکوتا: تأمین‌کننده‌های تأییدشده */}
          <div className="flex flex-col justify-between gap-6 rounded-3xl bg-[#B9835F] p-8 text-[#FAF7F3]">
            <div>
              <h3
                className="text-2xl leading-snug"
                style={{ fontFamily: "var(--font-display)" }}
              >
                با تأمین‌کننده‌های
                <br />
                تأییدشده کار کنید
              </h3>
              <p className="mt-3 max-w-[30ch] text-sm text-[#FAF7F3]/85">
                هر تأمین‌کننده قبل از ورود به پلتفرم بررسی می‌شود.
              </p>
            </div>
            {/* گرافیک انتزاعی لایه‌های مصالح */}
            <svg viewBox="0 0 160 90" className="h-20 w-40" aria-hidden="true">
              <rect x="0" y="10" width="26" height="70" fill="#2A2119" />
              <rect x="34" y="0" width="26" height="90" fill="#8C5F3E" />
              <rect x="68" y="20" width="26" height="55" fill="#EAD9CB" />
              <rect x="102" y="5" width="26" height="80" fill="#2A2119" opacity="0.7" />
              <rect x="136" y="15" width="24" height="65" fill="#8C5F3E" />
            </svg>
          </div>

          {/* پنل تیره: آمار و پیام */}
          <div
            className="relative flex flex-col justify-between gap-8 overflow-hidden rounded-3xl p-8"
            style={{
              background:
                "linear-gradient(160deg, #211C16 0%, #3A2E24 100%)",
            }}
          >
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3 space-x-reverse">
                <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#211C16] bg-[#B9835F] text-sm font-semibold text-[#FAF7F3]">
                  ک
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#211C16] bg-[#8C5F3E] text-sm font-semibold text-[#FAF7F3]">
                  پ
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#211C16] bg-[#5B5147] text-sm font-semibold text-[#FAF7F3]">
                  <Users2 className="h-4 w-4" />
                </span>
              </div>
              <div className="text-[#FAF7F3]">
                <p
                  className="text-2xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  ۱۲۰۰+
                </p>
                <p className="text-xs text-[#FAF7F3]/60">کاربر فعال</p>
              </div>
            </div>

            <div>
              <p className="max-w-[34ch] text-lg leading-relaxed text-[#FAF7F3]">
                پروژه را از صفر تا تحویل، با هر سه نقش هماهنگ پیش ببرید.
              </p>
              <a
                href="#contact"
                className="mt-4 inline-block text-sm text-[#FAF7F3] underline decoration-[#FAF7F3]/40 underline-offset-4 hover:decoration-[#FAF7F3]"
              >
                بیشتر بدانید
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
