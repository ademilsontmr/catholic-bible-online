const fs = require('fs');
const path = require('path');

// Função para centralizar o ShareButton em um arquivo
function centerShareButtonInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Verificar se já tem text-center
    if (content.includes('text-center')) {
      return false;
    }

    // Padrão 1: ShareButton com comentário Share Section
    const pattern1 = /(\{\/\* Share Section \*\/\s*)(<ShareButton[^>]*\/>)/g;
    content = content.replace(pattern1, (match, comment, shareButton) => {
      modified = true;
      return `${comment}<div className="text-center">\n          ${shareButton}\n        </div>`;
    });

    // Padrão 2: ShareButton solto (sem comentário)
    if (!modified) {
      const pattern2 = /(\s*)(<ShareButton[^>]*\/>)/g;
      content = content.replace(pattern2, (match, whitespace, shareButton) => {
        modified = true;
        return `${whitespace}{/* Share Section */}
        <div className="text-center">
          ${shareButton}
        </div>`;
      });
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Centralizado: ${filePath}`);
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
      if (centerShareButtonInFile(fullPath)) {
        totalFixed++;
      }
    }
  }

  return totalFixed;
}

// Diretório principal
const mainDir = path.join(__dirname, '../src/app/novenas');
console.log('🔍 Procurando por páginas de novenas para centralizar o ShareButton...');

const totalFixed = processDirectory(mainDir);
console.log(`\n🎉 Total de páginas atualizadas: ${totalFixed}`);
console.log('✅ Todos os ShareButton foram centralizados!'); 