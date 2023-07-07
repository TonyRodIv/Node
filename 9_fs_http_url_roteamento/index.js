// Importa o módulo http, que permite criar e manipular servidores web
const http = require('http');
// Importa o módulo fs, que permite ler e escrever arquivos
const fs = require('fs');
// Importa o módulo url, que permite analisar e construir URLs
const url = require('url');

// Define a porta que o servidor vai usar
const PORT = 5000;

// Cria um servidor usando a função createServer do módulo http
// Essa função recebe uma função de callback que é chamada a cada requisição
const server = http.createServer((req, res) => {
  // Usa a função parse do módulo url para obter um objeto com as informações da url da requisição
  // O segundo argumento true indica que a query string deve ser analisada como um objeto
  const q = url.parse(req.url, true);
  // Obtém o nome do arquivo da url usando a propriedade pathname do objeto q e removendo o primeiro caractere /
  const filename = q.pathname.substring(1);

  // Verifica se o nome do arquivo contém a string html
  if (filename.includes('html')) {
    // Verifica se o arquivo existe usando a função existsSync do módulo fs
    if (fs.existsSync(filename)) {
      // Lê o arquivo usando a função readFile do módulo fs
      // Essa função recebe uma função de callback que é chamada após a leitura do arquivo
      fs.readFile(filename, function (err, data) {
        // Verifica se houve algum erro na leitura do arquivo
        if (err) {
          // Define o status da resposta como 500 (Internal Server Error) e o tipo de conteúdo como HTML usando a função writeHead do objeto res
          res.writeHead(500, { 'Content-Type': 'text/html' });
          // Escreve um título na resposta usando a função write do objeto res
          res.write('<h1>Internal Server Error</h1>');
          // Encerra a resposta usando a função end do objeto res
          return res.end();
        }
        // Define o status da resposta como 200 (OK) e o tipo de conteúdo como HTML usando a função writeHead do objeto res
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // Escreve os dados do arquivo na resposta usando a função write do objeto res
        res.write(data);
        // Encerra a resposta usando a função end do objeto res
        return res.end();
      });
    } else {
      // Lê o arquivo 404.html usando a função readFile do módulo fs
      // Essa função recebe uma função de callback que é chamada após a leitura do arquivo
      fs.readFile('404.html', function (err, data) {
        // Verifica se houve algum erro na leitura do arquivo
        if (err) {
          // Define o status da resposta como 500 (Internal Server Error) e o tipo de conteúdo como HTML usando a função writeHead do objeto res
          res.writeHead(500, { 'Content-Type': 'text/html' });
          // Escreve um título na resposta usando a função write do objeto res
          res.write('<h1>Internal Server Error</h1>');
          // Encerra a resposta usando a função end do objeto res
          return res.end();
        }
        // Define o status da resposta como 404 (Not Found) e o tipo de conteúdo como HTML usando a função writeHead do objeto res
        res.writeHead(404, { 'Content-Type': 'text/html' });
        // Escreve os dados do arquivo na resposta usando a função write do objeto res
        res.write(data);
        // Encerra a resposta usando a função end do objeto res
        return res.end();
      });
    }
  } else {
    // Define o status da resposta como 404 (Not Found) e o tipo de conteúdo como HTML usando a função writeHead do objeto res
    res.writeHead(404, { 'Content-Type': 'text/html' });
    // Escreve um título na resposta usando a função write do objeto res
    res.write('<h1>File Not Found</h1>');
    // Encerra a resposta usando a função end do objeto res
    return res.end();
  }
});

// Faz o servidor escutar na porta definida e imprime uma mensagem no terminal
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
