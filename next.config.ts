import type { NextConfig } from "next";

// When deploying to GitHub Pages (project site at /eurodent) the workflow sets
// GITHUB_PAGES=true. Local dev stays at the root so the preview works normally.
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "eurodent";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isPages ? `/${repo}` : undefined,
  assetPrefix: isPages ? `/${repo}/` : undefined,
};

export default nextConfig;
