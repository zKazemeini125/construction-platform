(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push(["chunks/[root-of-the-server]__20g0j_h._.js",
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[project]/apps/web/i18n-config.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLocale",
    ()=>defaultLocale,
    "getDictionary",
    ()=>getDictionary,
    "locales",
    ()=>locales
]);
const locales = [
    "fa",
    "en"
];
const defaultLocale = "fa";
const dictionaries = {
    fa: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/apps/web/messages/fa.json.[json].cjs [middleware-edge] (ecmascript)")).then((m)=>m.default),
    en: ()=>Promise.resolve().then(()=>__turbopack_context__.i("[project]/apps/web/messages/en.json.[json].cjs [middleware-edge] (ecmascript)")).then((m)=>m.default)
};
function getDictionary(locale) {
    return dictionaries[locale]();
}
}),
"[project]/apps/web/messages/en.json.[json].cjs [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "header": {
        "title": "Construction Marketplace",
        "searchPlaceholder": "Search projects or materials...",
        "searchButton": "Search",
        "notificationsLabel": "Notifications",
        "menuLabel": "Menu"
    },
    "sidebar": {
        "dashboard": "Dashboard",
        "projects": "Projects",
        "activeProjects": "Active Projects",
        "archivedProjects": "Archived Projects",
        "newProject": "New Project",
        "suppliers": "Suppliers",
        "listSuppliers": "Supplier List",
        "newSupplier": "New Supplier",
        "materials": "Materials",
        "listMaterials": "Material List",
        "categoriesMaterials": "Material Categories",
        "inventory": "Inventory",
        "requests": "My Requests",
        "notifications": "Notifications",
        "settings": "Settings",
        "logout": "Log Out"
    },
    "projectForm": {
        "pageTitle": "Register New Project",
        "pageSubtitle": "Enter your project details so suppliers and contractors can find it",
        "sectionBasics": "Basic Information",
        "sectionScope": "Scope & Budget",
        "sectionSchedule": "Schedule",
        "name": "Project Name",
        "namePlaceholder": "e.g. Facade renovation of Valiasr office building",
        "category": "Project Category",
        "categoryPlaceholder": "Select",
        "categoryResidential": "Residential Building",
        "categoryCommercial": "Commercial Building",
        "categoryIndustrial": "Industrial Building",
        "categoryInfrastructure": "Infrastructure",
        "categoryRenovation": "Renovation",
        "address": "Project Address / Location",
        "addressPlaceholder": "Province, city, district",
        "area": "Area",
        "areaUnit": "sq. meters",
        "budget": "Estimated Budget",
        "budgetUnit": "Toman",
        "priority": "Priority",
        "priorityLow": "Low",
        "priorityMedium": "Medium",
        "priorityHigh": "High",
        "priorityUrgent": "Urgent",
        "startDate": "Start Date",
        "endDate": "Estimated End Date",
        "description": "Project Description",
        "descriptionPlaceholder": "Describe details, required materials, special considerations...",
        "submit": "Register Project",
        "cancel": "Cancel",
        "submitting": "Registering...",
        "successMessage": "Project registered successfully.",
        "errorRequired": "This field is required",
        "errorEndBeforeStart": "End date cannot be before start date"
    },
    "searchBar": {
        "placeholder": "Search something...",
        "noResultsText": "No results found.",
        "mobileButtonLabel": "Search"
    }
};
}),
"[project]/apps/web/messages/fa.json.[json].cjs [middleware-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "header": {
        "title": "پلتفرم بازار ساختمانی",
        "searchPlaceholder": "جستجو در پروژه‌ها یا مواد...",
        "searchButton": "جستجو",
        "notificationsLabel": "اطلاعیه‌ها",
        "menuLabel": "منو"
    },
    "sidebar": {
        "dashboard": "داشبورد",
        "projects": "پروژه‌های من",
        "activeProjects": "پروژه‌های فعال",
        "archivedProjects": "پروژه‌های آرشیو شده",
        "newProject": "پروژه جدید",
        "suppliers": "تامین‌کنندگان",
        "listSuppliers": "لیست تامین‌کنندگان",
        "newSupplier": "افزودن تامین‌کننده",
        "materials": "مواد",
        "listMaterials": "لیست مواد",
        "categoriesMaterials": "دسته‌بندی مواد",
        "inventory": "موجودی انبار",
        "requests": "درخواست‌های من",
        "notifications": "اطلاعیه‌ها",
        "settings": "تنظیمات",
        "logout": "خروج از حساب"
    },
    "projectForm": {
        "pageTitle": "ثبت پروژه جدید",
        "pageSubtitle": "اطلاعات پروژه‌ی خودتون رو وارد کنید تا برای تامین‌کنندگان و پیمانکاران قابل مشاهده بشه",
        "sectionBasics": "اطلاعات پایه",
        "sectionScope": "دامنه و بودجه",
        "sectionSchedule": "زمان‌بندی",
        "name": "نام پروژه",
        "namePlaceholder": "مثلاً: بازسازی نمای ساختمان اداری ولیعصر",
        "category": "دسته‌بندی پروژه",
        "categoryPlaceholder": "انتخاب کنید",
        "categoryResidential": "ساختمان مسکونی",
        "categoryCommercial": "ساختمان تجاری",
        "categoryIndustrial": "ساختمان صنعتی",
        "categoryInfrastructure": "زیرساخت و عمرانی",
        "categoryRenovation": "تعمیر و بازسازی",
        "address": "آدرس / موقعیت پروژه",
        "addressPlaceholder": "استان، شهر، منطقه",
        "area": "متراژ",
        "areaUnit": "متر مربع",
        "budget": "بودجه تخمینی",
        "budgetUnit": "تومان",
        "priority": "اولویت",
        "priorityLow": "کم",
        "priorityMedium": "متوسط",
        "priorityHigh": "بالا",
        "priorityUrgent": "فوری",
        "startDate": "تاریخ شروع",
        "endDate": "تاریخ پایان تخمینی",
        "description": "توضیحات پروژه",
        "descriptionPlaceholder": "جزئیات، مصالح موردنیاز، ملاحظات خاص پروژه رو بنویسید...",
        "submit": "ثبت پروژه",
        "cancel": "انصراف",
        "submitting": "در حال ثبت...",
        "successMessage": "پروژه با موفقیت ثبت شد.",
        "errorRequired": "این فیلد الزامیه",
        "errorEndBeforeStart": "تاریخ پایان نمی‌تونه قبل از تاریخ شروع باشه"
    },
    "searchBar": {
        "placeholder": "جستجو...",
        "noResultsText": "نتیجه‌ای یافت نشد.",
        "mobileButtonLabel": "جستجو"
    }
};
}),
"[project]/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$i18n$2d$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/i18n-config.ts [middleware-edge] (ecmascript)");
;
;
function middleware(request) {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$i18n$2d$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["locales"].some((locale)=>pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);
    if (pathnameHasLocale) return;
    request.nextUrl.pathname = `/${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$i18n$2d$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defaultLocale"]}${pathname}`;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(request.nextUrl);
}
const config = {
    matcher: [
        '/((?!api|_next|_vercel|.*\\..*).*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__20g0j_h._.js.map