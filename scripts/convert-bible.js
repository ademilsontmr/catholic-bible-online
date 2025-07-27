const fs = require('fs');
const path = require('path');

// Read the DRC.json file
const drcData = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/data/DRC.json'), 'utf8'));

// Book name to slug mapping (updated to match DRC.json names)
const bookSlugs = {
  'Genesis': 'genesis',
  'Exodus': 'exodus',
  'Leviticus': 'leviticus',
  'Numbers': 'numbers',
  'Deuteronomy': 'deuteronomy',
  'Joshua': 'joshua',
  'Judges': 'judges',
  'Ruth': 'ruth',
  'I Samuel': '1-samuel',
  'II Samuel': '2-samuel',
  'I Kings': '1-kings',
  'II Kings': '2-kings',
  'I Chronicles': '1-chronicles',
  'II Chronicles': '2-chronicles',
  'Ezra': 'ezra',
  'Nehemiah': 'nehemiah',
  'Tobit': 'tobit',
  'Judith': 'judith',
  'Esther': 'esther',
  'Job': 'job',
  'Psalms': 'psalms',
  'Proverbs': 'proverbs',
  'Ecclesiastes': 'ecclesiastes',
  'Song of Solomon': 'song-of-solomon',
  'Wisdom': 'wisdom',
  'Sirach': 'sirach',
  'Isaiah': 'isaiah',
  'Jeremiah': 'jeremiah',
  'Lamentations': 'lamentations',
  'Baruch': 'baruch',
  'Ezekiel': 'ezekiel',
  'Daniel': 'daniel',
  'Hosea': 'hosea',
  'Joel': 'joel',
  'Amos': 'amos',
  'Obadiah': 'obadiah',
  'Jonah': 'jonah',
  'Micah': 'micah',
  'Nahum': 'nahum',
  'Habakkuk': 'habakkuk',
  'Zephaniah': 'zephaniah',
  'Haggai': 'haggai',
  'Zechariah': 'zechariah',
  'Malachi': 'malachi',
  'I Maccabees': '1-maccabees',
  'II Maccabees': '2-maccabees',
  'Matthew': 'matthew',
  'Mark': 'mark',
  'Luke': 'luke',
  'John': 'john',
  'Acts': 'acts',
  'Romans': 'romans',
  'I Corinthians': '1-corinthians',
  'II Corinthians': '2-corinthians',
  'Galatians': 'galatians',
  'Ephesians': 'ephesians',
  'Philippians': 'philippians',
  'Colossians': 'colossians',
  'I Thessalonians': '1-thessalonians',
  'II Thessalonians': '2-thessalonians',
  'I Timothy': '1-timothy',
  'II Timothy': '2-timothy',
  'Titus': 'titus',
  'Philemon': 'philemon',
  'Hebrews': 'hebrews',
  'James': 'james',
  'I Peter': '1-peter',
  'II Peter': '2-peter',
  'I John': '1-john',
  'II John': '2-john',
  'III John': '3-john',
  'Jude': 'jude',
  'Revelation of John': 'revelation'
};

// Testament mapping (updated to include all books)
const testamentMapping = {
  'Genesis': 'old', 'Exodus': 'old', 'Leviticus': 'old', 'Numbers': 'old', 'Deuteronomy': 'old',
  'Joshua': 'old', 'Judges': 'old', 'Ruth': 'old', 'I Samuel': 'old', 'II Samuel': 'old',
  'I Kings': 'old', 'II Kings': 'old', 'I Chronicles': 'old', 'II Chronicles': 'old', 'Ezra': 'old',
  'Nehemiah': 'old', 'Tobit': 'old', 'Judith': 'old', 'Esther': 'old', 'Job': 'old',
  'Psalms': 'old', 'Proverbs': 'old', 'Ecclesiastes': 'old', 'Song of Solomon': 'old', 'Wisdom': 'old',
  'Sirach': 'old', 'Isaiah': 'old', 'Jeremiah': 'old', 'Lamentations': 'old', 'Baruch': 'old',
  'Ezekiel': 'old', 'Daniel': 'old', 'Hosea': 'old', 'Joel': 'old', 'Amos': 'old',
  'Obadiah': 'old', 'Jonah': 'old', 'Micah': 'old', 'Nahum': 'old', 'Habakkuk': 'old',
  'Zephaniah': 'old', 'Haggai': 'old', 'Zechariah': 'old', 'Malachi': 'old', 'I Maccabees': 'old', 'II Maccabees': 'old',
  'Matthew': 'new', 'Mark': 'new', 'Luke': 'new', 'John': 'new', 'Acts': 'new',
  'Romans': 'new', 'I Corinthians': 'new', 'II Corinthians': 'new', 'Galatians': 'new', 'Ephesians': 'new',
  'Philippians': 'new', 'Colossians': 'new', 'I Thessalonians': 'new', 'II Thessalonians': 'new',
  'I Timothy': 'new', 'II Timothy': 'new', 'Titus': 'new', 'Philemon': 'new', 'Hebrews': 'new',
  'James': 'new', 'I Peter': 'new', 'II Peter': 'new', 'I John': 'new', 'II John': 'new',
  'III John': 'new', 'Jude': 'new', 'Revelation of John': 'new'
};

// Book name mapping for display
const bookNameMapping = {
  'I Samuel': '1 Samuel',
  'II Samuel': '2 Samuel',
  'I Kings': '1 Kings',
  'II Kings': '2 Kings',
  'I Chronicles': '1 Chronicles',
  'II Chronicles': '2 Chronicles',
  'I Maccabees': '1 Maccabees',
  'II Maccabees': '2 Maccabees',
  'I Corinthians': '1 Corinthians',
  'II Corinthians': '2 Corinthians',
  'I Thessalonians': '1 Thessalonians',
  'II Thessalonians': '2 Thessalonians',
  'I Timothy': '1 Timothy',
  'II Timothy': '2 Timothy',
  'I Peter': '1 Peter',
  'II Peter': '2 Peter',
  'I John': '1 John',
  'II John': '2 John',
  'III John': '3 John',
  'Revelation of John': 'Revelation'
};

// Convert the data
const convertedData = {};

drcData.books.forEach(book => {
  const bookName = book.name;
  const slug = bookSlugs[bookName];
  const testament = testamentMapping[bookName];
  
  if (!slug) {
    console.warn(`No slug found for book: ${bookName}`);
    return;
  }
  
  const chapters = [];
  
  book.chapters.forEach(chapter => {
    const chapterVerses = [];
    chapter.verses.forEach(verse => {
      chapterVerses.push(verse.text);
    });
    chapters.push(chapterVerses);
  });
  
  convertedData[slug] = {
    name: bookNameMapping[bookName] || bookName,
    testament: testament,
    chapters: chapters
  };
});

// Write the converted data
fs.writeFileSync(
  path.join(__dirname, '../src/data/bible.json'),
  JSON.stringify(convertedData, null, 2)
);

console.log('✅ Bible data converted successfully!');
console.log(`📚 Total books: ${Object.keys(convertedData).length}`);
console.log(`📖 Total chapters: ${Object.values(convertedData).reduce((sum, book) => sum + book.chapters.length, 0)}`);

// List all books
console.log('\n📚 Books included:');
Object.keys(convertedData).forEach(slug => {
  const book = convertedData[slug];
  console.log(`  - ${book.name} (${book.testament === 'old' ? 'Old' : 'New'} Testament)`);
}); 