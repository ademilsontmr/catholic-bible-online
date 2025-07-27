/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://catholicbibleonline.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin/*'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
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
      alternateRefs: [
        {
          href: `${config.siteUrl}${path}`,
          hreflang: 'en',
        },
      ],
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/*', '/api/*', '/_next/*', '/404', '/500'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/*', '/api/*', '/_next/*'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/admin/*', '/api/*', '/_next/*'],
      },
    ],
    additionalSitemaps: [
      'https://catholicbibleonline.com/sitemap.xml',
    ],
    host: 'https://catholicbibleonline.com',
  },
  additionalPaths: async (config) => {
    const result = []
    
    // Add blog posts to sitemap
    const blogData = require('./src/data/blog.json')
    blogData.forEach((post) => {
      result.push({
        loc: `/blog/${post.slug}`,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: post.publishedAt,
      })
    })
    
    return result
  },
}; 