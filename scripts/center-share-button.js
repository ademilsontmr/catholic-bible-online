const fs = require('fs');
const path = require('path');

// Função para centralizar o ShareButton em um arquivo
function centerShareButtonInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Padrão 1: ShareButton dentro de uma seção com comentário
    const pattern1 = /(\{\/\* Share Section \*\/\s*<section className="mb-12">\s*)(<ShareButton[^>]*\/>)(\s*<\/section>)/g;
    content = content.replace(pattern1, (match, before, shareButton, after) => {
      modified = true;
      return `${before}<div className="text-center">\n            ${shareButton}\n          </div>${after}`;
    });

    // Padrão 2: ShareButton solto com comentário Share Section
    const pattern2 = /(\{\/\* Share Section \*\/\s*)(<ShareButton[^>]*\/>)/g;
    content = content.replace(pattern2, (match, before, shareButton) => {
      modified = true;
      return `${before}<div className="text-center">\n          ${shareButton}\n        </div>`;
    });

    // Padrão 3: ShareButton solto sem comentário (fallback)
    const pattern3 = /(<ShareButton[^>]*\/>)/g;
    if (!modified) {
      content = content.replace(pattern3, (match, shareButton) => {
        // Só modifica se não foi modificado pelos padrões anteriores
        if (!content.includes('text-center')) {
          modified = true;
          return `<div className="text-center">\n        ${shareButton}\n      </div>`;
        }
        return match;
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