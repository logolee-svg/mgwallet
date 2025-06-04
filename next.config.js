/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mobile-first configuration
  images: {
    unoptimized: true
  },
  // Ensure proper routing for all pages
  trailingSlash: false,
}

module.exports = nextConfig 