/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer')

const nextConfig = withContentlayer({
  env: {
    SITE_URL: 'https://docsum.vercel.app',
    GITHUB_URL: 'https://github.com/ivenuss/docsum',
  },

  async redirects() {
    return require('./redirects.json')
  },

  webpack: (config, { dev, isServer, ...options }) => {
    return config
  },
})

module.exports = nextConfig
