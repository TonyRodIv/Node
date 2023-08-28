const express = require("express");
const {randomUUID} = require("crypto")
const app = express();
app.use(express.json());

app.get('/',(request, response)=>{
    return response.send("Página Inicial")
})

const produtos = [];
app.post("/produtos",(request, response)=>{
    // DESESTRUTURAÇÃO DE UM OBJETO JS
    const{name, price, description}= request.body
    const produto = {
        id: randomUUID(),
        name,
        price,
        description
    };
    produtos.push(produto);
    return response.json(produto);
})
app.get("/produtos",(request, response)=>{
    return response.json(produtos);
})
app.get("/produtos/:id", (request, response)=>{
    const {id} = request.params

    const produto = produtos.find((produto) => produto.id === id)
    return response.json(produto)
})
app.delete("/produtos/:id", (request, response)=>{
    const {id} = request.params
    const produto = produtos.findIndex((produto) => produto.id === id)

    produtos.splice(produto,1)
    return response.json(produto)
})
app.listen(5000,()=>console.log("Servidor executado na porta 5000 !!"));