const fs = require('fs');

// Read existing blog data
const blogData = JSON.parse(fs.readFileSync('./src/data/blog.json', 'utf8'));

// Find and update the political articles (IDs 500-509)
const updatedArticles = blogData.map(article => {
  if (article.id >= 500 && article.id <= 509) {
    // Create short slugs based on the pattern
    const slugMapping = {
      500: 'catholic-saints-politics',
      501: 'catholic-politicians-history', 
      502: 'vatican-global-politics',
      503: 'papal-encyclicals-politics',
      504: 'john-paul-ii-freedom',
      505: 'catholic-resistance-conflicts',
      506: 'catholic-martyrs-politics',
      507: 'church-fall-communism',
      508: 'catholic-human-rights',
      509: 'catholic-leaders-democracy'
    };

    return {
      ...article,
      slug: slugMapping[article.id]
    };
  }
  return article;
});

// Write updated blog data back to file
fs.writeFileSync('./src/data/blog.json', JSON.stringify(updatedArticles, null, 2));

console.log('✅ SLUGS CORRIGIDOS PARA FORMATO CURTO!');
console.log('📝 NOVOS SLUGS DOS ARTIGOS POLÍTICOS:');
console.log('500. catholic-saints-politics');
console.log('501. catholic-politicians-history');
console.log('502. vatican-global-politics');
console.log('503. papal-encyclicals-politics');
console.log('504. john-paul-ii-freedom');
console.log('505. catholic-resistance-conflicts');
console.log('506. catholic-martyrs-politics');
console.log('507. church-fall-communism');
console.log('508. catholic-human-rights');
console.log('509. catholic-leaders-democracy');
console.log('');
console.log('🎯 FORMATO CORRETO: /blog/[slug-curto]');
console.log('✝️ CORREÇÃO COMPLETADA COM SUCESSO!'); 