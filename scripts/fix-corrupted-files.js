const fs = require('fs');
const path = require('path');

// Lista de arquivos que precisam ser corrigidos
const corruptedFiles = [
  'src/app/prayers/hail-mary/page.tsx',
  'src/app/prayers/memorare/page.tsx',
  'src/app/prayers/our-father/page.tsx',
  'src/app/prayers/rosary/page.tsx',
  'src/app/prayers/prayer-before-communion/page.tsx',
  'src/app/prayers/prayer-to-st-michael/page.tsx'
];

function fixCorruptedFile(filePath) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Substituir entidades HTML por caracteres normais
    content = content.replace(/&quot;/g, '"');
    content = content.replace(/&apos;/g, "'");
    content = content.replace(/&amp;/g, '&');
    content = content.replace(/&lt;/g, '<');
    content = content.replace(/&gt;/g, '>');
    
    // Corrigir tags de link incorretas
    content = content.replace(/<a href=/g, '<Link href=');
    content = content.replace(/<\/a>/g, '</Link>');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed ${filePath}`);
  } else {
    console.log(`❌ File not found: ${filePath}`);
  }
}

// Corrigir todos os arquivos
corruptedFiles.forEach(fixCorruptedFile);

console.log('🎉 All corrupted files have been fixed!'); 