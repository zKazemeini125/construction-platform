"use client";

import React, { useState, useEffect } from "react";

// ─────────────────────────────────────────────
// Design Tokens (from DESIGN SYSTEM)
// ─────────────────────────────────────────────
const colors = {
  primary: "#123B4A",
  primaryLight: "#2E6170",
  accent: "#D9822B",
  accentLight: "#F4B86A",
  success: "#238B6D",
  warning: "#D99A2B",
  danger: "#C94C4C",
  info: "#3B82A0",
  background: "#F6F8F9",
  surface: "#FFFFFF",
  surfaceSecondary: "#EEF2F3",
  border: "#D9E1E4",
  textPrimary: "#17262D",
  textSecondary: "#60717A",
  textMuted: "#8B999F",
} as const;

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
type Locale = "fa" | "en";
type Direction = "rtl" | "ltr";
type Role = "admin" | "contractor" | "supplier";

interface Translations {
  brand: string;
  brandSub: string;
  title: string;
  subtitle: string;
  roles: {
    admin: { label: string; desc: string };
    contractor: { label: string; desc: string };
    supplier: { label: string; desc: string };
  };
  form: {
    email: string;
    emailPlaceholder: string;
    password: string;
    passwordPlaceholder: string;
    remember: string;
    forgot: string;
    submit: string;
    submitting: string;
    noAccount: string;
    register: string;
  };
  errors: {
    required: string;
    invalidEmail: string;
    shortPassword: string;
  };
  footer: string;
}

// ─────────────────────────────────────────────
// Translations
// ─────────────────────────────────────────────
const translations: Record<Locale, Translations> = {
  fa: {
    brand: "ساخت‌پلت",
    brandSub: "پلتفرم هوشمند ساخت‌وساز",
    title: "ورود به سیستم",
    subtitle: "نقش خود را انتخاب کنید و وارد پنل شوید",
    roles: {
      admin: {
        label: "ادمین",
        desc: "مدیریت کامل سیستم و کاربران",
      },
      contractor: {
        label: "پیمانکار",
        desc: "مدیریت پروژه‌ها و تیم اجرایی",
      },
      supplier: {
        label: "تأمین‌کننده",
        desc: "مدیریت موجودی و سفارش‌ها",
      },
    },
    form: {
      email: "ایمیل یا نام کاربری",
      emailPlaceholder: "example@sakhtplat.com",
      password: "رمز عبور",
      passwordPlaceholder: "رمز عبور خود را وارد کنید",
      remember: "مرا به خاطر بسپار",
      forgot: "رمز عبور را فراموش کرده‌اید؟",
      submit: "ورود",
      submitting: "در حال ورود...",
      noAccount: "حساب کاربری ندارید؟",
      register: "ثبت‌نام",
    },
    errors: {
      required: "این فیلد الزامی است",
      invalidEmail: "ایمیل معتبر وارد کنید",
      shortPassword: "رمز عبور باید حداقل ۶ کاراکتر باشد",
    },
    footer: "© ۱۴۰۵ ساخت‌پلت. تمامی حقوق محفوظ است.",
  },
  en: {
    brand: "SakhtPlat",
    brandSub: "Smart Construction Platform",
    title: "Sign in",
    subtitle: "Select your role and access your panel",
    roles: {
      admin: {
        label: "Admin",
        desc: "Full system & user management",
      },
      contractor: {
        label: "Contractor",
        desc: "Manage projects and teams",
      },
      supplier: {
        label: "Supplier",
        desc: "Inventory and order management",
      },
    },
    form: {
      email: "Email or username",
      emailPlaceholder: "example@sakhtplat.com",
      password: "Password",
      passwordPlaceholder: "Enter your password",
      remember: "Remember me",
      forgot: "Forgot password?",
      submit: "Sign in",
      submitting: "Signing in...",
      noAccount: "Don't have an account?",
      register: "Register",
    },
    errors: {
      required: "This field is required",
      invalidEmail: "Please enter a valid email",
      shortPassword: "Password must be at least 6 characters",
    },
    footer: "© 2026 SakhtPlat. All rights reserved.",
  },
};

// ─────────────────────────────────────────────
// Icons (inline SVG — no external deps)
// ─────────────────────────────────────────────
const Icons = {
  logo: (
    <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8">
      <rect width="32" height="32" rx="8" fill={colors.primary} />
      <path
        d="M8 22V10h4.2c2.4 0 3.9 1.3 3.9 3.3 0 1.3-.7 2.3-1.8 2.8L18 22h-3.2l-3.3-5.2H11V22H8zm3-7.8h1.1c1.1 0 1.7-.5 1.7-1.4s-.6-1.3-1.7-1.3H11v2.7zM20.5 22l-2.8-12h3.3l1.5 7.6L24 10h3.2L24.4 22h-3.9z"
        fill="white"
      />
    </svg>
  ),
  admin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6">
      <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 17l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  contractor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  supplier: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-5 h-5">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  eyeOff: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-5 h-5">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="1" y1="1" x2="23" y2="23" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-5 h-5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-5 h-5">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
      <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="12 5 19 12 12 19" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
      <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

// ─────────────────────────────────────────────
// Role config
// ─────────────────────────────────────────────
const roles: { id: Role; icon: React.ReactNode }[] = [
  { id: "admin", icon: Icons.admin },
  { id: "contractor", icon: Icons.contractor },
  { id: "supplier", icon: Icons.supplier },
];

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────
export default function LoginPage() {
  const [locale, setLocale] = useState<Locale>("fa");
  const [role, setRole] = useState<Role>("contractor");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [touched, setTouched] = useState<{ email?: boolean; password?: boolean }>({});

  const t = translations[locale];
  const dir: Direction = locale === "fa" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  const validate = () => {
    const next: typeof errors = {};
    if (!email.trim()) next.email = t.errors.required;
    else if (email.includes("@") && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = t.errors.invalidEmail;
    }
    if (!password) next.password = t.errors.required;
    else if (password.length < 6) next.password = t.errors.shortPassword;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    if (!validate()) return;

    setLoading(true);
    // Simulate auth — replace with real API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);

    // Role-based redirect targets (adjust to your routes)
    const targets: Record<Role, string> = {
      admin: "/admin",
      contractor: "/portal",
      supplier: "/supplier",
    };
    console.log(`Login as ${role} → ${targets[role]}`, { email, remember });
    // window.location.href = targets[role];
  };

  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3 text-[15px] outline-none transition-all duration-200 placeholder:text-[#8B999F]";
  const inputNormal = "border-[#D9E1E4] focus:border-[#2E6170] focus:ring-2 focus:ring-[#2E6170]/15";
  const inputError = "border-[#C94C4C] focus:border-[#C94C4C] focus:ring-2 focus:ring-[#C94C4C]/15";

  return (
    <div
      dir={dir}
      className="min-h-screen flex flex-col lg:flex-row"
      style={{ backgroundColor: colors.background, color: colors.textPrimary }}
    >
      {/* ── Left / Brand panel (desktop) ── */}
      <aside
        className="hidden lg:flex lg:w-[42%] xl:w-[40%] flex-col justify-between relative overflow-hidden p-10 xl:p-14"
        style={{ backgroundColor: colors.primary }}
      >
        {/* subtle geometric pattern */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div
          className="absolute -bottom-24 -end-24 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: colors.accent }}
        />
        <div
          className="absolute top-20 -start-16 w-56 h-56 rounded-full opacity-15 blur-3xl"
          style={{ backgroundColor: colors.primaryLight }}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-3">
            {Icons.logo}
            <div>
              <div className="text-white font-bold text-xl tracking-tight">{t.brand}</div>
              <div className="text-white/60 text-xs mt-0.5">{t.brandSub}</div>
            </div>
          </div>
        </div>

        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl xl:text-4xl font-bold text-white leading-tight tracking-tight">
            {locale === "fa" ? (
              <>
                مصالح، ابزار
                <br />و خدمات در یک‌جا
              </>
            ) : (
              <>
                Materials, tools
                <br />& services in one place
              </>
            )}
          </h2>
          <p className="text-white/70 text-base leading-relaxed max-w-sm">
            {locale === "fa"
              ? "ارتباط مستقیم کارفرما، پیمانکار و تأمین‌کننده. سفارش مصالح و مدیریت پروژه با بهترین قیمت."
              : "Direct connection between clients, contractors and suppliers. Order materials and manage projects at the best price."}
          </p>

          {/* role preview cards */}
          <div className="flex flex-col gap-3 pt-2">
            {roles.map((r) => (
              <div
                key={r.id}
                className="flex items-center gap-3 rounded-xl px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/10"
              >
                <div className="text-white/90">{r.icon}</div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.roles[r.id].label}</div>
                  <div className="text-white/55 text-xs">{t.roles[r.id].desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 text-white/40 text-sm">{t.footer}</div>
      </aside>

      {/* ── Right / Form panel ── */}
      <main className="flex-1 flex flex-col items-center justify-center px-5 py-10 sm:px-8 lg:px-12">
        {/* mobile brand */}
        <div className="lg:hidden flex items-center gap-2.5 mb-8 self-start w-full max-w-md mx-auto">
          {Icons.logo}
          <div>
            <div className="font-bold text-lg" style={{ color: colors.primary }}>
              {t.brand}
            </div>
            <div className="text-xs" style={{ color: colors.textMuted }}>
              {t.brandSub}
            </div>
          </div>
        </div>

        <div className="w-full max-w-md">
          {/* language switcher */}
          <div className="flex justify-end mb-6">
            <div
              className="inline-flex rounded-lg p-0.5 border"
              style={{ borderColor: colors.border, backgroundColor: colors.surfaceSecondary }}
            >
              {(["fa", "en"] as Locale[]).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLocale(l)}
                  className="px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200"
                  style={{
                    backgroundColor: locale === l ? colors.surface : "transparent",
                    color: locale === l ? colors.primary : colors.textSecondary,
                    boxShadow: locale === l ? "0 1px 3px rgba(0,0,0,0.06)" : "none",
                  }}
                >
                  {l === "fa" ? "فارسی" : "English"}
                </button>
              ))}
            </div>
          </div>

          {/* heading */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-[1.75rem] font-bold tracking-tight" style={{ color: colors.textPrimary }}>
              {t.title}
            </h1>
            <p className="mt-1.5 text-[15px]" style={{ color: colors.textSecondary }}>
              {t.subtitle}
            </p>
          </div>

          {/* role selector */}
          <div className="grid grid-cols-3 gap-2.5 mb-8">
            {roles.map((r) => {
              const active = role === r.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setRole(r.id)}
                  className="relative flex flex-col items-center gap-2 rounded-xl border-2 px-2 py-3.5 transition-all duration-200"
                  style={{
                    borderColor: active ? colors.primary : colors.border,
                    backgroundColor: active ? `${colors.primary}08` : colors.surface,
                    boxShadow: active ? `0 0 0 1px ${colors.primary}` : "none",
                  }}
                >
                  {active && (
                    <span
                      className="absolute top-1.5 end-1.5 w-4 h-4 rounded-full flex items-center justify-center text-white"
                      style={{ backgroundColor: colors.primary }}
                    >
                      {Icons.check}
                    </span>
                  )}
                  <span style={{ color: active ? colors.primary : colors.textSecondary }}>{r.icon}</span>
                  <span
                    className="text-xs font-semibold leading-tight text-center"
                    style={{ color: active ? colors.primary : colors.textSecondary }}
                  >
                    {t.roles[r.id].label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* form */}
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1.5"
                style={{ color: colors.textPrimary }}
              >
                {t.form.email}
              </label>
              <div className="relative">
                <span
                  className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{
                    [dir === "rtl" ? "right" : "left"]: "14px",
                    color: colors.textMuted,
                  }}
                >
                  {Icons.mail}
                </span>
                <input
                  id="email"
                  type="text"
                  autoComplete="username"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (touched.email) validate();
                  }}
                  onBlur={() => setTouched((p) => ({ ...p, email: true }))}
                  placeholder={t.form.emailPlaceholder}
                  className={`${inputBase} ${errors.email && touched.email ? inputError : inputNormal}`}
                  style={{
                    [dir === "rtl" ? "paddingRight" : "paddingLeft"]: "44px",
                    color: colors.textPrimary,
                  }}
                />
              </div>
              {errors.email && touched.email && (
                <p className="mt-1.5 text-xs" style={{ color: colors.danger }}>
                  {errors.email}
                </p>
              )}
            </div>

            {/* password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1.5"
                style={{ color: colors.textPrimary }}
              >
                {t.form.password}
              </label>
              <div className="relative">
                <span
                  className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
                  style={{
                    [dir === "rtl" ? "right" : "left"]: "14px",
                    color: colors.textMuted,
                  }}
                >
                  {Icons.lock}
                </span>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (touched.password) validate();
                  }}
                  onBlur={() => setTouched((p) => ({ ...p, password: true }))}
                  placeholder={t.form.passwordPlaceholder}
                  className={`${inputBase} ${errors.password && touched.password ? inputError : inputNormal}`}
                  style={{
                    [dir === "rtl" ? "paddingRight" : "paddingLeft"]: "44px",
                    [dir === "rtl" ? "paddingLeft" : "paddingRight"]: "44px",
                    color: colors.textPrimary,
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute top-1/2 -translate-y-1/2 p-1 rounded-md transition-colors hover:bg-[#EEF2F3]"
                  style={{
                    [dir === "rtl" ? "left" : "right"]: "10px",
                    color: colors.textMuted,
                  }}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? Icons.eyeOff : Icons.eye}
                </button>
              </div>
              {errors.password && touched.password && (
                <p className="mt-1.5 text-xs" style={{ color: colors.danger }}>
                  {errors.password}
                </p>
              )}
            </div>

            {/* remember + forgot */}
            <div className="flex items-center justify-between gap-3">
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <span className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="peer sr-only"
                  />
                  <span
                    className="w-[18px] h-[18px] rounded-md border-2 flex items-center justify-center transition-all duration-150 peer-checked:border-transparent"
                    style={{
                      borderColor: remember ? colors.primary : colors.border,
                      backgroundColor: remember ? colors.primary : "transparent",
                    }}
                  >
                    {remember && <span className="text-white">{Icons.check}</span>}
                  </span>
                </span>
                <span className="text-sm" style={{ color: colors.textSecondary }}>
                  {t.form.remember}
                </span>
              </label>
              <a
                href="#"
                className="text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: colors.primaryLight }}
              >
                {t.form.forgot}
              </a>
            </div>

            {/* submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-[15px] font-semibold text-white transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                backgroundColor: loading ? colors.primaryLight : colors.primary,
                boxShadow: loading ? "none" : `0 4px 14px ${colors.primary}33`,
              }}
              onMouseEnter={(e) => {
                if (!loading) e.currentTarget.style.backgroundColor = colors.primaryLight;
              }}
              onMouseLeave={(e) => {
                if (!loading) e.currentTarget.style.backgroundColor = colors.primary;
              }}
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  {t.form.submitting}
                </>
              ) : (
                <>
                  {t.form.submit}
                  <span className={dir === "rtl" ? "rotate-180" : ""}>{Icons.arrow}</span>
                </>
              )}
            </button>
          </form>

          {/* register link */}
          <p className="mt-8 text-center text-sm" style={{ color: colors.textSecondary }}>
            {t.form.noAccount}{" "}
            <a
              href="#"
              className="font-semibold transition-colors hover:opacity-80"
              style={{ color: colors.accent }}
            >
              {t.form.register}
            </a>
          </p>
        </div>

        {/* mobile footer */}
        <p className="lg:hidden mt-10 text-xs text-center" style={{ color: colors.textMuted }}>
          {t.footer}
        </p>
      </main>
    </div>
  );
}
