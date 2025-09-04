const fs = require('fs');
const path = require('path');

// Função para corrigir um arquivo
function fixShareButtonInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Padrão para encontrar ShareButton com text= (incluindo template literals)
    const pattern = /<ShareButton\s+title=\{?`([^`]+)`\}?\s+text=\{?`([^`]+)`\}?\s*\/?>/g;
    
    content = content.replace(pattern, (match, title, text) => {
      modified = true;
      // Extrair o slug da URL do arquivo
      const urlMatch = filePath.match(/novenas\/([^\/]+)\/([^\/]+)/);
      if (urlMatch) {
        const category = urlMatch[1];
        const day = urlMatch[2];
        const url = `/novenas/${category}/${day}`;
        
        return `<ShareButton \n            title={\`${title}\`} \n            url="${url}"\n            excerpt={\`${text}\`} \n          />`;
      }
      return match; // Se não conseguir extrair a URL, mantém como está
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Corrigido: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.log(`❌ Erro ao processar ${filePath}:`, error.message);
    return false;
  }
}

// Função para processar diretório recursivamente
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let totalFixed = 0;

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      totalFixed += processDirectory(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixShareButtonInFile(fullPath)) {
        totalFixed++;
      }
    }
  }

  return totalFixed;
}

// Diretório principal
const mainDir = path.join(__dirname, '../src/app/novenas');
console.log('🔍 Procurando por arquivos restantes com ShareButton antigo...');

const totalFixed = processDirectory(mainDir);
console.log(`\n🎉 Total de arquivos corrigidos: ${totalFixed}`);
console.log('✅ Todos os ShareButton restantes foram atualizados para a nova API!'); 