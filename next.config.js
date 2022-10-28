/** @type {import('next').NextConfig} **/
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['localhost','flowbite.com'],
  },
  async rewrites() {
    return [
      {
        source:'/:slug',
        destination: '/post/:slug',
      },
      {
        source:'/preview/:slug',
        destination: '/preview/:slug',
      }
    ]
  }
}

module.exports = nextConfig
