/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://docs-rosy-three.vercel.app',
  generateRobotsTxt: true,
}
