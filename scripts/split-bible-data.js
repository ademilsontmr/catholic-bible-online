const fs = require('fs');
const path = require('path');

// Ler o arquivo bible.json original
const bibleData = JSON.parse(fs.readFileSync('src/data/bible.json', 'utf8'));

// Criar diretório para os livros individuais
const booksDir = 'src/data/bible-books';
if (!fs.existsSync(booksDir)) {
  fs.mkdirSync(booksDir, { recursive: true });
}

// Criar arquivo de índice com metadados
const booksIndex = {};

// Dividir cada livro em um arquivo separado
Object.keys(bibleData).forEach(bookSlug => {
  const book = bibleData[bookSlug];
  
  // Salvar livro individual
  const bookFile = path.join(booksDir, `${bookSlug}.json`);
  fs.writeFileSync(bookFile, JSON.stringify(book, null, 2));
  
  // Adicionar ao índice
  booksIndex[bookSlug] = {
    name: book.name,
    testament: book.testament,
    chapters: book.chapters.length,
    file: `${bookSlug}.json`
  };
  
  console.log(`✅ Criado: ${bookSlug}.json (${book.chapters.length} capítulos)`);
});

// Salvar índice
fs.writeFileSync(path.join(booksDir, 'index.json'), JSON.stringify(booksIndex, null, 2));

console.log(`\n🎉 Divisão concluída!`);
console.log(`📁 Diretório: ${booksDir}`);
console.log(`📊 Total de livros: ${Object.keys(booksIndex).length}`);
console.log(`📄 Arquivo de índice: ${booksDir}/index.json`);

// Calcular tamanhos
const originalSize = fs.statSync('src/data/bible.json').size;
const booksDirSize = fs.readdirSync(booksDir)
  .filter(file => file.endsWith('.json'))
  .reduce((total, file) => total + fs.statSync(path.join(booksDir, file)).size, 0);

console.log(`\n📏 Tamanhos:`);
console.log(`   Original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`   Dividido: ${(booksDirSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`   Economia: ${((originalSize - booksDirSize) / 1024 / 1024).toFixed(2)} MB`); 