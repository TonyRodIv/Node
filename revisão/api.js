const express = require("express");
const {randomUUID} = require("crypto");
const app = express();
app.use(express.json());

app.get('/',(request, response)=>{
    return response.send("?");
});

const usuarios = [];
app.post("/usuarios",(request, response)=>{
    const{name, username, password, email}= request.body;
    const user = {
        id: randomUUID(),
        name: name,
        username: username,
        password: password,
        email: email,
        posts: {
            id:randomUUID(),
            conteudo
        }
    };
    usuarios.push(user);
    return response.json(user);
})
app.post("/Uposts/:id",(request, response)=>{
    const publi ={
        idP: randomUUID(),
        conteudo:conteudo
    };
});
app.get("/usuarios",(request, response)=>{
    return response.json(usuarios);
});
app.listen(5000,()=>console.log("Servidor executado na porta 5000 !!"));