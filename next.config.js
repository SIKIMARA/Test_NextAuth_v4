/** @type {import('next').NextConfig} */
const nextConfig = {
  
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
