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

// Função para atualizar um arquivo para usar o componente ShareButton
function updateFileToUseShareButton(filePath, novenaName, dayNumber, theme) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Verificar se já usa o componente ShareButton
    if (content.includes('import ShareButton from')) {
      console.log(`✅ ${filePath} already uses ShareButton component`);
      return;
    }
    
    // Adicionar import do ShareButton
    if (!content.includes('import ShareButton from')) {
      content = content.replace(
        "import Link from 'next/link'",
        "import Link from 'next/link'\nimport ShareButton from '@/components/ShareButton'"
      );
    }
    
    // Encontrar e substituir a seção de compartilhamento inline
    const shareSectionRegex = /{\/\* Share Section \*\/}\s*<section className="text-center mb-12">[\s\S]*?<\/section>/;
    const match = content.match(shareSectionRegex);
    
    if (match) {
      const title = novenaTitles[novenaName];
      const newShareSection = `        {/* Share Section */}
        <ShareButton 
          title="${title} - Day ${dayNumber}: ${theme}"
          text="Join me in praying the ${title} - Day ${dayNumber} focusing on ${theme}."
        />`;
      
      content = content.replace(shareSectionRegex, newShareSection);
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated ${filePath} to use ShareButton component`);
    } else {
      console.log(`⚠️  ${filePath} - Share section not found or already updated`);
    }
    
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

// Função principal
function main() {
  console.log('🚀 Starting to update share buttons to use ShareButton component...\n');
  
  novenas.forEach(novena => {
    console.log(`📖 Processing ${novena}...`);
    
    for (let day = 1; day <= 9; day++) {
      const filePath = path.join(__dirname, '..', 'src', 'app', 'novenas', novena, `day-${day}`, 'page.tsx');
      
      if (fs.existsSync(filePath)) {
        const theme = dayThemes[novena][day - 1];
        updateFileToUseShareButton(filePath, novena, day, theme);
      } else {
        console.log(`⚠️  ${filePath} not found`);
      }
    }
    
    console.log('');
  });
  
  console.log('🎉 Finished updating share buttons to use ShareButton component!');
}

// Executar o script
if (require.main === module) {
  main();
}

module.exports = { updateFileToUseShareButton }; 