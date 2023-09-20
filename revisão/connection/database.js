const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "aluno_medio",
    password: "@lunoSenai23.",
    database: "system_products"
});

connection.connect();

connection.query("INSERT INTO tb_produtos VALUES(1, 'Produto 001', 'Produto Cadastrado',12)",(error,result)=>{
    if(error)console.error(error);
    console.log(result);
});

connection.end()