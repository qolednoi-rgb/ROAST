/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This makes it work as a single static HTML file
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true }
};

export default nextConfig;
