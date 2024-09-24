/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["aceternity.com", "images.unsplash.com", "assets.aceternity.com"],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during build process
  },
};

export default nextConfig;