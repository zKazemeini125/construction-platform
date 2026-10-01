import type { NextConfig } from "next";

const ADMIN_URL = process.env.ADMIN_URL ?? "http://localhost:3001";
const PORTAL_URL = process.env.PORTAL_URL ?? "http://localhost:3002";
const SUPPLIER_URL = process.env.SUPPLIER_URL ?? "http://localhost:3003";

const nextConfig: NextConfig = {
  transpilePackages: ["@myorg/ui-kit", "@myorg/i18n-helpers"],

  async rewrites() {
    return [
      { source: "/admin/:path*", destination: `${ADMIN_URL}/admin/:path*` },
      { source: "/portal/:path*", destination: `${PORTAL_URL}/portal/:path*` },
      {
        source: "/supplier/:path*",
        destination: `${SUPPLIER_URL}/supplier/:path*`,
      },
    ];
  },
};

export default nextConfig;
