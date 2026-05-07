/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://nemo-blog.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: './public',
  // Don't let next-sitemap overwrite our hand-curated sitemap
  // We manage sitemap.xml manually with only real article URLs
  transform: async () => {
    // Return empty array - we manage sitemap.xml ourselves
    return []
  },
}