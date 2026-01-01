const fs = require('fs');
const path = require('path');

// Bible books mapping for related readings
const bibleBooks = [
  { book: 'matthew', chapters: [5, 6, 7, 11, 18, 25, 28] },
  { book: 'john', chapters: [1, 3, 6, 8, 10, 14, 15, 17] },
  { book: 'psalms', chapters: [23, 27, 34, 46, 51, 91, 103, 139] },
  { book: 'romans', chapters: [5, 8, 12] },
  { book: 'philippians', chapters: [2, 4] },
  { book: 'colossians', chapters: [1, 3] },
  { book: '1-corinthians', chapters: [13, 15] },
  { book: 'galatians', chapters: [5, 6] },
  { book: 'ephesians', chapters: [2, 3, 6] },
  { book: 'james', chapters: [1, 2, 5] },
  { book: '1-peter', chapters: [1, 2, 5] },
  { book: '1-john', chapters: [3, 4] },
  { book: 'hebrews', chapters: [11, 12] },
  { book: 'proverbs', chapters: [3, 4, 31] },
  { book: 'isaiah', chapters: [40, 41, 53, 55] },
  { book: 'jeremiah', chapters: [29, 31] },
  { book: 'luke', chapters: [1, 2, 10, 15] },
  { book: 'mark', chapters: [1, 10] },
  { book: 'genesis', chapters: [1, 12, 22] },
  { book: 'exodus', chapters: [3, 14, 20] },
];

const bibleLabels = {
  'matthew': 'Matthew',
  'john': 'John',
  'psalms': 'Psalms',
  'romans': 'Romans',
  'philippians': 'Philippians',
  'colossians': 'Colossians',
  '1-corinthians': '1 Corinthians',
  'galatians': 'Galatians',
  'ephesians': 'Ephesians',
  'james': 'James',
  '1-peter': '1 Peter',
  '1-john': '1 John',
  'hebrews': 'Hebrews',
  'proverbs': 'Proverbs',
  'isaiah': 'Isaiah',
  'jeremiah': 'Jeremiah',
  'luke': 'Luke',
  'mark': 'Mark',
  'genesis': 'Genesis',
  'exodus': 'Exodus',
};

// Blog posts for related readings
const blogPosts = [
  { slug: 'lent-2026-complete-guide-40-days-spiritual-transformation', title: 'Lent: 40 Days of Transformation' },
  { slug: 'saint-patrick-day-2026-faith-history-celebration', title: 'Saint Patrick: Faith & History' },
  { slug: 'catholic-faith-mental-health-2026-complete-guide', title: 'Faith and Mental Health' },
  { slug: 'artificial-intelligence-catholic-ethics-guide-2026', title: 'Catholic Ethics Guide' },
];

let bibleIndex = 0;
let blogIndex = 0;

function getNextBibleLink() {
  const bookData = bibleBooks[bibleIndex % bibleBooks.length];
  const chapterIndex = Math.floor(bibleIndex / bibleBooks.length) % bookData.chapters.length;
  const chapter = bookData.chapters[chapterIndex];
  bibleIndex++;
  
  return {
    book: bookData.book,
    chapter: chapter,
    label: `${bibleLabels[bookData.book]} ${chapter}`
  };
}

function getNextBlogLink() {
  const post = blogPosts[blogIndex % blogPosts.length];
  blogIndex++;
  return {
    slug: post.slug,
    title: post.title
  };
}

// Read the file
const filePath = path.join(__dirname, '../src/data/devotionals.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Find all readings that don't have bibleLink
// Pattern: prayer: '...' followed by }, (end of reading) without bibleLink
const readingPattern = /prayer: ['"`][^'"`]*['"`]\s*\n(\s*)\}/g;

let match;
let replacements = [];

while ((match = readingPattern.exec(content)) !== null) {
  // Check if this reading already has bibleLink (look back a bit)
  const contextStart = Math.max(0, match.index - 500);
  const context = content.substring(contextStart, match.index + match[0].length);
  
  if (!context.includes('bibleLink:')) {
    const bibleLink = getNextBibleLink();
    const blogLink = getNextBlogLink();
    const indent = match[1];
    
    const replacement = `prayer: ${match[0].match(/prayer: ['"`][^'"`]*['"`]/)[0].replace('prayer: ', '')},
${indent}bibleLink: {
${indent}  book: '${bibleLink.book}',
${indent}  chapter: ${bibleLink.chapter},
${indent}  label: '${bibleLink.label}'
${indent}},
${indent}blogLink: {
${indent}  slug: '${blogLink.slug}',
${indent}  title: '${blogLink.title}'
${indent}}
${indent}}`;
    
    replacements.push({
      original: match[0],
      replacement: replacement,
      index: match.index
    });
  }
}

// Apply replacements in reverse order to maintain indices
replacements.reverse().forEach(r => {
  content = content.substring(0, r.index) + r.replacement + content.substring(r.index + r.original.length);
});

// Write back
fs.writeFileSync(filePath, content);

console.log(`Added Related Reading links to ${replacements.length} readings`);
