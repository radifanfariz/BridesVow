/** @type {import('next').NextConfig} **/
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['localhost','flowbite.com','1c9c-2001-448a-1069-1c33-bde2-cfd7-7451-18fa.ap.ngrok.io'],
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
