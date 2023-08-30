// const { Console } = require('console');
// Importando dependência nativa do NodeJS para criar um servidor
const http = require("http");
const PORT = 5000;

const server = http.createServer((request,response)=>{
    if(request.url === "/produtos"){
        response.end(JSON.stringify(
            [
                {
                    id:1,
                    name:"Coxinha",
                    description: "Algo",
                    price: 12.50
                },
                {
                    id:2,
                    name:"Pastel",
                    description: "Algo",
                    price: 12.50
                },
                {
                    id:3,
                    name:"Suco",
                    description: "Algo",
                    price: 12.50
                },
                {
                    id:4,
                    name:"Refrigerante",
                    description: "Algo",
                    price: 12.50
                }
            ]
        ))
    }else{
        response.writeHead(200,{
            "Content-Type":
            "application/json"});
        response.end(JSON.stringify({
            message: "Criando um servidor com NodeJS"
        }))
    }
});

server.listen(PORT,()=>{
    console.log(`Servidor rodando na porta ${PORT} 😁`);
});
