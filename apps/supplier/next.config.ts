import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/supplier",
  transpilePackages: ["@myorg/ui","@myorg/ui-kit", "@myorg/i18n-helpers"],
  experimental: {
    optimizePackageImports: ["@myorg/ui"],
  },
};

export default nextConfig;