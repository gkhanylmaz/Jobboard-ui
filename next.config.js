/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["pixelprime.co"],
    disableStaticImages: true,
  },
};
