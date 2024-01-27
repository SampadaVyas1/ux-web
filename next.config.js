const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {},
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
  },
  images: {
    unoptimized: true,
  },
  transpilePackages: ["react-tilt"],
  output: "export",
  swcMinify: true,
  distDir: "build",
};

module.exports = nextConfig;
