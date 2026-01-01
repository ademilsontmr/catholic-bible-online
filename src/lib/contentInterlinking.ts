import blogData from '@/data/blog.json';
import { BlogPost } from '@/types/blog';

// CURATED LIST: Only these specific Catholic terms will be linked
// Each term maps directly to an article slug that exists in the blog
const CATHOLIC_TERM_TO_ARTICLE: { [term: string]: string } = {
  // Liturgical Seasons
  'lent': 'lent-2026-complete-guide-40-days-spiritual-transformation',
  'lenten': 'lent-2026-complete-guide-40-days-spiritual-transformation',
  'ash wednesday': 'lent-2026-complete-guide-40-days-spiritual-transformation',
  'stations of the cross': 'lent-2026-complete-guide-40-days-spiritual-transformation',
  'holy week': 'lent-2026-complete-guide-40-days-spiritual-transformation',
  
  // Saints
  'saint patrick': 'saint-patrick-day-2026-faith-history-celebration',
  'st. patrick': 'saint-patrick-day-2026-faith-history-celebration',
  'st patrick': 'saint-patrick-day-2026-faith-history-celebration',
  
  // Sacraments & Eucharist
  'eucharist': 'eucharistic-revival-guide-2026-rediscovering-real-presence',
  'eucharistic': 'eucharistic-revival-guide-2026-rediscovering-real-presence',
  'real presence': 'eucharistic-revival-guide-2026-rediscovering-real-presence',
  'eucharistic adoration': 'eucharistic-revival-guide-2026-rediscovering-real-presence',
  'adoration': 'eucharistic-revival-guide-2026-rediscovering-real-presence',
  'blessed sacrament': 'eucharistic-revival-guide-2026-rediscovering-real-presence',
  
  // Mental Health & Faith
  'mental health': 'catholic-faith-mental-health-2026-complete-guide',
  'spiritual wellness': 'catholic-faith-mental-health-2026-complete-guide',
  'anxiety': 'catholic-faith-mental-health-2026-complete-guide',
  'depression': 'catholic-faith-mental-health-2026-complete-guide',
  
  // Catholic Social Teaching
  'catholic social teaching': 'catholic-social-teaching-guides-ethical-commerce',
  'social teaching': 'catholic-social-teaching-guides-ethical-commerce',
  'common good': 'catholic-social-teaching-guides-ethical-commerce',
  
  // Education
  'catholic education': 'impact-catholic-education-student-motivation-success',
  'catholic schools': 'importance-collaboration-catholic-schools-parishes',
  'feast days': 'importance-celebrating-catholic-feast-days-schools',
  
  // Sacramental Preparation
  'sacramental preparation': 'use-sacramental-preparation-teaching-opportunity',
  'confirmation': 'use-sacramental-preparation-teaching-opportunity',
  'first communion': 'use-sacramental-preparation-teaching-opportunity',
  
  // Parish Life
  'parish life': 'encourage-student-participation-parish-life',
  'parish': 'importance-collaboration-catholic-schools-parishes',
  
  // Service & Mission
  'service': 'foster-spirit-service-mission-education',
  'mission': 'foster-spirit-service-mission-education',
  
  // Virtues
  'gratitude': 'encourage-gratitude-generosity-students',
  'generosity': 'encourage-gratitude-generosity-students',
  
  // Peace & Justice
  'nonviolence': 'role-catholic-educators-promoting-nonviolence-peace',
  'peace': 'role-catholic-educators-promoting-nonviolence-peace',
  'justice': 'role-catholic-educators-promoting-justice-equity',
  
  // Holiness
  'holiness': 'inspire-educators-see-teaching-path-holiness',
  'path to holiness': 'inspire-educators-see-teaching-path-holiness',
  
  // Ethics
  'artificial intelligence': 'artificial-intelligence-catholic-ethics-guide-2026',
  'ai ethics': 'artificial-intelligence-catholic-ethics-guide-2026',
  
  // Work & Commerce
  'theology of work': 'theology-work-commerce-catholic-thought',
  'ethical commerce': 'catholic-social-teaching-guides-ethical-commerce',
  'honest business': 'role-faith-shaping-honest-business-practices',
};

// Get article title by slug for link title attribute
function getArticleTitle(slug: string): string {
  const allPosts = blogData as BlogPost[];
  const post = allPosts.find(p => p.slug === slug);
  return post?.title || '';
}

// Escape special regex characters
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Process content and add internal links ONLY for curated Catholic terms
export function addInternalLinks(content: string, currentSlug: string): string {
  let processedContent = content;
  const addedLinks = new Set<string>(); // Track which articles we've linked to
  const maxLinks = 4; // Maximum number of internal links to add
  
  // Sort terms by length (longest first) to match longer phrases before shorter ones
  const sortedTerms = Object.keys(CATHOLIC_TERM_TO_ARTICLE).sort((a, b) => b.length - a.length);
  
  for (const term of sortedTerms) {
    if (addedLinks.size >= maxLinks) break;
    
    const articleSlug = CATHOLIC_TERM_TO_ARTICLE[term];
    
    // Skip if this is the current article or we already linked to this article
    if (articleSlug === currentSlug || addedLinks.has(articleSlug)) continue;
    
    // Create regex to find the term (case insensitive)
    // Must NOT be inside an existing link tag
    const termRegex = new RegExp(
      `(?<![\\w-])(?<!<a[^>]*>)(?<!href=["'][^"']*)\\b(${escapeRegex(term)})\\b(?![^<]*<\\/a>)(?![\\w-])`,
      'gi'
    );
    
    // Check if term exists in content
    if (!termRegex.test(processedContent)) continue;
    
    // Reset regex lastIndex
    termRegex.lastIndex = 0;
    
    // Get article title for the link
    const articleTitle = getArticleTitle(articleSlug);
    if (!articleTitle) continue;
    
    // Replace only the FIRST occurrence
    let replaced = false;
    processedContent = processedContent.replace(termRegex, (match) => {
      if (replaced) return match;
      replaced = true;
      addedLinks.add(articleSlug);
      return `<a href="/blog/${articleSlug}" class="internal-link" title="${articleTitle}">${match}</a>`;
    });
  }
  
  return processedContent;
}

// Export for related articles functionality
export function getRelatedBlogArticles(currentSlug: string, count: number = 3): BlogPost[] {
  const allPosts = blogData as BlogPost[];
  const currentPost = allPosts.find(p => p.slug === currentSlug);
  
  if (!currentPost) {
    return allPosts.slice(0, count);
  }
  
  // Get posts from same category first, then others
  const sameCategory = allPosts.filter(p => 
    p.slug !== currentSlug && p.category === currentPost.category
  );
  
  const otherPosts = allPosts.filter(p => 
    p.slug !== currentSlug && p.category !== currentPost.category
  );
  
  // Combine and return requested count
  return [...sameCategory, ...otherPosts].slice(0, count);
}
