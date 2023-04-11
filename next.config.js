/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "export",
  basePath: "/nextjs13.3",
  assetPrefix: "/nextjs13.3/"
}

module.exports = nextConfig
