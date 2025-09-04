const fs = require('fs');
const path = require('path');

const blogData = JSON.parse(fs.readFileSync('src/data/blog.json', 'utf8'));
const totalArticles = blogData.length;
const articlesPerFile = 1000;
const totalFiles = Math.ceil(totalArticles / articlesPerFile);

console.log(`📊 Total de artigos: ${totalArticles}`);
console.log(`📁 Arquivos a serem criados: ${totalFiles}`);
console.log(`📝 Artigos por arquivo: ${articlesPerFile}`);

// Criar pasta para os arquivos divididos
const outputDir = path.join(__dirname, '../src/data/blog-parts');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Dividir os artigos
for (let i = 0; i < totalFiles; i++) {
  const startIndex = i * articlesPerFile;
  const endIndex = Math.min((i + 1) * articlesPerFile, totalArticles);
  const partData = blogData.slice(startIndex, endIndex);
  
  const fileName = `blog-part-${i + 1}.json`;
  const filePath = path.join(outputDir, fileName);
  
  fs.writeFileSync(filePath, JSON.stringify(partData, null, 2));
  
  const fileSize = fs.statSync(filePath).size;
  const fileSizeMB = (fileSize / (1024 * 1024)).toFixed(2);
  
  console.log(`✅ ${fileName}: ${partData.length} artigos, ${fileSizeMB} MB`);
}

// Criar arquivo de índice
const indexData = {
  totalArticles,
  totalFiles,
  articlesPerFile,
  parts: Array.from({ length: totalFiles }, (_, i) => `blog-part-${i + 1}.json`)
};

fs.writeFileSync(path.join(outputDir, 'index.json'), JSON.stringify(indexData, null, 2));
console.log(`\n📋 Arquivo de índice criado: index.json`);

console.log(`\n🎉 Divisão concluída! Arquivos salvos em: ${outputDir}`); 