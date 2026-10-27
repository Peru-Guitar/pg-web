import type { NextConfig } from "next";
import pkg from "./package.json" with { type: "json" };

// Static export for GitHub Pages. Legacy URLs are redirected with static
// pages (see src/app/[slug] and src/app/c/[id]), since Pages has no server redirects.
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // App version (package.json), shown in the footer next to the copyright.
  env: { NEXT_PUBLIC_APP_VERSION: pkg.version },
  // The workspace folder above has its own lockfile; pin the root to this app.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
