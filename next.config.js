/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: ".",
};

module.exports = nextConfig;

// next.config.js
const withSvgr = require("@newhighsco/next-plugin-svgr");
module.exports = withSvgr();
