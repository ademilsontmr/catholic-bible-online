/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://catholicbibleonline.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin/*', '/api/*', '/_next/*'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 50000, // Increased to fit all pages in one sitemap
  transform: async (config, path) => {
    // Custom priority and changefreq for different page types
    let priority = config.priority;
    let changefreq = config.changefreq;

    // Homepage gets highest priority
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }
    
    // Bible index gets high priority
    else if (path === '/bible') {
      priority = 0.9;
      changefreq = 'weekly';
    }
    
    // Book pages get high priority
    else if (path.match(/^\/bible\/[^\/]+$/)) {
      priority = 0.8;
      changefreq = 'weekly';
    }
    
    // Chapter pages get medium-high priority
    else if (path.match(/^\/bible\/[^\/]+\/\d+$/)) {
      priority = 0.7;
      changefreq = 'monthly';
    }
    
    // Other pages get medium priority
    else if (['/prayers', '/novenas', '/saints'].includes(path)) {
      priority = 0.6;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/'],
      },
    ],
    additionalSitemaps: [],
  },
}; 