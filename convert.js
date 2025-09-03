const fs = require("fs");
const path = require("path");

const artigos = JSON.parse(fs.readFileSync("src/data/blog.json", "utf8"));

const outputDir = path.join(__dirname, "public", "posts");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

let indexLinks = "";

artigos.forEach((artigo, i) => {
  const fileName = `post-${i + 1}.html`;
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

// criar index.html
const indexHtml = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Blog</title>
</head>
<body>
  <h1>Lista de Artigos</h1>
  <ul>
    ${indexLinks}
  </ul>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, "public", "index.html"), indexHtml);

console.log("✅ Conversão concluída! HTMLs salvos em /public");
