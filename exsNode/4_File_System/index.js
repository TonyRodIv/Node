// Importa o módulo http, que permite criar e manipular servidores web
const http = require('http');
// Importa o módulo fs, que permite ler e escrever arquivos
const fs = require('fs');
// Define a porta que o servidor vai usar
PORT = 8080;

// Cria um servidor usando a função createServer do módulo http
// Essa função recebe uma função de callback que é chamada a cada requisição
const server = http.createServer((req, res) => {
  // Lê o arquivo index.html usando a função readFile do módulo fs
  // Essa função recebe uma função de callback que é chamada após a leitura do arquivo
  fs.readFile("index.html", function (err, data) {
    // Define o tipo de conteúdo da resposta como HTML usando a função writeHead do objeto res
    res.writeHead({ "Content-Type": "text/html" });
    // Escreve os dados do arquivo na resposta usando a função write do objeto res
    res.write(data);
    // Encerra a resposta usando a função end do objeto res
    res.end();
  });
});

// Faz o servidor escutar na porta definida e imprime uma mensagem no terminal
server.listen(PORT, () => {
  console.log(`Servidor Rodando da Porta ${PORT}`);
});
