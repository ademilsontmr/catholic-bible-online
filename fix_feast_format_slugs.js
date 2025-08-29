const fs = require('fs');

// Read existing blog data
const blogData = JSON.parse(fs.readFileSync('./src/data/blog.json', 'utf8'));

// Find and update the political articles (IDs 500-509)
const updatedArticles = blogData.map(article => {
  if (article.id >= 500 && article.id <= 509) {
    // Create feast-format slugs based on the pattern
    const feastSlugMapping = {
      500: 'feast-saints-politics',
      501: 'feast-politicians-history', 
      502: 'feast-vatican-diplomacy',
      503: 'feast-papal-encyclicals',
      504: 'feast-john-paul-freedom',
      505: 'feast-catholic-resistance',
      506: 'feast-catholic-martyrs',
      507: 'feast-church-communism',
      508: 'feast-human-rights',
      509: 'feast-democratic-leaders'
    };

    return {
      ...article,
      slug: feastSlugMapping[article.id]
    };
  }
  return article;
});

// Write updated blog data back to file
fs.writeFileSync('./src/data/blog.json', JSON.stringify(updatedArticles, null, 2));

console.log('✅ SLUGS CORRIGIDOS PARA FORMATO FEAST!');
console.log('📝 NOVOS SLUGS DOS ARTIGOS POLÍTICOS:');
console.log('500. feast-saints-politics');
console.log('501. feast-politicians-history');
console.log('502. feast-vatican-diplomacy');
console.log('503. feast-papal-encyclicals');
console.log('504. feast-john-paul-freedom');
console.log('505. feast-catholic-resistance');
console.log('506. feast-catholic-martyrs');
console.log('507. feast-church-communism');
console.log('508. feast-human-rights');
console.log('509. feast-democratic-leaders');
console.log('');
console.log('🎯 FORMATO CORRETO: /blog/feast-[tema]');
console.log('✝️ PADRÃO FEAST APLICADO COM SUCESSO!'); 