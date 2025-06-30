import { execSync } from "child_process";
const gitCommitHash = execSync('git rev-parse --short HEAD').toString().trim();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GIT_COMMIT_HASH: gitCommitHash,
  },
  images: {
    remotePatterns: 
      [new URL("https://storage.googleapis.com/assets.hyperfoundation.xyz/hyperion-foundation-logo-512.png"), new URL("https://dummyimage.com/720x600")],
  }
};

export default nextConfig;
