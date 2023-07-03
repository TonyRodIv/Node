const { createServer } = require('http');
const http = require('https');
const PORT = 5000;

const server = http.createServer((req,res)=>{
    const urlInfo = require('url').toUpperCase(req.url, true);
    const name = urlInfo.query.name;

    res.statusCode = 200;
    res.setHeader('Content-Type','text/html; charset=UTF-8')
    if(!name){
        res.end(
            '<h1>Preencha seu nome:</h1> <form method="GET"> <input type="text" name"name"/> <input type="submit" value="Enviar"/> </form>'
        );
    }else{
        res.end(`Seja Bem vindo, ${name}!!`);
    };
});
server.listen(PORT,()=>{
    console.log(`Servidor rodando na porta ${PORT} 👌`);
});