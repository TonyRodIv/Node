// Importa o módulo console, que permite imprimir mensagens no terminal
const { Console } = require('console');
// Importa o módulo http, que permite criar e manipular servidores web
const http = require('http');

// Define a porta que o servidor vai usar
const PORT = 5000;
// Cria um servidor usando a função createServer do módulo http
// Essa função recebe uma função de callback que é chamada a cada requisição
const server = http.createServer((req, res)=>{

    // Verifica a url da requisição e responde de acordo
    if(req.url === '/home'){
        // Define o status da resposta como 200 (OK) e o tipo de conteúdo como HTML
        res.writeHead(200,{'Content-Type':'text/html; charset=UTF-8'});
        // Escreve um título e um parágrafo na resposta
        res.write('<h1>Página Home Encontrada</h1>');
        res.write('<p>Bem vindo!!</p>');
        // Encerra a resposta
        res.end();
    }else if(req.url === '/sobre'){
        // Define o status da resposta como 200 (OK) e o tipo de conteúdo como HTML
        res.writeHead(200,{'Content-Type':'text/html; charset=UTF-8'});
        // Escreve um título e um parágrafo na resposta
        res.write('<h1>Página Sobre Encontrada</h1>');
        res.write('<p>Bem vindo!!</p>');
        // Encerra a resposta
        res.end();
    }else{
        // Define o status da resposta como 404 (Not Found) e o tipo de conteúdo como HTML
        res.writeHead(404,{'Content-Type':'text/html; charset=UTF-8'});
        // Escreve um título e um parágrafo na resposta
        res.write('<h1>Página não Encontrada</h1>');
        res.write('<p>Opa!! confira se a url está digitada corretamente!!</p>');
        // Encerra a resposta
        res.end();
    };
});

// Faz o servidor escutar na porta definida e imprime uma mensagem no terminal
server.listen(PORT,()=>{
    console.log(`Servidor rodando na porta ${PORT} 😁`);
});
