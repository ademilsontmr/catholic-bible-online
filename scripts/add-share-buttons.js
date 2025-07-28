const fs = require('fs');
const path = require('path');

// Lista de todas as novenas
const novenas = [
  'our-lady-of-perpetual-help',
  'our-lady-of-fatima',
  'our-lady-of-lourdes',
  'our-lady-of-guadalupe',
  'our-lady-of-mount-carmel',
  'our-lady-of-the-rosary',
  'our-lady-of-sorrows',
  'our-lady-of-good-counsel',
  'our-lady-of-the-miraculous-medal',
  'st-catherine-laboure',
  'st-rita-cascia',
  'sacred-heart',
  'holy-spirit',
  'divine-mercy',
  'christmas-advent'
];

// Títulos das novenas para o compartilhamento
const novenaTitles = {
  'our-lady-of-perpetual-help': 'Our Lady of Perpetual Help Novena',
  'our-lady-of-fatima': 'Our Lady of Fatima Novena',
  'our-lady-of-lourdes': 'Our Lady of Lourdes Novena',
  'our-lady-of-guadalupe': 'Our Lady of Guadalupe Novena',
  'our-lady-of-mount-carmel': 'Our Lady of Mount Carmel Novena',
  'our-lady-of-the-rosary': 'Our Lady of the Rosary Novena',
  'our-lady-of-sorrows': 'Our Lady of Sorrows Novena',
  'our-lady-of-good-counsel': 'Our Lady of Good Counsel Novena',
  'our-lady-of-the-miraculous-medal': 'Our Lady of the Miraculous Medal Novena',
  'st-catherine-laboure': 'St. Catherine Laboure Novena',
  'st-rita-cascia': 'St. Rita of Cascia Novena',
  'sacred-heart': 'Sacred Heart of Jesus Novena',
  'holy-spirit': 'Holy Spirit Novena',
  'divine-mercy': 'Divine Mercy Novena',
  'christmas-advent': 'Christmas Advent Novena'
};

// Temas dos dias para cada novena
const dayThemes = {
  'our-lady-of-perpetual-help': ['Trust', 'Hope', 'Love', 'Faith', 'Prayer', 'Devotion', 'Intercession', 'Protection', 'Grace'],
  'our-lady-of-fatima': ['Faith', 'Hope', 'Love', 'Prayer', 'Penance', 'Conversion', 'Peace', 'Reparation', 'Triumph'],
  'our-lady-of-lourdes': ['Faith', 'Hope', 'Healing', 'Prayer', 'Penance', 'Conversion', 'Peace', 'Reparation', 'Grace'],
  'our-lady-of-guadalupe': ['Faith', 'Hope', 'Love', 'Prayer', 'Conversion', 'Protection', 'Peace', 'Intercession', 'Grace'],
  'our-lady-of-mount-carmel': ['Faith', 'Hope', 'Love', 'Prayer', 'Devotion', 'Protection', 'Intercession', 'Grace', 'Salvation'],
  'our-lady-of-the-rosary': ['Faith', 'Hope', 'Love', 'Prayer', 'Devotion', 'Protection', 'Intercession', 'Grace', 'Victory'],
  'our-lady-of-sorrows': ['Faith', 'Hope', 'Love', 'Prayer', 'Suffering', 'Comfort', 'Intercession', 'Grace', 'Mercy'],
  'our-lady-of-good-counsel': ['Faith', 'Hope', 'Love', 'Prayer', 'Wisdom', 'Guidance', 'Intercession', 'Grace', 'Counsel'],
  'our-lady-of-the-miraculous-medal': ['Faith and Trust', 'Immaculate Conception', 'Divine Protection', 'Purity of Heart', 'Spirit of Prayer', 'Consecration', 'Loving Protection', 'Happy Death', 'Eternal Bliss'],
  'st-catherine-laboure': ['Faith', 'Hope', 'Love', 'Prayer', 'Humility', 'Service', 'Intercession', 'Grace', 'Devotion'],
  'st-rita-cascia': ['Faith', 'Hope', 'Love', 'Prayer', 'Patience', 'Suffering', 'Intercession', 'Grace', 'Miracles'],
  'sacred-heart': ['Faith', 'Hope', 'Love', 'Prayer', 'Devotion', 'Reparation', 'Intercession', 'Grace', 'Mercy'],
  'holy-spirit': ['Faith', 'Hope', 'Love', 'Prayer', 'Wisdom', 'Understanding', 'Counsel', 'Fortitude', 'Knowledge'],
  'divine-mercy': ['Faith', 'Hope', 'Love', 'Prayer', 'Trust', 'Mercy', 'Intercession', 'Grace', 'Forgiveness'],
  'christmas-advent': ['Faith', 'Hope', 'Love', 'Prayer', 'Preparation', 'Joy', 'Peace', 'Grace', 'Christmas']
};

// Template do botão de compartilhamento
function getShareButton(novenaName, dayNumber, theme) {
  const title = novenaTitles[novenaName];
  return `        {/* Share Section */}
        <section className="text-center mb-12">
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: '${title} - Day ${dayNumber}: ${theme}',
                  text: 'Join me in praying the ${title} - Day ${dayNumber} focusing on ${theme}.',
                  url: window.location.href
                });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }
            }}
            className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            <span className="text-sm text-gray-600 font-medium">Share</span>
          </button>
        </section>`;
}

// Função para adicionar o botão de compartilhamento a um arquivo
function addShareButtonToFile(filePath, novenaName, dayNumber, theme) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Verificar se já tem o botão de compartilhamento
    if (content.includes('Share Section')) {
      console.log(`✅ ${filePath} already has share button`);
      return;
    }
    
    // Encontrar a seção Closing Prayer
    const closingPrayerIndex = content.indexOf('{/* Closing */}');
    if (closingPrayerIndex === -1) {
      console.log(`❌ ${filePath} - Closing Prayer section not found`);
      return;
    }
    
    // Encontrar o final da seção Closing Prayer
    const closingPrayerEnd = content.indexOf('{/* Navigation */}', closingPrayerIndex);
    if (closingPrayerEnd === -1) {
      console.log(`❌ ${filePath} - Navigation section not found`);
      return;
    }
    
    // Inserir o botão de compartilhamento
    const shareButton = getShareButton(novenaName, dayNumber, theme);
    const newContent = content.slice(0, closingPrayerEnd) + '\n\n' + shareButton + '\n\n' + content.slice(closingPrayerEnd);
    
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`✅ Added share button to ${filePath}`);
    
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

// Função principal
function main() {
  console.log('🚀 Starting to add share buttons to all novenas...\n');
  
  novenas.forEach(novena => {
    console.log(`📖 Processing ${novena}...`);
    
    for (let day = 1; day <= 9; day++) {
      const filePath = path.join(__dirname, '..', 'src', 'app', 'novenas', novena, `day-${day}`, 'page.tsx');
      
      if (fs.existsSync(filePath)) {
        const theme = dayThemes[novena][day - 1];
        addShareButtonToFile(filePath, novena, day, theme);
      } else {
        console.log(`⚠️  ${filePath} not found`);
      }
    }
    
    console.log('');
  });
  
  console.log('🎉 Finished adding share buttons to all novenas!');
}

// Executar o script
if (require.main === module) {
  main();
}

module.exports = { addShareButtonToFile, getShareButton }; 