import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/admin",
  transpilePackages: ["@myorg/ui", "@myorg/ui-kit", "@myorg/i18n-helpers"],

  experimental: {
    optimizePackageImports: ["@myorg/ui"],
  },

  async redirects() {
  return [
    {
      source: '/',
      destination: '/admin',
      basePath: false, // مهم: چون خود / با basePath match نمیشه
      permanent: false,
    },
  ];
}
};

export default nextConfig;
