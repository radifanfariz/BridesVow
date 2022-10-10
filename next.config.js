/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['192.168.100.40:3000','flowbite.com'],
  }
}

module.exports = nextConfig
