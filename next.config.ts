import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryBasePath = "/roudoku-grader";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? repositoryBasePath : undefined,
  assetPrefix: isGitHubPages ? repositoryBasePath : undefined,
  trailingSlash: isGitHubPages,
};

export default nextConfig;
