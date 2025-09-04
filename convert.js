const fs = require("fs");
const path = require("path");

// Ler o arquivo de índice para saber quantos arquivos temos
const indexData = JSON.parse(fs.readFileSync("src/data/blog-parts/index.json", "utf8"));
console.log(`📊 Total de artigos: ${indexData.totalArticles}`);
console.log(`📁 Arquivos de partes: ${indexData.totalFiles}`);

const outputDir = path.join(__dirname, "public", "posts");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

let indexLinks = "";
let articleCounter = 0;

// Processar cada arquivo de parte
indexData.parts.forEach((partFile, partIndex) => {
  console.log(`📖 Processando ${partFile}...`);
  
  const partData = JSON.parse(fs.readFileSync(`src/data/blog-parts/${partFile}`, "utf8"));
  
  partData.forEach((artigo) => {
    articleCounter++;
    const fileName = `post-${articleCounter}.html`;
    const html = `
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <title>${artigo.title}</title>
  </head>
  <body>
    <h1>${artigo.title}</h1>
    <p><em>${artigo.date}</em></p>
    <article>${artigo.content}</article>
    <a href="/index.html">⬅ Voltar</a>
  </body>
  </html>
  `;
    fs.writeFileSync(path.join(outputDir, fileName), html);
    indexLinks += `<li><a href="posts/${fileName}">${artigo.title}</a></li>\n`;
  });
  
  console.log(`✅ ${partFile} processado: ${partData.length} artigos`);
});

// criar index.html
const indexHtml = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Blog - Catholic Bible Online</title>
</head>
<body>
  <h1>Lista de Artigos</h1>
  <p>Total de artigos: ${articleCounter}</p>
  <ul>
    ${indexLinks}
  </ul>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, "public", "index.html"), indexHtml);

console.log(`\n🎉 Conversão concluída!`);
console.log(`📝 Total de artigos convertidos: ${articleCounter}`);
console.log(`📁 HTMLs salvos em: ${outputDir}`);
console.log(`🏠 Index criado em: public/index.html`);
