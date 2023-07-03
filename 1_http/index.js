const { Console } = require('console');
const http = require('http');
// console.log(http);

const PORT = 5000;
const server = http.createServer((req, res)=>{
    // res.write("Olá, Mundo!!");
    // res.end();

    if(req.url === '/home'){
        res.writeHead(200,{'Content-Type':'text/html; charset=UTF-8'});
        res.write('<h1>Página Home Encontrada</h1>');
        res.write('<p>Bem vindo!!</p>');
        res.end();
    }else if(req.url === '/sobre'){
        res.writeHead(200,{'Content-Type':'text/html; charset=UTF-8'});
        res.write('<h1>Página Sobre Encontrada</h1>');
        res.write('<p>Bem vindo!!</p>');
        res.end();
    }else{
        res.writeHead(404,{'Content-Type':'text/html; charset=UTF-8'});
        res.write('<h1>Página não Encontrada</h1>');
        res.write('<p>Opa!! confira se a url está digitada corretamente!!</p>');
        res.end();
    };
});

server.listen(PORT,()=>{
    console.log(`Servidor rodando na porta ${PORT} 😁`);
});