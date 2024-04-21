/** @type {import('next').NextConfig} */


const REPO_PATH = 'ro-verse-monster-db'

const nextConfig = {
  output: 'export',
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  images: { unoptimized: true }
};


if (process.env.NODE_ENV !== "development") {
  const assetPrefix = `/${REPO_PATH}/`
  const basePath = `/${REPO_PATH}`
  nextConfig.assetPrefix = assetPrefix
  nextConfig.basePath = basePath
}

export default nextConfig;
