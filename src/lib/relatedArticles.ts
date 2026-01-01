import blogData from '@/data/blog.json';
import { BlogPost } from '@/types/blog';

// Extract keywords from text
function extractKeywords(text: string): string[] {
  const stopWords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with',
    'by', 'from', 'as', 'is', 'was', 'are', 'were', 'been', 'be', 'have', 'has', 'had',
    'do', 'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might', 'must',
    'shall', 'can', 'need', 'dare', 'ought', 'used', 'this', 'that', 'these', 'those',
    'i', 'you', 'he', 'she', 'it', 'we', 'they', 'what', 'which', 'who', 'whom',
    'your', 'his', 'her', 'its', 'our', 'their', 'my', 'me', 'him', 'us', 'them',
    'how', 'when', 'where', 'why', 'all', 'each', 'every', 'both', 'few', 'more',
    'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same',
    'so', 'than', 'too', 'very', 'just', 'also', 'now', 'here', 'there', 'then',
    'about', 'into', 'through', 'during', 'before', 'after', 'above', 'below',
    'between', 'under', 'again', 'further', 'once', 'any', 'being', 'if', 'because',
    'until', 'while', 'against', 'over', 'out', 'up', 'down', 'off', 'read', 'article',
    'complete', 'guide', 'learn', 'discover', 'explore', 'find', 'get', 'make', 'take'
  ]);
  
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 3 && !stopWords.has(word));
}

// Catholic-specific important terms for better matching
const catholicTerms = new Set([
  'prayer', 'rosary', 'mass', 'eucharist', 'communion', 'confession', 'sacrament',
  'saint', 'mary', 'jesus', 'christ', 'god', 'holy', 'spirit', 'trinity', 'father',
  'catholic', 'church', 'pope', 'bishop', 'priest', 'deacon', 'nun', 'religious',
  'faith', 'hope', 'charity', 'love', 'mercy', 'grace', 'salvation', 'redemption',
  'baptism', 'confirmation', 'matrimony', 'ordination', 'anointing', 'penance',
  'lent', 'advent', 'easter', 'christmas', 'pentecost', 'ascension', 'assumption',
  'novena', 'litany', 'devotion', 'meditation', 'contemplation', 'lectio', 'divina',
  'bible', 'scripture', 'gospel', 'psalm', 'verse', 'chapter', 'testament',
  'catechism', 'doctrine', 'dogma', 'tradition', 'magisterium', 'vatican',
  'virgin', 'immaculate', 'conception', 'annunciation', 'visitation', 'nativity',
  'passion', 'crucifixion', 'resurrection', 'transfiguration', 'miracle',
  'angel', 'archangel', 'guardian', 'michael', 'gabriel', 'raphael',
  'patron', 'intercession', 'veneration', 'beatification', 'canonization',
  'pilgrimage', 'shrine', 'relic', 'indulgence', 'blessing', 'consecration',
  'fasting', 'abstinence', 'almsgiving', 'piety', 'virtue', 'sin', 'forgiveness',
  'healing', 'suffering', 'cross', 'sacrifice', 'offering', 'thanksgiving',
  'family', 'marriage', 'children', 'parents', 'vocation', 'calling',
  'mental', 'health', 'anxiety', 'depression', 'peace', 'joy', 'hope'
]);

// Get related blog articles based on content similarity
export function getRelatedBlogArticles(currentSlug: string, count: number = 3): BlogPost[] {
  const allPosts = blogData as BlogPost[];
  const currentPost = allPosts.find(p => p.slug === currentSlug);
  
  if (!currentPost) {
    return allPosts.slice(0, count);
  }
  
  // Extract keywords from current post
  const currentKeywords = new Set([
    ...extractKeywords(currentPost.title),
    ...extractKeywords(currentPost.excerpt),
    ...extractKeywords(currentPost.content || '').slice(0, 100) // Limit content keywords
  ]);
  
  // Score each post based on relevance
  const scoredPosts = allPosts
    .filter(p => p.slug !== currentSlug)
    .map(post => {
      let score = 0;
      
      // Same category bonus
      if (post.category === currentPost.category) {
        score += 15;
      }
      
      // Extract keywords from candidate post
      const postKeywords = [
        ...extractKeywords(post.title),
        ...extractKeywords(post.excerpt)
      ];
      
      // Count matching keywords
      postKeywords.forEach(keyword => {
        if (currentKeywords.has(keyword)) {
          // Higher weight for Catholic-specific terms
          score += catholicTerms.has(keyword) ? 5 : 2;
        }
      });
      
      // Title word matching (highest weight)
      const titleWords = extractKeywords(post.title);
      const currentTitleWords = new Set(extractKeywords(currentPost.title));
      titleWords.forEach(word => {
        if (currentTitleWords.has(word)) {
          score += catholicTerms.has(word) ? 8 : 4;
        }
      });
      
      // Slight randomization for variety (based on combined slug hash)
      const hash = (currentSlug + post.slug).split('').reduce((a, b) => a + b.charCodeAt(0), 0);
      score += (hash % 3);
      
      return { post, score };
    });
  
  // Sort by score and return top results
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(({ post }) => post);
}

// Keywords mapping for books to find related articles
const bookKeywords: { [key: string]: string[] } = {
  // Old Testament
  genesis: ['creation', 'beginning', 'adam', 'eve', 'noah', 'abraham', 'isaac', 'jacob', 'joseph', 'covenant', 'faith'],
  exodus: ['moses', 'passover', 'commandments', 'liberation', 'egypt', 'red sea', 'sinai', 'law'],
  leviticus: ['sacrifice', 'holiness', 'priest', 'worship', 'law', 'purity'],
  numbers: ['wilderness', 'journey', 'faith', 'trust', 'obedience'],
  deuteronomy: ['law', 'covenant', 'commandments', 'love', 'obedience', 'moses'],
  joshua: ['promised land', 'faith', 'courage', 'victory', 'trust'],
  judges: ['faith', 'repentance', 'deliverance', 'sin'],
  ruth: ['loyalty', 'faith', 'redemption', 'family', 'love'],
  '1-samuel': ['prayer', 'faith', 'david', 'samuel', 'trust'],
  '2-samuel': ['david', 'kingdom', 'covenant', 'repentance', 'mercy'],
  '1-kings': ['solomon', 'wisdom', 'temple', 'prayer', 'faith'],
  '2-kings': ['prophet', 'faith', 'repentance', 'elijah', 'elisha'],
  '1-chronicles': ['david', 'worship', 'temple', 'praise'],
  '2-chronicles': ['temple', 'worship', 'prayer', 'repentance'],
  ezra: ['restoration', 'faith', 'prayer', 'scripture'],
  nehemiah: ['prayer', 'faith', 'perseverance', 'community'],
  tobit: ['angel', 'prayer', 'family', 'faith', 'marriage'],
  judith: ['courage', 'faith', 'prayer', 'trust'],
  esther: ['providence', 'courage', 'faith', 'prayer'],
  job: ['suffering', 'faith', 'trust', 'patience', 'hope'],
  psalms: ['prayer', 'praise', 'worship', 'trust', 'faith', 'mercy', 'thanksgiving'],
  proverbs: ['wisdom', 'faith', 'life', 'virtue', 'family'],
  ecclesiastes: ['wisdom', 'meaning', 'life', 'faith'],
  'song-of-solomon': ['love', 'marriage', 'faith', 'devotion'],
  wisdom: ['wisdom', 'faith', 'immortality', 'virtue'],
  sirach: ['wisdom', 'faith', 'virtue', 'family', 'prayer'],
  isaiah: ['messiah', 'prophecy', 'salvation', 'hope', 'faith', 'advent', 'christmas'],
  jeremiah: ['covenant', 'repentance', 'hope', 'faith', 'prayer'],
  lamentations: ['suffering', 'hope', 'mercy', 'faith', 'lent'],
  baruch: ['repentance', 'hope', 'faith', 'prayer'],
  ezekiel: ['vision', 'hope', 'restoration', 'faith', 'spirit'],
  daniel: ['faith', 'courage', 'prophecy', 'trust', 'prayer'],
  hosea: ['love', 'mercy', 'covenant', 'faith', 'forgiveness'],
  joel: ['spirit', 'pentecost', 'repentance', 'hope'],
  amos: ['justice', 'faith', 'social', 'mercy'],
  obadiah: ['justice', 'faith', 'hope'],
  jonah: ['mercy', 'repentance', 'mission', 'faith'],
  micah: ['justice', 'mercy', 'faith', 'messiah', 'christmas'],
  nahum: ['justice', 'faith', 'trust'],
  habakkuk: ['faith', 'trust', 'prayer', 'hope'],
  zephaniah: ['hope', 'faith', 'joy', 'advent'],
  haggai: ['temple', 'faith', 'worship', 'prayer'],
  zechariah: ['messiah', 'hope', 'faith', 'prophecy', 'palm sunday'],
  malachi: ['covenant', 'faith', 'worship', 'advent'],
  '1-maccabees': ['faith', 'courage', 'martyrdom', 'perseverance'],
  '2-maccabees': ['martyrdom', 'faith', 'prayer', 'dead', 'purgatory'],
  
  // New Testament
  matthew: ['jesus', 'gospel', 'sermon', 'beatitudes', 'kingdom', 'faith', 'christmas', 'easter'],
  mark: ['jesus', 'gospel', 'faith', 'discipleship', 'miracle', 'easter'],
  luke: ['jesus', 'gospel', 'mercy', 'prayer', 'mary', 'christmas', 'easter', 'parables'],
  john: ['jesus', 'gospel', 'love', 'faith', 'eternal life', 'eucharist', 'easter'],
  acts: ['spirit', 'pentecost', 'church', 'mission', 'apostles', 'faith'],
  romans: ['faith', 'grace', 'salvation', 'justification', 'love', 'spirit'],
  '1-corinthians': ['love', 'eucharist', 'church', 'resurrection', 'faith', 'gifts'],
  '2-corinthians': ['grace', 'suffering', 'faith', 'ministry', 'reconciliation'],
  galatians: ['faith', 'freedom', 'grace', 'spirit', 'love'],
  ephesians: ['church', 'grace', 'unity', 'faith', 'marriage', 'armor'],
  philippians: ['joy', 'faith', 'humility', 'christ', 'prayer'],
  colossians: ['christ', 'faith', 'wisdom', 'thanksgiving'],
  '1-thessalonians': ['hope', 'faith', 'love', 'second coming'],
  '2-thessalonians': ['hope', 'faith', 'perseverance', 'second coming'],
  '1-timothy': ['faith', 'church', 'prayer', 'ministry'],
  '2-timothy': ['faith', 'scripture', 'perseverance', 'ministry'],
  titus: ['faith', 'good works', 'grace', 'church'],
  philemon: ['forgiveness', 'reconciliation', 'faith', 'love'],
  hebrews: ['faith', 'christ', 'priesthood', 'sacrifice', 'perseverance'],
  james: ['faith', 'works', 'prayer', 'wisdom', 'patience'],
  '1-peter': ['faith', 'suffering', 'hope', 'baptism', 'holiness'],
  '2-peter': ['faith', 'scripture', 'hope', 'virtue'],
  '1-john': ['love', 'faith', 'light', 'truth', 'god'],
  '2-john': ['love', 'truth', 'faith'],
  '3-john': ['truth', 'hospitality', 'faith'],
  jude: ['faith', 'perseverance', 'truth'],
  revelation: ['hope', 'victory', 'heaven', 'faith', 'christ', 'mary', 'easter'],
};

// Category priorities based on book type
const categoryPriorities: { [key: string]: string[] } = {
  old: ['Bible & Faith', 'How to Pray', 'Catholic Living', 'Saints & Feast Days'],
  new: ['Bible & Faith', 'How to Pray', 'Saints & Feast Days', 'Catholic Living'],
};

export interface RelatedArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
}

export function getRelatedArticles(bookSlug: string, testament: string, count: number = 3): RelatedArticle[] {
  const allPosts = blogData as BlogPost[];
  const bookLower = bookSlug.toLowerCase();
  const keywords = bookKeywords[bookLower] || ['faith', 'prayer', 'catholic', 'bible'];
  const priorities = categoryPriorities[testament] || categoryPriorities.old;
  
  // Score each post based on relevance
  const scoredPosts = allPosts.map(post => {
    let score = 0;
    const titleLower = post.title.toLowerCase();
    const excerptLower = post.excerpt.toLowerCase();
    const contentLower = (post.content || '').toLowerCase();
    
    // Check keywords in title (highest weight)
    keywords.forEach(keyword => {
      if (titleLower.includes(keyword)) score += 10;
      if (excerptLower.includes(keyword)) score += 5;
      if (contentLower.includes(keyword)) score += 2;
    });
    
    // Boost by category priority
    const categoryIndex = priorities.indexOf(post.category);
    if (categoryIndex !== -1) {
      score += (4 - categoryIndex) * 3;
    }
    
    // Small random factor for variety (based on slug hash)
    const hash = post.slug.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    score += (hash % 5);
    
    return { post, score };
  });
  
  // Sort by score and take top results
  const topPosts = scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(({ post }) => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      category: post.category,
      readTime: post.readTime || '5 min read',
    }));
  
  return topPosts;
}
