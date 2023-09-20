const express = require('express');
const mysql2 = require('mysql2');
const app = express();

app.use(express.json());

const connection = mysql2.createConnection({
    host: "localhost",
    user: "aluno_medio",
    password: "@lunoSenai23.",
    database: "system_products"
});

app.post('/produtos', (req,res)=>{
    const{nome,descricao,preco}=req.body;
    
    connection.connect();

    const sqlInsert = `INSERT INTO tb_produtos(nome,descricao,preco) VALUES( '${nome}', '${descricao}','${preco}')`;

    connection.query(sqlInsert,(error,result)=>{
        if(error){
            console.error(error)
        }else{
            console.log(result);
            res.status(200).json({message:"Produto Inserido com sucesso!!"})
        }
    });

    // connection.end();
});

app.listen(500,()=>console.log('servidor sendo executado na porta 500'));
