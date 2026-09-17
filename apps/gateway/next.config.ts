import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@myorg/ui", "@myorg/i18n-helpers"],
  experimental: {
    optimizePackageImports: ["@myorg/ui"],
  },
  async rewrites() {
    return [
      { source: "/:locale(fa|en)/admin", destination: `${process.env.ADMIN_URL}/:locale/admin` },
      { source: "/:locale(fa|en)/admin/:path*", destination: `${process.env.ADMIN_URL}/:locale/admin/:path*` },
      { source: "/:locale(fa|en)/portal/:path*", destination: `${process.env.PORTAL_URL}/:locale/portal/:path*` },
      { source: "/:locale(fa|en)/supplier/:path*", destination: `${process.env.SUPPLIER_URL}/:locale/supplier/:path*` },
    ];
  },
};

export default nextConfig;