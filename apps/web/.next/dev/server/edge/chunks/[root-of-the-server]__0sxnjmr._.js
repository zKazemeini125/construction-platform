(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push(["chunks/[root-of-the-server]__0sxnjmr._.js",
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[project]/apps/i18n-config.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
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
    fa: ()=>Promise.resolve().then(()=>{
            const e = new Error("Cannot find module '@/messages/fa.json'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        }).then((m)=>m.default),
    en: ()=>Promise.resolve().then(()=>{
            const e = new Error("Cannot find module '@/messages/en.json'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        }).then((m)=>m.default)
};
function getDictionary(locale) {
    return dictionaries[locale]();
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$i18n$2d$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/i18n-config.ts [middleware-edge] (ecmascript)");
;
;
function middleware(request) {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$i18n$2d$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["locales"].some((locale)=>pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);
    if (pathnameHasLocale) return;
    request.nextUrl.pathname = `/${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$i18n$2d$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["defaultLocale"]}${pathname}`;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(request.nextUrl);
}
const config = {
    matcher: [
        '/((?!api|_next|_vercel|.*\\..*).*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__0sxnjmr._.js.map