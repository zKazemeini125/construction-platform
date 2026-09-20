// import { Noto_Naskh_Arabic, Vazirmatn } from "next/font/google";
// import { Play, Users2 } from "lucide-react";

// /**
//  * فونت‌ها: سریف برای تیتر بزرگ (حس رفرنس)، Vazirmatn برای بقیه.
//  * این دو رو یک‌بار در root layout پروژه هم می‌تونید تعریف کنید تا
//  * در همه صفحات قابل استفاده باشن؛ اینجا برای سادگی محلی تعریف شده.
//  */
// const displaySerif = Noto_Naskh_Arabic({
//   subsets: ["arabic"],
//   weight: ["400", "700"],
//   variable: "--font-display",
// });

// const bodySans = Vazirmatn({
//   subsets: ["arabic"],
//   weight: ["300", "400", "500", "600", "700", "800"],
//   variable: "--font-body",
// });

// /* --- توکن‌های رنگی برگرفته از تصویر مرجع ---
//   آسمون سرد بالا  : #9CA3AC
//   آسمون گرم پایین : #EAD9CB
//   اسپرسو/تیتر     : #2A2119
//   متن ثانویه      : #5B5147
//   کارت کرم        : #FAF7F3
//   تراکوتا         : #B9835F
//   تراکوتا تیره    : #8C5F3E
//   خط ظریف         : #DAD2C8
//   اورلی تیره پایین: #211C16
// */

// const roles = [
//   {
//     title: "کارفرما",
//     desc: "پروژه‌تان را تعریف کنید، پیشرفت کار را ببینید و مستقیم با پیمانکار در ارتباط باشید.",
//     href: "/portal/login?role=owner",
//   },
//   {
//     title: "پیمانکار",
//     desc: "مصالح مورد نیاز را ثبت کنید، از چند تأمین‌کننده قیمت بگیرید و پروژه‌های در دست اجرا را پیگیری کنید.",
//     href: "/portal/login?role=contractor",
//   },
//   {
//     title: "تأمین‌کننده",
//     desc: "درخواست‌های مصالح را ببینید، قیمت بدهید و سفارش‌ها را تا تحویل پیگیری کنید.",
//     href: "/supplier/login",
//   },
// ];

// export default function LandingHero() {
//   return (
//     <div
//       dir="rtl"
//       className={`${displaySerif.variable} ${bodySans.variable} font-[var(--font-body)]`}
//     >
//       {/* ---------- هیرو با پس‌زمینه گرادیان آسمون ---------- */}
//       <section
//         className="relative overflow-hidden rounded-b-[2rem]"
//         style={{
//           background:
//             "linear-gradient(180deg, #9CA3AC 0%, #C7B6AC 55%, #EAD9CB 100%)",
//         }}
//       >
//         {/* نویگیشن */}
//         <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
//           <div className="flex items-center gap-2">
//             <span className="grid h-8 w-8 place-items-center rounded-sm border border-[#2A2119]/70 text-sm font-bold text-[#2A2119]">
//               ب
//             </span>
//             <span className="text-lg font-bold tracking-tight text-[#2A2119]">
//               بنا
//             </span>
//           </div>

//           <nav className="hidden items-center gap-8 text-sm text-[#2A2119]/85 md:flex">
//             <a href="#roles" className="hover:text-[#2A2119]">
//               نقش‌ها
//             </a>
//             <a href="#how" className="hover:text-[#2A2119]">
//               چطور کار می‌کند
//             </a>
//             <a href="#suppliers" className="hover:text-[#2A2119]">
//               تأمین‌کننده‌ها
//             </a>
//           </nav>

//           <div className="flex items-center gap-4 text-sm text-[#2A2119]">
//             <span className="text-[#2A2119]/70">FA</span>
//             <a
//               href="#contact"
//               className="underline decoration-[#2A2119]/40 underline-offset-4 hover:decoration-[#2A2119]"
//             >
//               تماس با ما
//             </a>
//           </div>
//         </header>

//         {/* بدنه هیرو: تیتر سمت راست + کارت شناور سمت چپ (در RTL خودکار جابه‌جا می‌شود) */}
//         <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pb-16 pt-6 md:grid-cols-2 md:gap-6 md:px-12 md:pt-10">
//           {/* متن هیرو */}
//           <div className="flex flex-col justify-center">
//             <h1
//               className="text-[2.75rem] leading-[1.15] text-[#2A2119] sm:text-[3.4rem]"
//               style={{ fontFamily: "var(--font-display)" }}
//             >
//               همه‌ی پروژه،
//               <br />
//               روی یک نقشه
//             </h1>
//             <p className="mt-5 max-w-[36ch] text-[#2A2119]/75">
//               / کارفرما، پیمانکار و تأمین‌کننده در یک پلتفرم /
//             </p>
//             <a
//               href="#roles"
//               className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-[#2A2119] px-8 py-3.5 text-sm font-medium text-[#FAF7F3] transition-colors hover:bg-[#3A2E24]"
//             >
//               شروع کنید
//             </a>
//           </div>

//           {/* کارت شناور معرفی محصول */}
//           <div className="relative">
//             <div className="rounded-3xl bg-[#FAF7F3] p-6 shadow-[0_20px_60px_-20px_rgba(42,33,25,0.35)] sm:p-8">
//               <div className="flex flex-wrap gap-2">
//                 <span className="rounded-full border border-[#DAD2C8] px-4 py-1.5 text-xs text-[#5B5147]">
//                   درخواست مصالح
//                 </span>
//                 <span className="rounded-full border border-[#DAD2C8] px-4 py-1.5 text-xs text-[#5B5147]">
//                   پیگیری پروژه
//                 </span>
//                 <span className="rounded-full bg-[#2A2119] px-4 py-1.5 text-xs text-[#FAF7F3]">
//                   زنده
//                 </span>
//               </div>

//               <h2
//                 className="mt-6 text-2xl leading-snug text-[#2A2119]"
//                 style={{ fontFamily: "var(--font-display)" }}
//               >
//                 یک پلتفرم، سه نقش
//               </h2>
//               <p className="mt-2 text-sm text-[#5B5147]">
//                 از ثبت درخواست تا تحویل مصالح.
//               </p>

//               {/* گرافیک انتزاعی ساختمان به‌جای عکس واقعی */}
//               <div className="relative mt-6 overflow-hidden rounded-2xl">
//                 <svg
//                   viewBox="0 0 400 220"
//                   className="h-auto w-full"
//                   aria-hidden="true"
//                 >
//                   <rect width="400" height="220" fill="#EAD9CB" />
//                   <rect x="40" y="90" width="140" height="110" fill="#8C5F3E" />
//                   <rect x="180" y="60" width="120" height="140" fill="#B9835F" />
//                   <rect x="300" y="110" width="70" height="90" fill="#2A2119" opacity="0.85" />
//                   <rect x="60" y="120" width="26" height="30" fill="#FAF7F3" opacity="0.85" />
//                   <rect x="100" y="120" width="26" height="30" fill="#FAF7F3" opacity="0.85" />
//                   <rect x="200" y="90" width="26" height="30" fill="#FAF7F3" opacity="0.85" />
//                   <rect x="240" y="90" width="26" height="30" fill="#FAF7F3" opacity="0.85" />
//                   <line x1="0" y1="200" x2="400" y2="200" stroke="#2A2119" strokeWidth="2" />
//                 </svg>
//               </div>
//             </div>

//             {/* نشان شناور شبیه ROOMTOUR در رفرنس */}
//             <div className="absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl bg-[#2A2119] px-4 py-3 shadow-lg sm:-right-8">
//               <span className="grid h-9 w-9 place-items-center rounded-full bg-[#B9835F]">
//                 <Play className="h-4 w-4 fill-[#FAF7F3] text-[#FAF7F3]" />
//               </span>
//               <div className="text-[#FAF7F3]">
//                 <p className="text-xs text-[#FAF7F3]/70">معرفی سریع</p>
//                 <p className="text-sm font-medium">۹۰ ثانیه</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------- کارت‌های نقش ---------- */}
//       <section id="roles" className="mx-auto max-w-6xl px-6 py-16 md:px-12">
//         <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
//           {roles.map((role) => (
//             <article
//               key={role.title}
//               className="flex flex-col gap-4 rounded-2xl border border-[#DAD2C8] bg-[#FAF7F3] p-6"
//             >
//               <h3
//                 className="text-xl text-[#2A2119]"
//                 style={{ fontFamily: "var(--font-display)" }}
//               >
//                 {role.title}
//               </h3>
//               <p className="flex-grow text-sm leading-relaxed text-[#5B5147]">
//                 {role.desc}
//               </p>
//               <a
//                 href={role.href}
//                 className="mt-2 inline-flex items-center justify-center rounded-full border border-[#2A2119] px-5 py-2.5 text-sm font-medium text-[#2A2119] transition-colors hover:bg-[#2A2119] hover:text-[#FAF7F3]"
//               >
//                 ورود {role.title}
//               </a>
//             </article>
//           ))}
//         </div>
//       </section>

//       {/* ---------- نوار پایین: پنل تراکوتا + پنل تیره آماری ---------- */}
//       <section id="suppliers" className="mx-auto max-w-6xl px-6 pb-20 md:px-12">
//         <div className="grid grid-cols-1 gap-5 md:grid-cols-[0.9fr_1.1fr]">
//           {/* پنل تراکوتا: تأمین‌کننده‌های تأییدشده */}
//           <div className="flex flex-col justify-between gap-6 rounded-3xl bg-[#B9835F] p-8 text-[#FAF7F3]">
//             <div>
//               <h3
//                 className="text-2xl leading-snug"
//                 style={{ fontFamily: "var(--font-display)" }}
//               >
//                 با تأمین‌کننده‌های
//                 <br />
//                 تأییدشده کار کنید
//               </h3>
//               <p className="mt-3 max-w-[30ch] text-sm text-[#FAF7F3]/85">
//                 هر تأمین‌کننده قبل از ورود به پلتفرم بررسی می‌شود.
//               </p>
//             </div>
//             {/* گرافیک انتزاعی لایه‌های مصالح */}
//             <svg viewBox="0 0 160 90" className="h-20 w-40" aria-hidden="true">
//               <rect x="0" y="10" width="26" height="70" fill="#2A2119" />
//               <rect x="34" y="0" width="26" height="90" fill="#8C5F3E" />
//               <rect x="68" y="20" width="26" height="55" fill="#EAD9CB" />
//               <rect x="102" y="5" width="26" height="80" fill="#2A2119" opacity="0.7" />
//               <rect x="136" y="15" width="24" height="65" fill="#8C5F3E" />
//             </svg>
//           </div>

//           {/* پنل تیره: آمار و پیام */}
//           <div
//             className="relative flex flex-col justify-between gap-8 overflow-hidden rounded-3xl p-8"
//             style={{
//               background:
//                 "linear-gradient(160deg, #211C16 0%, #3A2E24 100%)",
//             }}
//           >
//             <div className="flex items-center gap-4">
//               <div className="flex -space-x-3 space-x-reverse">
//                 <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#211C16] bg-[#B9835F] text-sm font-semibold text-[#FAF7F3]">
//                   ک
//                 </span>
//                 <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#211C16] bg-[#8C5F3E] text-sm font-semibold text-[#FAF7F3]">
//                   پ
//                 </span>
//                 <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-[#211C16] bg-[#5B5147] text-sm font-semibold text-[#FAF7F3]">
//                   <Users2 className="h-4 w-4" />
//                 </span>
//               </div>
//               <div className="text-[#FAF7F3]">
//                 <p
//                   className="text-2xl"
//                   style={{ fontFamily: "var(--font-display)" }}
//                 >
//                   ۱۲۰۰+
//                 </p>
//                 <p className="text-xs text-[#FAF7F3]/60">کاربر فعال</p>
//               </div>
//             </div>

//             <div>
//               <p className="max-w-[34ch] text-lg leading-relaxed text-[#FAF7F3]">
//                 پروژه را از صفر تا تحویل، با هر سه نقش هماهنگ پیش ببرید.
//               </p>
//               <a
//                 href="#contact"
//                 className="mt-4 inline-block text-sm text-[#FAF7F3] underline decoration-[#FAF7F3]/40 underline-offset-4 hover:decoration-[#FAF7F3]"
//               >
//                 بیشتر بدانید
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }













"use client";

import React, { useState, useEffect } from "react";
type Locale = "fa" | "en";
type Direction = "rtl" | "ltr";

interface Translations {
  brand: string;
  nav: {
    home: string;
    services: string;
    projects: string;
    about: string;
    contact: string;
    login: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  stats: {
    materials: string;
    suppliers: string;
    projects: string;
    satisfaction: string;
  };
  portals: {
    title: string;
    subtitle: string;
    client: { title: string; desc: string; cta: string };
    contractor: { title: string; desc: string; cta: string };
    supplier: { title: string; desc: string; cta: string };
  };
  materials: {
    title: string;
    subtitle: string;
    items: { name: string; desc: string }[];
  };
  features: {
    title: string;
    items: { title: string; desc: string }[];
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
  };
}

// ─────────────────────────────────────────────
// Translations
// ─────────────────────────────────────────────
const translations: Record<Locale, Translations> = {
  fa: {
    brand: "ساخت‌پلت",
    nav: {
      home: "خانه",
      services: "خدمات",
      projects: "پروژه‌ها",
      about: "درباره ما",
      contact: "تماس",
      login: "ورود",
    },
    hero: {
      badge: "پلتفرم هوشمند ساخت‌وساز",
      title: "مصالح ساختمانی،\nابزار و خدمات یکجا",
      subtitle:
        "ارتباط مستقیم کارفرما، پیمانکار و تأمین‌کننده. سفارش مصالح، مدیریت پروژه و تأمین سریع با بهترین قیمت.",
      ctaPrimary: "شروع کنید",
      ctaSecondary: "مشاهده مصالح",
    },
    stats: {
      materials: "نوع مصالح",
      suppliers: "تأمین‌کننده",
      projects: "پروژه فعال",
      satisfaction: "رضایت کاربران",
    },
    portals: {
      title: "ورود به پنل‌ها",
      subtitle: "هر نقش، پنل اختصاصی خودش را دارد",
      client: {
        title: "کارفرما",
        desc: "مدیریت پروژه‌ها، سفارش مصالح و نظارت بر پیشرفت کار",
        cta: "ورود به پنل کارفرما",
      },
      contractor: {
        title: "پیمانکار",
        desc: "دریافت پروژه، مدیریت تیم و سفارش ابزار و مصالح",
        cta: "ورود به پنل پیمانکار",
      },
      supplier: {
        title: "تأمین‌کننده",
        desc: "عرضه مصالح و ابزار، مدیریت موجودی و سفارش‌ها",
        cta: "ورود به پنل تأمین‌کننده",
      },
    },
    materials: {
      title: "مصالح و ابزار ساختمانی",
      subtitle: "از بتن و سیمان تا داربست و ابزار دقیق",
      items: [
        { name: "بتن", desc: "مقاوم و بادوام برای سازه‌ها" },
        { name: "سیمان", desc: "چسباننده اصلی مصالح" },
        { name: "شن و ماسه", desc: "پایه بتن و ملات" },
        { name: "آجر و سنگ", desc: "دیوار و فونداسیون" },
        { name: "فولاد", desc: "مقاومت کششی سازه" },
        { name: "چوب", desc: "قالب‌بندی و اسکلت" },
        { name: "ملات و گچ", desc: "نمای داخلی و اتصال" },
        { name: "کاشی و رنگ", desc: "پوشش و زیبایی" },
        { name: "لوله و تیر", desc: "تأسیسات و سازه" },
        { name: "داربست", desc: "دسترسی ایمن در ارتفاع" },
        { name: "ابزار دستی", desc: "چکش، بیل، ماله و تراز" },
        { name: "ابزار برقی", desc: "دریل و تجهیزات پیشرفته" },
      ],
    },
    features: {
      title: "چرا ساخت‌پلت؟",
      items: [
        {
          title: "سفارش سریع",
          desc: "از کاتالوگ مصالح تا تحویل در محل پروژه در کوتاه‌ترین زمان",
        },
        {
          title: "قیمت شفاف",
          desc: "مقایسه قیمت تأمین‌کنندگان و انتخاب بهترین گزینه",
        },
        {
          title: "مدیریت یکپارچه",
          desc: "کارفرما، پیمانکار و تأمین‌کننده در یک پلتفرم هماهنگ",
        },
        {
          title: "کیفیت تضمینی",
          desc: "مصالح استاندارد و تأمین‌کنندگان تأییدشده",
        },
      ],
    },
    cta: {
      title: "پروژه‌ای در ذهن دارید؟",
      subtitle: "همین حالا ثبت‌نام کنید و به شبکه ساخت‌وساز متصل شوید",
      button: "ثبت‌نام رایگان",
    },
    footer: {
      rights: "© ۱۴۰۵ ساخت‌پلت. تمامی حقوق محفوظ است.",
      privacy: "حریم خصوصی",
      terms: "قوانین استفاده",
    },
  },
  en: {
    brand: "SakhtPlat",
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      login: "Login",
    },
    hero: {
      badge: "Smart Construction Platform",
      title: "Materials, Tools\n& Services in One Place",
      subtitle:
        "Direct connection between clients, contractors and suppliers. Order materials, manage projects and get fast supply at the best price.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Browse Materials",
    },
    stats: {
      materials: "Material Types",
      suppliers: "Suppliers",
      projects: "Active Projects",
      satisfaction: "User Satisfaction",
    },
    portals: {
      title: "Enter Your Panel",
      subtitle: "Each role has its own dedicated dashboard",
      client: {
        title: "Client",
        desc: "Manage projects, order materials and track progress",
        cta: "Client Panel",
      },
      contractor: {
        title: "Contractor",
        desc: "Receive projects, manage teams and order tools & materials",
        cta: "Contractor Panel",
      },
      supplier: {
        title: "Supplier",
        desc: "Supply materials & tools, manage inventory and orders",
        cta: "Supplier Panel",
      },
    },
    materials: {
      title: "Construction Materials & Tools",
      subtitle: "From concrete and cement to scaffolding and precision tools",
      items: [
        { name: "Concrete", desc: "Strong & durable building material" },
        { name: "Cement", desc: "Binds all materials together" },
        { name: "Sand & Gravel", desc: "Base for concrete and mortar" },
        { name: "Brick & Stone", desc: "Walls and foundations" },
        { name: "Steel", desc: "Tensile strength in structures" },
        { name: "Wood", desc: "Formwork and frames" },
        { name: "Mortar & Plaster", desc: "Finishing and bonding" },
        { name: "Tiles & Paint", desc: "Flooring and decoration" },
        { name: "Beam & Pipe", desc: "Structure and utilities" },
        { name: "Scaffolding", desc: "Safe support at height" },
        { name: "Hand Tools", desc: "Hammer, shovel, trowel & level" },
        { name: "Power Tools", desc: "Drill machines and advanced gear" },
      ],
    },
    features: {
      title: "Why SakhtPlat?",
      items: [
        {
          title: "Fast Ordering",
          desc: "From material catalog to on-site delivery in record time",
        },
        {
          title: "Transparent Pricing",
          desc: "Compare suppliers and choose the best option",
        },
        {
          title: "Unified Management",
          desc: "Clients, contractors and suppliers coordinated in one platform",
        },
        {
          title: "Guaranteed Quality",
          desc: "Standard materials and verified suppliers",
        },
      ],
    },
    cta: {
      title: "Have a project in mind?",
      subtitle: "Sign up now and connect to the construction network",
      button: "Free Sign Up",
    },
    footer: {
      rights: "© 2026 SakhtPlat. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
    },
  },
};

// ─────────────────────────────────────────────
// Icons (inline SVG – no external deps)
// ─────────────────────────────────────────────
const Icons = {
  menu: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  close: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  arrow: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  ),
  user: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  hardHat: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  truck: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  check: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  globe: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
};

// Material emoji/icons for cards
const materialIcons = [
  "🧱", "📦", "🏜️", "🪨", "⚙️", "🪵",
  "🪣", "🎨", "🔩", "🏗️", "🔨", "🛠️",
];

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
export default function LandingPage() {
  const [locale, setLocale] = useState<Locale>("fa");
  const [dir, setDir] = useState<Direction>("rtl");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[locale];

  // Sync direction with locale
  useEffect(() => {
    setDir(locale === "fa" ? "rtl" : "ltr");
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "fa" ? "rtl" : "ltr";
  }, [locale]);

  // Scroll effect for navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLocale = () => {
    setLocale((prev) => (prev === "fa" ? "en" : "fa"));
  };

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.projects, href: "#materials" },
    { label: t.nav.about, href: "#features" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <div dir={dir} className="min-h-screen bg-stone-50 text-stone-900 font-sans antialiased">
      {/* ── Navbar ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-amber-600 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:bg-amber-700 transition-colors">
                S
              </div>
              <span className="text-xl font-bold tracking-tight text-stone-800">
                {t.brand}
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-stone-600 hover:text-amber-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <button
                onClick={toggleLocale}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium text-stone-600 hover:bg-stone-100 transition-colors"
                aria-label="Toggle language"
              >
                {Icons.globe}
                <span>{locale === "fa" ? "EN" : "FA"}</span>
              </button>

              {/* Login CTA (desktop) */}
              <a
                href="#portals"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-600 text-white text-sm font-semibold hover:bg-amber-700 shadow-md hover:shadow-lg transition-all"
              >
                {t.nav.login}
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-stone-600 hover:bg-stone-100"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? Icons.close : Icons.menu}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-stone-200 shadow-lg">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-stone-700 font-medium hover:bg-amber-50 hover:text-amber-800 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#portals"
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-2 px-4 py-3 rounded-lg bg-amber-600 text-white font-semibold text-center"
              >
                {t.nav.login}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section id="home" className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-stone-50 to-orange-50" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div className="text-center lg:text-start space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                {t.hero.badge}
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-stone-900 whitespace-pre-line">
                {t.hero.title}
              </h1>

              <p className="text-lg text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#portals"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-amber-600 text-white font-semibold shadow-lg shadow-amber-600/25 hover:bg-amber-700 hover:shadow-xl transition-all"
                >
                  {t.hero.ctaPrimary}
                  <span className={dir === "rtl" ? "rotate-180" : ""}>{Icons.arrow}</span>
                </a>
                <a
                  href="#materials"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-stone-300 text-stone-700 font-semibold hover:border-amber-600 hover:text-amber-700 transition-all"
                >
                  {t.hero.ctaSecondary}
                </a>
              </div>
            </div>

            {/* Visual – Materials collage */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-stone-300/50 aspect-[4/3] bg-gradient-to-br from-stone-200 to-amber-100">
                {/* Simulated materials grid */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-2">
                  {[
                    { emoji: "🧱", label: locale === "fa" ? "آجر" : "Brick", bg: "bg-orange-200" },
                    { emoji: "📦", label: locale === "fa" ? "سیمان" : "Cement", bg: "bg-stone-300" },
                    { emoji: "🏜️", label: locale === "fa" ? "ماسه" : "Sand", bg: "bg-amber-100" },
                    { emoji: "⚙️", label: locale === "fa" ? "فولاد" : "Steel", bg: "bg-slate-300" },
                    { emoji: "🪵", label: locale === "fa" ? "چوب" : "Wood", bg: "bg-amber-200" },
                    { emoji: "🪣", label: locale === "fa" ? "ملات" : "Mortar", bg: "bg-stone-200" },
                    { emoji: "🏗️", label: locale === "fa" ? "داربست" : "Scaffold", bg: "bg-yellow-100" },
                    { emoji: "🔨", label: locale === "fa" ? "ابزار" : "Tools", bg: "bg-orange-100" },
                    { emoji: "🎨", label: locale === "fa" ? "رنگ" : "Paint", bg: "bg-red-100" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`${item.bg} rounded-lg flex flex-col items-center justify-center gap-1 hover:scale-105 transition-transform cursor-default`}
                    >
                      <span className="text-2xl sm:text-3xl">{item.emoji}</span>
                      <span className="text-[10px] sm:text-xs font-medium text-stone-700">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating card */}
              <div
                className={`absolute -bottom-4 ${dir === "rtl" ? "-left-4" : "-right-4"} bg-white rounded-xl shadow-xl p-4 border border-stone-100 max-w-[180px]`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-xl">
                    🏗️
                  </div>
                  <div>
                    <p className="text-xs text-stone-500 font-medium">
                      {locale === "fa" ? "پروژه فعال" : "Active Project"}
                    </p>
                    <p className="text-sm font-bold text-stone-800">
                      {locale === "fa" ? "برج تجاری" : "Commercial Tower"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { value: "350+", label: t.stats.materials },
              { value: "1.2K", label: t.stats.suppliers },
              { value: "850+", label: t.stats.projects },
              { value: "98%", label: t.stats.satisfaction },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-4 rounded-2xl bg-white/80 backdrop-blur border border-stone-100 shadow-sm"
              >
                <p className="text-3xl lg:text-4xl font-extrabold text-amber-700">{stat.value}</p>
                <p className="mt-1 text-sm text-stone-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portals (Client / Contractor / Supplier) ── */}
      <section id="portals" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              {t.portals.title}
            </h2>
            <p className="mt-3 text-stone-600">{t.portals.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Client */}
            <div className="group relative rounded-2xl border border-stone-200 bg-gradient-to-b from-white to-stone-50 p-8 hover:border-amber-300 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {Icons.user}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">{t.portals.client.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">{t.portals.client.desc}</p>
              <a
                href="/panel/client"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 group-hover:gap-3 transition-all"
              >
                {t.portals.client.cta}
                <span className={dir === "rtl" ? "rotate-180" : ""}>{Icons.arrow}</span>
              </a>
            </div>

            {/* Contractor */}
            <div className="group relative rounded-2xl border border-stone-200 bg-gradient-to-b from-white to-amber-50/50 p-8 hover:border-amber-400 hover:shadow-xl transition-all duration-300 ring-2 ring-amber-200/50">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-amber-600 text-white text-xs font-semibold">
                {locale === "fa" ? "محبوب" : "Popular"}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {Icons.hardHat}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">{t.portals.contractor.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">{t.portals.contractor.desc}</p>
              <a
                href="/panel/contractor"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-900 group-hover:gap-3 transition-all"
              >
                {t.portals.contractor.cta}
                <span className={dir === "rtl" ? "rotate-180" : ""}>{Icons.arrow}</span>
              </a>
            </div>

            {/* Supplier */}
            <div className="group relative rounded-2xl border border-stone-200 bg-gradient-to-b from-white to-stone-50 p-8 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {Icons.truck}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">{t.portals.supplier.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">{t.portals.supplier.desc}</p>
              <a
                href="/panel/supplier"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-900 group-hover:gap-3 transition-all"
              >
                {t.portals.supplier.cta}
                <span className={dir === "rtl" ? "rotate-180" : ""}>{Icons.arrow}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Materials Grid ── */}
      <section id="materials" className="py-16 lg:py-24 bg-stone-100/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              {t.materials.title}
            </h2>
            <p className="mt-3 text-stone-600">{t.materials.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {t.materials.items.map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-5 border border-stone-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                  {materialIcons[i]}
                </div>
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">{item.name}</h3>
                <p className="mt-1 text-xs sm:text-sm text-stone-500 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
              {t.features.title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.features.items.map((feat, i) => (
              <div
                key={i}
                className="relative p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:bg-amber-50/50 hover:border-amber-200 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center mb-4">
                  {Icons.check}
                </div>
                <h3 className="font-bold text-stone-900 mb-2">{feat.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section id="contact" className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-stone-800 via-stone-900 to-amber-950 px-8 py-14 lg:px-16 lg:py-20 text-center">
            {/* decorative circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl" />

            <h2 className="relative text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.cta.title}
            </h2>
            <p className="relative mt-4 text-stone-300 max-w-lg mx-auto">{t.cta.subtitle}</p>
            <a
              href="#portals"
              className="relative inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-full bg-amber-500 text-stone-900 font-bold shadow-lg hover:bg-amber-400 transition-colors"
            >
              {t.cta.button}
              <span className={dir === "rtl" ? "rotate-180" : ""}>{Icons.arrow}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-stone-200 bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center text-white font-bold text-sm">
                S
              </div>
              <span className="font-bold text-stone-800">{t.brand}</span>
            </div>

            <p className="text-sm text-stone-500">{t.footer.rights}</p>

            <div className="flex items-center gap-6 text-sm text-stone-500">
              <a href="#" className="hover:text-amber-700 transition-colors">
                {t.footer.privacy}
              </a>
              <a href="#" className="hover:text-amber-700 transition-colors">
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

