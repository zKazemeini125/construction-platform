import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@myorg/ui","@myorg/ui-kit", "@myorg/i18n-helpers"],
  experimental: {
    optimizePackageImports: ["@myorg/ui"],
  },
  async rewrites() {
     const ADMIN_URL = process.env.ADMIN_URL ?? "http://localhost:3001";

    return [
      { source: "/:locale(fa|en)/admin", destination: `${process.env.ADMIN_URL}/:locale/admin` },
      { source: "/admin/:path*", destination: `${ADMIN_URL}/admin/:path*` },
      { source: "/:locale(fa|en)/portal/:path*", destination: `${process.env.PORTAL_URL}/:locale/portal/:path*` },
      { source: "/:locale(fa|en)/supplier/:path*", destination: `${process.env.SUPPLIER_URL}/:locale/supplier/:path*` },
    ];
  },
};


export default nextConfig;