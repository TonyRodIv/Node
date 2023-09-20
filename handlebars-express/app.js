const express = require('express');
const exphdbs = require('express-handlebars');
const mysql2 = require('mysql2');

const app = express();

//O Express é uma estrutura de back-end que não é projetada para lidar com arquivos estáticos, como arquivos de estilização. Portanto, para usar Handlebars com o Express, é necessário configurar o motor de template Handlebars para usar um servidor de arquivos estáticos. Isso permite que o Express entregue arquivos estáticos, como arquivos CSS e JavaScript, para o frontend.

app.engine('handlebars',exphdbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (request, response)=>{
    // Código
    return response.render('home');
})

const connection = mysql2.createConnection({
    host: "localhost",
    user: "aluno_medio",
    password: "@lunoSenai23.",
    database: "system_products"
});

connection.connect((error)=>{
    // verifica se existe algum erro
    if(error){
        return console.log(error);
    }
    // caso nenhum erro seja encontrado vai ser retornado essa mensagem no console(terminal)
    console.log('Mysql está conectado');

})
app.listen(3333, ()=>{
    console.log('servidor rodando na porta 3333')
})