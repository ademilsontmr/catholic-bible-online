const fs = require('fs');
const path = require('path');

// All devotional slugs (no more individual day pages)
const devotionals = [
  // Classic Catholic Devotionals
  'imitation-of-christ',
  'story-of-a-soul',
  'introduction-devout-life',
  'confessions-augustine',
  'dark-night-soul',
  'interior-castle',
  
  // Saints for Today
  'saint-of-the-day',
  'padre-pio-daily',
  'mother-teresa-daily',
  'john-paul-ii-daily',
  'fulton-sheen-daily',
  
  // Prayer & Meditation
  'daily-examen',
  'lectio-divina',
  'divine-office-reflections',
  'rosary-meditations',
  'divine-mercy-reflections',
  
  // Scripture & Faith
  'gospel-of-the-day',
  'psalms-daily',
  'catechism-daily',
  'church-fathers-daily',
  'papal-teachings',
  
  // Family & Marriage
  'family-rosary',
  'marriage-moments',
  'parenting-saints',
  'theology-of-body',
  
  // Liturgical Seasons
  'advent-daily',
  'lenten-daily',
  'easter-daily',
  'marian-months',
  
  // Vocations & Ministry
  'priests-daily',
  'religious-life',
  'discernment-journey',
  
  // Healing & Hope
  'grief-comfort',
  'anxiety-peace',
  'suffering-meaning',
  'addiction-recovery',
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
  
  // Each devotional main page (all days loaded via dropdown, no separate day pages)
  devotionals.forEach(slug => {
    urls.push({
      loc: `${siteUrl}/devotionals/${slug}/`,
      changefreq: 'weekly',
      priority: '0.7'
    });
  });
  
  return urls;
}

function updateSitemap() {
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  
  // Read existing sitemap
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');
  
  // Remove existing devotional entries (including day pages)
  if (sitemap.includes('/devotionals/')) {
    console.log('Removing old devotional entries from sitemap...');
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
  console.log(`   Total: ${devotionalUrls.length} URLs (reduced from 289)`);
}

updateSitemap();
