/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['localhost','47ee-104-28-194-247.ap.ngrok.io','flowbite.com'],
  }
}

const rewrites = async () => {
  return [
    {
      source:'/:path*',
      destination: '/post/:path*',
    }
  ]
}

module.exports = {nextConfig, rewrites}
