const fs = require('fs');
const path = require('path');

// All devotional slugs with their number of days
const devotionals = [
  // Classic Catholic Devotionals
  { slug: 'imitation-of-christ', days: 7 },
  { slug: 'story-of-a-soul', days: 7 },
  { slug: 'introduction-devout-life', days: 7 },
  { slug: 'confessions-augustine', days: 7 },
  { slug: 'dark-night-soul', days: 7 },
  { slug: 'interior-castle', days: 7 },
  
  // Saints for Today
  { slug: 'saint-of-the-day', days: 7 },
  { slug: 'padre-pio-daily', days: 7 },
  { slug: 'mother-teresa-daily', days: 7 },
  { slug: 'john-paul-ii-daily', days: 7 },
  { slug: 'fulton-sheen-daily', days: 7 },
  
  // Prayer & Meditation
  { slug: 'daily-examen', days: 7 },
  { slug: 'lectio-divina', days: 7 },
  { slug: 'divine-office-reflections', days: 7 },
  { slug: 'rosary-meditations', days: 7 },
  { slug: 'divine-mercy-reflections', days: 7 },
  
  // Scripture & Faith
  { slug: 'gospel-of-the-day', days: 7 },
  { slug: 'psalms-daily', days: 7 },
  { slug: 'catechism-daily', days: 7 },
  { slug: 'church-fathers-daily', days: 7 },
  { slug: 'papal-teachings', days: 7 },
  
  // Family & Marriage
  { slug: 'family-rosary', days: 7 },
  { slug: 'marriage-moments', days: 7 },
  { slug: 'parenting-saints', days: 7 },
  { slug: 'theology-of-body', days: 7 },
  
  // Liturgical Seasons
  { slug: 'advent-daily', days: 7 },
  { slug: 'lenten-daily', days: 7 },
  { slug: 'easter-daily', days: 7 },
  { slug: 'marian-months', days: 7 },
  
  // Vocations & Ministry
  { slug: 'priests-daily', days: 7 },
  { slug: 'religious-life', days: 7 },
  { slug: 'discernment-journey', days: 7 },
  
  // Healing & Hope
  { slug: 'grief-comfort', days: 7 },
  { slug: 'anxiety-peace', days: 7 },
  { slug: 'suffering-meaning', days: 7 },
  { slug: 'addiction-recovery', days: 7 },
];

const siteUrl = 'https://catholicbibleonline.com';
const lastmod = new Date().toISOString();

function generateDevotionalUrls() {
  let urls = [];
  
  // Main devotionals page
  urls.push({
    loc: `${siteUrl}/devotionals/`,
    changefreq: 'daily',
    priority: '0.8'
  });
  
  // Each devotional main page and day pages
  devotionals.forEach(devotional => {
    // Devotional main page
    urls.push({
      loc: `${siteUrl}/devotionals/${devotional.slug}/`,
      changefreq: 'weekly',
      priority: '0.7'
    });
    
    // Each day page
    for (let day = 1; day <= devotional.days; day++) {
      urls.push({
        loc: `${siteUrl}/devotionals/${devotional.slug}/${day}/`,
        changefreq: 'monthly',
        priority: '0.6'
      });
    }
  });
  
  return urls;
}

function updateSitemap() {
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  
  // Read existing sitemap
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');
  
  // Check if devotionals already exist
  if (sitemap.includes('/devotionals/')) {
    console.log('Devotionals already in sitemap. Removing old entries...');
    // Remove existing devotional entries
    sitemap = sitemap.replace(/<url><loc>https:\/\/catholicbibleonline\.com\/devotionals\/[^<]*<\/loc>[^<]*<\/url>\n?/g, '');
  }
  
  // Generate new devotional URLs
  const devotionalUrls = generateDevotionalUrls();
  
  // Create URL entries
  const urlEntries = devotionalUrls.map(url => 
    `<url><loc>${url.loc}</loc><lastmod>${lastmod}</lastmod><changefreq>${url.changefreq}</changefreq><priority>${url.priority}</priority></url>`
  ).join('\n');
  
  // Insert before closing </urlset>
  sitemap = sitemap.replace('</urlset>', `${urlEntries}\n</urlset>`);
  
  // Write updated sitemap
  fs.writeFileSync(sitemapPath, sitemap);
  
  console.log(`✅ Sitemap updated with ${devotionalUrls.length} devotional URLs:`);
  console.log(`   - 1 main devotionals page`);
  console.log(`   - ${devotionals.length} devotional pages`);
  console.log(`   - ${devotionals.length * 7} daily reading pages`);
  console.log(`   Total: ${devotionalUrls.length} new URLs`);
}

updateSitemap();
